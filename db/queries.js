const sql = require("./sql");

async function getAllItems() {
  const items =
    await sql`SELECT * FROM watch_inventory INNER JOIN brands ON brand_id = brands.id`;
  console.log(items);
  console.log(typeof items);
  return items;
}

async function getItemByModel(model) {
  const row = await sql`SELECT * FROM watch_inventory WHERE model =${model}`;
  return row.length > 0 ? row[0] : null;
}

async function insertRow(author, message) {
  await sql`INSERT INTO watch_inventory (author, message) VALUES (${author}, ${message})`;
}

async function getAllTypes() {
  const types = await sql`SELECT name FROM types`;
  return types;
}

async function getAllBrands() {
  const brands = await sql`SELECT name FROM brands`;
  return brands;
}

async function getAllMovements() {
  const movements = await sql`SELECT name FROM movements`;
  return movements;
}

async function getAllStyles() {
  const styles = await sql`SELECT name FROM styles`;
  return styles;
}

module.exports = {
  getAllItems,
  getItemByModel,
  insertRow,
  getAllTypes,
  getAllBrands,
  getAllMovements,
  getAllStyles,
};

// async function getAllCategories() {
//   const categories = await sql`SELECT categories FROM inventory`;
//   return categories;
// }

// Halt for now
// async function deleteRow(id) {
//   await sql`DELETE FROM playing_with_neon WHERE id = ${id}`;
// }
