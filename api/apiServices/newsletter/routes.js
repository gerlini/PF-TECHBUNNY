const { Router } = require("express");
const controller = require("./controller.js");
const validate = require("../../scripts/bodyValidators/index.js");

const router = Router();

router.post("/",async (req, res) => {
  try {
    res.status(200).json(await controller.subscribe(req.body));
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.delete("/:newsletter_id", async (req, res) => {
    try {
      res.status(200).send(await controller.unsubscribe(req.params));
    } catch (error) {
      res.status(400).send(error);
    }
  });

  module.exports = router;