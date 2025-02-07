const { Router } = require("express");

const newItemRouter = Router();

const db = require("../db/queries");

// async function getAllTypes(req, res) {
//   const types = await db.getAllItems();
//   const type = types[1];

//   console.log("type");
//   console.log(type);
//   console.log(types);
//   return types;
// }
const categoriesController = require("../controllers/categoriesController");

newItemRouter.get("/", async (req, res) => {
  const types = await categoriesController.getAllTypes();
  console.log(types);
  res.render("form", {
    types: types,
  });
});

module.exports = newItemRouter;

// itemsRouter.get("/", async (req, res) => {
//   try {
//     const items = await itemsController.getAllItems();
//     res.render("layout", {
//       title: "Items",
//       content: "items",
//       items,
//       baseUrl: req.originalUrl,
//       back: "/",
//     });
//   } catch (error) {
//     console.error("Error fetching types:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });
