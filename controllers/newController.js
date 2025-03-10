const { query } = require("express");
const db = require("../db/queries");
const { getItemByModel } = require("./itemsController");

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
  // res.redirect("/");

  const item = await db.getItemByModel(model);
  res.render("layout", {
    title: model,
    content: "item",
    item: item,
    baseUrl: req.originalUrl,
    back: "/items",
  });
}

async function itemUpdate(req, res) {
  const { id, brand_id, model, type_id, movement_id, style_id, price, image } =
    req.body;
  await db.postUpdateWatch(
    Number(id),
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
  itemUpdate,
};
