const sql = require("./sql");

async function getAllRows() {
  const rows = await sql`SELECT * FROM inventory`;
  console.log(rows);
  console.log(typeof rows);
  return rows;
}

async function getRow(id) {
  const row = await sql`SELECT * FROM inventory WHERE id =${id}`;
  return row.length > 0 ? row[0] : null;
}

async function insertRow(author, message) {
  await sql`INSERT INTO inventory (author, message) VALUES (${author}, ${message})`;
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
  getAllRows,
  getRow,
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
