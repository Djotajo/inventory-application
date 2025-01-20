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
