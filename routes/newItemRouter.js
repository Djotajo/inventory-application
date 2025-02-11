const { Router } = require("express");

const newItemRouter = Router();

const db = require("../db/queries");

const categoriesController = require("../controllers/categoriesController");

const newController = require("../controllers/newController");

newItemRouter.get("/", async (req, res) => {
  const types = await categoriesController.getAllTypes();
  const brands = await categoriesController.getAllBrands();
  const movements = await categoriesController.getAllMovements();
  const styles = await categoriesController.getAllStyles();
  res.render("form", {
    types: types,
    brands: brands,
    movements: movements,
    styles: styles,
  });
});

newItemRouter.post("/", newController.newItemCreate);

module.exports = newItemRouter;
