# [TECHBUNNY](https://pf-techbunny-lake.vercel.app/)

[![Preview](client/public/intro.gif)](https://vimeo.com/795225619)

# INDICE
-[Acerca de](#Acerca-de) <br>
-[Tajetas de prueba](#TARJETAS-DE-PRUEBA) <br>
-[Landing Page](#Landing-Page) <br>
-[Home](#Home) <br>
-[Login / Register](#login--register) <br>
-[Searchbar dinamica](#Searchbar-dinamica) <br>
-[Modo oscuro , Favoritos , Carrito y Panel de usuario](#modo-oscuro--favoritos--carrito-y-panel-de-usuario) <br>
-[Filtro por marca y Ordernamiento](#Filtro-por-marca-y-Ordernamiento) <br>
-[Review de producto](#Review-de-producto) <br>
-[Realizar una compra](#Realizar-una-compra) <br>
-[Informacion de orden en panel de usuario](#Informacion-de-orden-en-panel-de-usuario) <br>
-[Mail con la informacion de compra](#Mail-con-la-informacion-de-compra) <br>
-[Cloudinary](#Cloudinary) <br>
-[Responsive](#Responsive) <br>
-[Linkedin](#Linkedin) <br>
-[Link a deploy](#Link-a-deploy) <br>
-[Link a video explicativo de la pagina](#Link-a-video--explicativo-de-la-pagina) <br>

# Acerca de
[TECHBUNNY](https://pf-techbunny-lake.vercel.app/) es un ecommerce de tecnología que cuenta con un catálogo de más de 800 productos. Además, ofrecemos la posibilidad de crear una cuenta y acceder a nuestras herramientas, una pasarela de pago integrada y un panel de control con estadísticas en tiempo real para que los administradores puedan gestionar todo lo necesario.<br>



# TARJETAS DE PRUEBA
| Tarjeta     | Número                | Código de seguridad | Fecha de caducidad | Nombre |    DNI    |
| ----------- | --------------------- | ------------------- | ------------------ | ------ | --------- |
| Mastercard  | 5031 7557 3453 0604   |        123          |       11/25        |  APRO  | 12345678  |
| Visa        | 4509 9535 6623 3704   |        123          |       11/25        |  APRO  | 12345678  |
<br>

[Volver al indice](#INDICE)

# Landing Page
![Preview](client/public/landing.gif)

En esta página mostramos varias imágenes relacionadas con los productos que vendemos. Al presionar el botón de 'Ingresar', serás redirigido al inicio del sitio. Además, si presionas la flecha hacia abajo, podrás conocer al equipo que está detrás de TECHBUNNY.<br>

[Volver al indice](#INDICE)

# Home
![Preview](client/public/Home.gif)

En la página de inicio encontrarás dos carruseles con diferentes productos, dependiendo de si el usuario ha iniciado sesión o no. Si no hay usuario logueado, los productos se mostrarán de manera aleatoria. 
Además, podrás encontrar las 6 categorías y las 6 marcas más populares del sitio.<br>

[Volver al indice](#INDICE)

# Login / Register
![Preview](client/public/login.png)
Para registrarte, tienes la opción clásica de rellenar el formulario, o también puedes hacerlo mediante Google. Y para el login, lo mismo: si tienes una cuenta tradicional, la utilizas; sino, puedes ingresar con Google. 
Si te registras de la manera tradicional, recibirás un correo electrónico para confirmar tu cuenta.

![Preview](client/public/register.png)
<br>

[Volver al indice](#INDICE)
# Searchbar dinamica
![Preview](client/public/Searchbar.gif)

La barra de búsqueda es uno de los componentes que se incluyen en la barra de navegación.
La misma se actualiza automáticamente a medida que escribes.<br>

[Volver al indice](#INDICE)

# Modo oscuro , Favoritos , Carrito y Panel de usuario
![Preview](client/public/buttons.png)

![Preview](client/public/navbar.gif)

En la barra de navegación encontrarás un menú desplegable con todas las categorías existentes, un botón para cambiar al modo oscuro/claro, un botón para acceder a favoritos, un botón para acceder al carrito de compras y un menú desplegable con el panel de usuario. Desde este último, podrás acceder a tu perfil y, si eres administrador, al panel de control.<br>

[Volver al indice](#INDICE)

# Detalles del panel de usuario
![Preview](client/public/panel.gif)

En el panel de usuario podrás visualizar las órdenes que has realizado y su estado. 
Además, si eres administrador, podrás acceder al panel de control, donde encontrarás datos reales de miles de compras simuladas por nosotros.<br>

[Volver al indice](#INDICE)

# Filtro por marca y Ordernamiento 
![Preview](client/public/filtersandorders.gif)

Cuando accedes a una categoría, como por ejemplo "notebooks", tendrás la opción de filtrar por marca y también ordenar por valor (ascendente o descendente), ambos funcionando simultáneamente.<br>

[Volver al indice](#INDICE)

# Review de producto
![Preview](client/public/review1.png)

![Preview](client/public/review.gif)

En los productos, puedes dejar una reseña que se promedia con las existentes y así se le da un puntaje al producto en una escala de 1 a 5 estrellas.<br>

[Volver al indice](#INDICE)

# Realizar una compra
![Preview](client/public/compra1.gif)

Al confirmar datos de la compra se abre un popup de mercado pago para realizar el pago

![Preview](client/public/compra2.gif)

En la parte superior de este Read me se encuentran las tarjetas de prueba para realizar compras.

![Preview](client/public/compra3.gif)

Una vez completada la compra en nuestro perfil podemos ver la orden completada y recibiremos un mail <br>

[Volver al indice](#INDICE)
# Informacion de orden en panel de usuario
![Preview](client/public/ordercomplete.png)

En el panel de usuario ahora veras tu nueva orden y el status de la misma.<br>

[Volver al indice](#INDICE)

# Mail con la informacion de compra 
![Preview](client/public/mailorden.png)

Recibiras un mail a la direccion que especificaste antes de confirmar la compra . <br>

[Volver al indice](#INDICE)

# Cloudinary
![Preview](client/public/assets.png)

Utilizamos Cloudinary para subir las 830 imágenes correspondientes a cada uno de los productos de la página. 
Además, también se pueden subir nuevas imágenes si se agregan nuevos productos, las cuales se suben automáticamente a la misma cuenta de Cloudinary que ya se utiliza.

![Preview](client/public/upload.gif)

Se puede definir nuevo producto , definiendo nombre , precio , stock , categoria y marca , si la categoria o la marca no existe esta se crea. 

![Preview](client/public/add.png)


Y ahora el producto va a aparecer en la pagina como cualquier otro.

![Preview](client/public/glorious.png)<br>

[Volver al indice](#INDICE)
# Responsive
![Preview](client/public/responsive.png)

 Nuestra página web está diseñada para ser totalmente responsiva a formatos móviles. Esto significa que podrás disfrutar de una experiencia de navegación óptima desde cualquier dispositivo móvil, sin importar su tamaño o resolución de pantalla. 
Todos los elementos de la página, incluyendo imágenes, texto y botones, están adaptados para garantizar una visualización clara y precisa en cualquier dispositivo.<br>

[Volver al indice](#INDICE)

# Linkedin
[![Preview](client/public/ger.png)](https://www.linkedin.com/in/gerlini/)<br>



# [Link a deploy](https://pf-techbunny-lake.vercel.app/)
# [Link a video  explicativo de la pagina](https://vimeo.com/795225619)<br>

[Volver al indice](#INDICE)




