const {
  Order,
  Product,
  User,
  Category,
  Op,
  OrderProduct,
} = require("../../services/db/db");
const prodController = require("../../apiServices/product/controller");
const cartGenerator = require("./cartGenerator");

//! SETTINGS
const VARIATION = 35; //? % de variacion entre el target y los productos que le siguen mas caros
async function createOrderCarrousel(user_id) {
  try {
    if (!user_id) user_id = 1;
    //$ testing
    await cartGenerator();
    //$ agarro categorias
    let categories = await Category.findAll({ raw: true });
    categories = categories.map((c) => c.name);
    //$ Obtengo todos los productos de todas las orders
    const allOrders = await Order.findAll({
      where: { user_id },
      include: { model: Product },
    });
    let allProducts = [];
    allOrders.forEach((order) => {
      order.dataValues.Products.forEach((p) => {
        allProducts.push(p.dataValues);
      });
    });
    //$agarro de todos los productos solo los mas caros sin repetir la categoria
    let newAllProducts = [];
    categories.forEach((category) => {
      let maxProduct = null;
      allProducts.forEach((p) => {
        if (p.category === category) {
          if (!maxProduct) maxProduct = p;
          else if (p.price > maxProduct.price) maxProduct = p;
        }
      });
      newAllProducts.push(maxProduct);
    });
    allProducts = newAllProducts;
    //$ seteo maximo  y transformo los productos mas caros a : su categoria + su posicion relativa
    let categoryCount = 0;
    allProducts = await Promise.all(
      allProducts.map(async (p, i) => {
        if (!p)
          return {
            category: categories[i],
            relativePos: null,
            selected: false,
          };
        categoryCount++;
        return {
          category: p.category,
          relativePos: await getRelativePos(p),
          selected: false,
        };
      })
    );
    //$ calculo el promedio total y seteo ese promedio en las categorias vacias si las hay
    let average;
    if (categoryCount === 0) average = 50;
    else
      average =
        allProducts.reduce((prev, product) => {
          if (product.relativePos) return prev + product.relativePos;
          return prev;
        }, 0) / categoryCount;
    console.log("average ", average);
    allProducts.forEach((p) => {
      if (!p.relativePos) p.relativePos = average;
    });
    //$ buscar 10 categorias random dentro del array
    //$ y por cada categoria encuentra un producto mayor al relativePos
    const finalResults = [];
    for (let index = 0; index < 10; index++) {
      let posibleProducts = await findAndGeneratePosibleProducts(allProducts);
      console.log("posibleProducts ", posibleProducts.length);
      const choosenProduct = findBestProduct(posibleProducts);
      finalResults.push(choosenProduct);
    }
    //$ failsafe en caso de que no exista algun producto rellena con un random
    for (let i = 0; i < finalResults.length; i++) {
      if (finalResults[i] === null) {
        console.log(NULL);
        const all = await Product.findAll();
        const pos = Math.floor(Math.random() * all.length);
        finalResults[i].push(all[pos].dataValues);
      }
    }
    //$ get username + setFavoriteStatus
    //!falta favorite status
    finalResults = prodController.setFavoriteStatus(
      finalResults,
      getUserName(user_id)
    );
    return finalResults;
  } catch (error) {
    throw new Error(error);
  }
}

//? HELPER FUNCTIONS
async function findAndGeneratePosibleProducts(arrProducts) {
  //$ tiro random entre 0 y max products
  let productFound = false;
  do {
    const pos = Math.floor(Math.random() * arrProducts.length);
    console.log("Position rolled ", pos);
    if (!arrProducts[pos].selected) {
      arrProducts[pos].selected = true;
      productFound = true;
      const prod = arrProducts[pos];
      //$ genero un array con productos entre la relativePos y la relativePos + amplitudMaxima
      const allProducts = await Product.findAll({
        where: { category: prod.category },
        order: [["price", "ASC"]],
        raw: true,
      });
      const minValue = getPriceFromRelativePos(
        allProducts[0].price,
        allProducts[allProducts.length - 1].price,
        prod.relativePos
      );
      const maxValue = getPriceFromRelativePos(
        allProducts[0].price,
        allProducts[allProducts.length - 1].price,
        prod.relativePos + VARIATION
      );
      //$ entre el minValue y el maxValue obtengo todos los productos
      let results = [];
      console.log("largo ", allProducts.length);
      allProducts.forEach((p) => {
        if (p.price > minValue - 1 && p.price <= maxValue) {
          console.log("found ", p.price);
          results.push(p);
        }
      });
      return results;
    }
  } while (!productFound);
}
function findBestProduct(posibleProducts) {
  const pos = Math.floor(Math.random() * posibleProducts.length);
  return posibleProducts[pos];
}

async function getRelativePos(product) {
  const products = await Product.findAll({
    where: { category: product.category },
    order: [["price", "ASC"]],
    raw: true,
  });
  const min = products[0].price;
  const curr = product.price;
  const max = products[products.length - 1].price;
  return ((curr - min) * 100) / (max - min);
}
function getPriceFromRelativePos(min, max, relativePos) {
  return (relativePos * (max - min)) / 100;
}
async function getUserName(user_id) {
  if (user_id === 1) return null;
  const foundUser = await User.findByPk(user_id);
  if (foundUser) return foundUser.username;
}
module.exports = createOrderCarrousel;
