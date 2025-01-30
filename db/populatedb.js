const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS mini_messages(id SERIAL PRIMARY KEY, author TEXT, message TEXT,  time TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

INSERT INTO mini_messages(author, message)
VALUES
('Djordje', 'Kako si prijatelju'),
('Petar', 'Cao druze'),
('Jovan', 'Pomaze Bog'),
('Marko', 'Pozdrav momci'),
('Aljosa', 'Cao Cao'),
('Igor', 'Cao prijatelju'),
('Zeljko', 'Zdravo'),
('Srdjan', 'Kako si braco'),
('Ognjen', 'Gdje ste momci'),
('Bogdan', 'Gdje si brate')
;
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

// CREATE TABLE IF NOT EXISTS watch_inventory(id SERIAL PRIMARY KEY, brand TEXT NOT NULL, model TEXT NOT NULL,
//   type TEXT NOT NULL, movement TEXT NOT NULL,
// functionality TEXT NOT NULL, price DECIMAL(10,2), image TEXT NOT NULL);

// CREATE TABLE IF NOT EXISTS brands (
//   id SERIAL PRIMARY KEY,
//   name TEXT NOT NULL UNIQUE
// );

// CREATE TABLE IF NOT EXISTS types (
//   id SERIAL PRIMARY KEY,
//   name TEXT NOT NULL UNIQUE
// );

// CREATE TABLE IF NOT EXISTS movements (
//   id SERIAL PRIMARY KEY,
//   name TEXT NOT NULL UNIQUE
// );

// CREATE TABLE IF NOT EXISTS functionalities (
//   id SERIAL PRIMARY KEY,
//   name TEXT NOT NULL UNIQUE
// );

// CREATE TABLE IF NOT EXISTS watch_inventory (
//   id SERIAL PRIMARY KEY,
//   brand_id INT NOT NULL REFERENCES brands(id),
//   model TEXT NOT NULL,
//   type_id INT NOT NULL REFERENCES types(id),
//   movement_id INT NOT NULL REFERENCES movements(id),
//   functionality_id INT NOT NULL REFERENCES functionalities(id),
//   price DECIMAL(10,2),
//   image TEXT NOT NULL
// );

INSERT INTO brands(name) VALUES ("Rolex");

INSERT INTO watch_inventory(brand_id, model, type_id, movement_id, style_id, price, image)
VALUES
(1, 'Submariner', 1, 2, 4, 9100, 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-grid/c_limit,w_3840/v1/catalogue/2024/upright-bba-with-shadow/m124060-0001')