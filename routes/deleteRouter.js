const { Router } = require("express");

const deleteRouter = Router();
const itemsController = require("../controllers/itemsController");

const { query } = require("express");

const db = require("../db/queries");

deleteRouter.post("/:id", async (req, res) => {
  const { id } = req.query;
  itemsController.deleteItemById(req, res);
  res.redirect("/");
});

module.exports = deleteRouter;
