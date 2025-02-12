const { Router } = require("express");

const searchRouter = Router();
const itemsController = require("../controllers/itemsController");

const { query } = require("express");

const db = require("../db/queries");

searchRouter.get("/", async (req, res) => {
  try {
    const { model } = req.query;
    const items = await itemsController.getItemByModelSearch(req, res);
    if (items === null) {
      res.render("layout", {
        title: "item not found",
        content: "itemNotFound",
        baseUrl: req.originalUrl,
        back: "/items",
      });
    } else {
      res.render("layout", {
        title: model,
        content: "itemsSearch",
        items: items,
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
