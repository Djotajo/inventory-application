const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const path = require("node:path");
const db = require("./db/queries");
const http = require("http");
const { neon } = require("@neondatabase/serverless");

const sql = neon(process.env.DATABASE_URL);
const assetsPath = path.join(__dirname, "public");

const indexRouter = require("./routes/indexRouter");
const categoriesRouter = require("./routes/categoriesRouter");
const itemsRouter = require("./routes/itemsRouter");
const newItemRouter = require("./routes/newItemRouter");
const searchRouter = require("./routes/searchRouter");
// const newRouter = require("./routes/newRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

app.use("/", indexRouter);
app.use("/categories", categoriesRouter);
app.use("/items", itemsRouter);
app.use("/new", newItemRouter);
app.use("/search", searchRouter);

// app.use("/new", newRouter);
// app.use("/items", itemRouter);
// app.use("/categories", categoryRouter);
// app.use("/new", newRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
