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

deleteRouter.post("/:id/password/submit", async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  const admin = process.env.ADMIN_PASS;

  if (password === admin) {
    await db.deleteItemById(id);
    res.redirect("/");
  } else {
    res.render("layout", {
      content: "passwordPrompt",
      title: "Enter Password",
      id: id,
      message: "Wrong password",
      baseUrl: req.originalUrl,
      back: "/items",
    });
  }
});

deleteRouter.post("/:id/password", async (req, res) => {
  const { id } = req.params;
  res.render("layout", {
    content: "passwordPrompt",
    title: "Enter Password",
    id: id,
    message: "",
    baseUrl: req.originalUrl,
    back: "/items",
  });
});

module.exports = deleteRouter;
