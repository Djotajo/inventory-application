const db = require("../db/queries");

async function getAllItems(req, res) {
  const items = await db.getAllItems();
  return items;
}

// async function getItemByModel(req, res) {
//   const itemByModel = await db.getItemByModel(req.model);
//   return itemByModel;
// }

async function getItemByModel(req, res) {
  const { model } = req.params;
  const query = String(model);
  const itemByModel = await db.getItemByModel(query);
  return itemByModel;
}

// async function insertRow(req, res) {
//   await db.insertRow(req.author, req.message);
//   return brands;
// }

module.exports = {
  getAllItems,
  getItemByModel,
};
