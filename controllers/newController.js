const { query } = require("express");
const db = require("../db/queries");

async function newItemCreate(req, res) {
  const { brand_id, model, type_id, movement_id, style_id, price, image } =
    req.body;
  await db.postNewWatch(
    Number(brand_id),
    model,
    Number(type_id),
    Number(movement_id),
    Number(style_id),
    price,
    image
  );
  res.redirect("/");
}

module.exports = {
  newItemCreate,
};
