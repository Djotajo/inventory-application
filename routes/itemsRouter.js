const { Router } = require("express");

const itemsRouter = Router();
const itemsController = require("../controllers/itemsController");

const db = require("../db/queries");

itemsRouter.get("/", async (req, res) => {
  try {
    const items = await itemsController.getAllItems();
    res.render("layout", {
      title: "Items",
      content: "items",
      items,
      baseUrl: req.originalUrl,
      back: "/",
    });
  } catch (error) {
    console.error("Error fetching types:", error);
    res.status(500).send("Internal Server Error");
  }
});

itemsRouter.get("/:model", async (req, res) => {
  try {
    const { model } = req.params;
    const item = await itemsController.getItemByModel(req, res);
    console.log(item);
    res.render("layout", {
      title: model,
      content: "item",
      item: item,
      baseUrl: req.originalUrl,
    });
  } catch (error) {
    console.error("Error fetching types:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = itemsRouter;
