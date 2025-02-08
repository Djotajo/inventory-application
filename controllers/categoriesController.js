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

async function getItemsByBrand(req, res) {
  const { brandName } = req.params;
  const query = String(brandName);
  const itemsByBrand = await db.getItemsByBrand(query);
  return itemsByBrand;
}

async function getItemsByType(req, res) {
  const { typeName } = req.params;
  const query = String(typeName);
  const itemsByType = await db.getItemsByType(query);
  console.log(itemsByType);
  return itemsByType;
}

async function getItemsByMovement(req, res) {
  const { movementName } = req.params;
  const query = String(movementName);
  const itemsByMovement = await db.getItemsByMovement(query);
  return itemsByMovement;
}

async function getItemsByStyle(req, res) {
  const { styleName } = req.params;
  const query = String(styleName);
  const itemsByStyle = await db.getItemsByStyle(query);
  return itemsByStyle;
}

module.exports = {
  getAllTypes,
  getAllMovements,
  getAllBrands,
  getAllStyles,
  getItemsByBrand,
  getItemsByType,
  getItemsByMovement,
  getItemsByStyle,
};
