const sql = require("./sql");

async function getAllItems() {
  const items =
    await sql`SELECT watch_inventory.id AS id, brands.name AS name, model, image FROM watch_inventory INNER JOIN brands ON brand_id = brands.id`;
  return items;
}

async function getItemByModel(model) {
  const row =
    await sql`SELECT watch_inventory.id, model, price, image, brands.name AS brand, styles.name AS style, types.name AS type, movements.name AS movement FROM watch_inventory INNER JOIN brands ON watch_inventory.brand_id = brands.id INNER JOIN styles ON watch_inventory.style_id = styles.id INNER JOIN types ON watch_inventory.type_id = types.id INNER JOIN movements ON watch_inventory.movement_id = movements.id WHERE model =${model}`;
  return row.length > 0 ? row[0] : null;
}

async function getItemByModelSearch(model) {
  const row =
    await sql`SELECT model, price, image, brands.name AS brand, styles.name AS style, types.name AS type, movements.name AS movement FROM watch_inventory INNER JOIN brands ON watch_inventory.brand_id = brands.id INNER JOIN styles ON watch_inventory.style_id = styles.id INNER JOIN types ON watch_inventory.type_id = types.id INNER JOIN movements ON watch_inventory.movement_id = movements.id WHERE model ILIKE ${`%${model}%`}`;
  console.log(row);
  return row.length > 0 ? row : null;
}

async function deleteItemById(id) {
  await sql`DELETE FROM watch_inventory WHERE watch_inventory.id = ${id}`;
  return;
}

async function postNewWatch(
  brand_id,
  model,
  type_id,
  movement_id,
  style_id,
  price,
  image
) {
  await sql`INSERT INTO watch_inventory(brand_id, model, type_id, movement_id, style_id, price, image) VALUES (${brand_id}, ${model}, ${type_id}, ${movement_id}, ${style_id}, ${price}, ${image})`;
}

async function postUpdateWatch(
  id,
  brand_id,
  model,
  type_id,
  movement_id,
  style_id,
  price,
  image
) {
  await sql`UPDATE watch_inventory SET brand_id= ${brand_id}, model = ${model}, type_id =${type_id}, movement_id = ${movement_id}, style_id = ${style_id}, price = ${price}, image = ${image} WHERE watch_inventory.id=${id}`;
}

async function getAllTypes() {
  const types = await sql`SELECT name, id FROM types`;
  return types;
}

async function getAllBrands() {
  const brands = await sql`SELECT name, id FROM brands`;
  return brands;
}

async function getAllMovements() {
  const movements = await sql`SELECT name, id FROM movements`;
  return movements;
}

async function getAllStyles() {
  const styles = await sql`SELECT name, id FROM styles`;
  return styles;
}

async function getItemsByBrand(brand) {
  const itemsByBrand =
    await sql`SELECT * FROM watch_inventory INNER JOIN brands ON brand_id = brands.id WHERE brands.name = ${brand}`;
  return itemsByBrand;
}

async function getItemsByType(type) {
  const itemsByType =
    await sql`SELECT brands.name AS name, model, image FROM watch_inventory INNER JOIN brands ON watch_inventory.brand_id = brands.id INNER JOIN types ON type_id = types.id WHERE types.name = ${type}`;
  return itemsByType;
}

async function getItemsByMovement(movement) {
  const itemsByMovement =
    await sql`SELECT brands.name AS name, model, image FROM watch_inventory INNER JOIN brands ON watch_inventory.brand_id = brands.id INNER JOIN movements ON movement_id = movements.id WHERE movements.name = ${movement}`;
  return itemsByMovement;
}

async function getItemsByStyle(style) {
  const itemsByStyle =
    await sql`SELECT brands.name AS name, model, image FROM watch_inventory INNER JOIN brands ON watch_inventory.brand_id = brands.id INNER JOIN styles ON style_id = styles.id WHERE styles.name = ${style}`;
  return itemsByStyle;
}

module.exports = {
  getAllItems,
  getItemByModel,
  getItemByModelSearch,
  deleteItemById,
  postNewWatch,
  postUpdateWatch,
  getAllTypes,
  getAllBrands,
  getAllMovements,
  getAllStyles,
  getItemsByBrand,
  getItemsByType,
  getItemsByMovement,
  getItemsByStyle,
};

// async function getAllCategories() {
//   const categories = await sql`SELECT categories FROM inventory`;
//   return categories;
// }

// Halt for now
// async function deleteRow(id) {
//   await sql`DELETE FROM playing_with_neon WHERE id = ${id}`;
// }
