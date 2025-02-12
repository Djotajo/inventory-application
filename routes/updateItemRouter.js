const { Router } = require("express");

const updateItemRouter = Router();

const db = require("../db/queries");

const categoriesController = require("../controllers/categoriesController");
const itemsController = require("../controllers/itemsController");

const newController = require("../controllers/newController");

updateItemRouter.get("/", async (req, res) => {
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

updateItemRouter.get("/:model", async (req, res) => {
  try {
    const { model } = req.params;
    const types = await categoriesController.getAllTypes();
    const brands = await categoriesController.getAllBrands();
    const movements = await categoriesController.getAllMovements();
    const styles = await categoriesController.getAllStyles();
    const item = await itemsController.getItemByModel(req, res);
    res.render("layout", {
      title: model,
      content: "updateItem",
      item: item,
      baseUrl: req.originalUrl,
      back: "/items",
      types: types,
      brands: brands,
      movements: movements,
      styles: styles,
    });
  } catch (error) {
    console.error("Error fetching types:", error);
    res.status(500).send("Internal Server Error");
  }
});

updateItemRouter.post("/", newController.newItemCreate);

module.exports = updateItemRouter;
