const db = require("../db/queries");

async function getAllTypes(req, res) {
  const types = await db.getAllTypes();
  return types;
}

async function getAllMovements(req, res) {
  const movements = await db.getAllMovements();
  return movements;
}

async function getAllBrands(req, res) {
  const brands = await db.getAllBrands();
  return brands;
}

async function getAllStyles(req, res) {
  const styles = await db.getAllStyles();
  return styles;
}

async function getItemsByCategory(req, res) {
  const itemsByCategory = await db.getItemsByCategory("Casio");
  console.log(itemsByCategory);
  return itemsByCategory;
}

module.exports = {
  getAllTypes,
  getAllMovements,
  getAllBrands,
  getAllStyles,
  getItemsByCategory,
};
