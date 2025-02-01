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
    });
  } catch (error) {
    console.error("Error fetching types:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = itemsRouter;
