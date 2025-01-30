const { Router } = require("express");

const indexRouter = Router();

const db = require("../db/queries");

async function getAllTypes(req, res) {
  const types = await db.getAllTypes();
  const type = types[1];

  console.log("type");
  console.log(type);
  console.log(types);
  return types;
}

indexRouter.get("/", (req, res) => {
  const types = getAllTypes();

  res.render("index");
});

module.exports = indexRouter;
