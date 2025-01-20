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

// Halt for now
// async function deleteRow(id) {
//   await sql`DELETE FROM playing_with_neon WHERE id = ${id}`;
// }

module.exports = { getAllRows, getRow, insertRow };
