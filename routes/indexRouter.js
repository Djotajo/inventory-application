const { Router } = require("express");

const indexRouter = Router();

const db = require("../db/queries");

async function getAllTypes(req, res) {
  const types = await db.getAllItems();
  const type = types[1];
  return types;
}

indexRouter.get("/", (req, res) => {
  const types = getAllTypes();

  res.render("index");
});

module.exports = indexRouter;
