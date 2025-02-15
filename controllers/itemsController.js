const db = require("../db/queries");

const readline = require("readline");

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

async function deleteItemById(req, res) {
  const { id } = req.params;
  const query = String(id);
  await db.deleteItemById(query);
  return;
}

async function getItemByModelSearch(req, res) {
  const { model } = req.query;
  const query = String(model);
  const itemByModel = await db.getItemByModelSearch(query);
  return itemByModel;
}

module.exports = {
  getAllItems,
  getItemByModel,
  deleteItemById,
  getItemByModelSearch,
};
