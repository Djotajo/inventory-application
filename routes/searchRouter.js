const { Router } = require("express");

const searchRouter = Router();
const itemsController = require("../controllers/itemsController");

const { query } = require("express");

const db = require("../db/queries");

searchRouter.get("/", async (req, res) => {
  try {
    const { model } = req.query;
    const item = await itemsController.getItemByModelSearch(req, res);
    if (item === null) {
      res.render("layout", {
        title: "item not found",
        content: "itemNotFound",
        baseUrl: req.originalUrl,
        back: "/items",
      });
    } else {
      res.render("layout", {
        title: model,
        content: "item",
        item: item,
        baseUrl: req.originalUrl,
        back: "/items",
      });
    }
  } catch (error) {
    console.error("Error fetching types:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = searchRouter;
