const { Router } = require("express");

const categoriesRouter = Router();
const categoriesController = require("../controllers/categoriesController");

categoriesRouter.get("/", async (req, res) => {
  //   const types = await categoriesController.getAllTypes();
  //   const movements = await categoriesController.getAllMovements();
  //   const brands = await categoriesController.getAllBrands();

  res.render("categories");
});

categoriesRouter.get("/types", async (req, res) => {
  try {
    const types = await categoriesController.getAllTypes();
    res.render("layout", {
      title: "Types",
      content: "category",
      category: types,
      baseUrl: req.originalUrl,
    });
  } catch (error) {
    console.error("Error fetching types:", error);
    res.status(500).send("Internal Server Error");
  }
});

categoriesRouter.get("/brands/:brandName", async (req, res) => {
  try {
    const { brandName } = req.params;
    const items = await categoriesController.getItemsByCategory(req, res);
    res.render("layout", {
      title: "Types",
      content: "items",
      items: items,
      baseUrl: req.originalUrl,
    });
  } catch (error) {
    console.error("Error fetching types:", error);
    res.status(500).send("Internal Server Error");
  }
});

categoriesRouter.get("/brands", async (req, res) => {
  try {
    const brands = await categoriesController.getAllBrands();

    res.render("layout", {
      title: "Brands",
      content: "category",
      category: brands,
      baseUrl: req.originalUrl,
    });
  } catch (error) {
    console.error("Error fetching types:", error);
    res.status(500).send("Internal Server Error");
  }
});

categoriesRouter.get("/movements", async (req, res) => {
  try {
    const movements = await categoriesController.getAllMovements();
    console.log(req.originalUrl);
    res.render("layout", {
      title: "Movements",
      content: "category",
      category: movements,
      baseUrl: req.originalUrl,
    });
  } catch (error) {
    console.error("Error fetching types:", error);
    res.status(500).send("Internal Server Error");
  }
});

categoriesRouter.get("/styles", async (req, res) => {
  try {
    const styles = await categoriesController.getAllStyles();
    res.render("layout", {
      title: "Styles",
      content: "category",
      category: styles,
      baseUrl: req.originalUrl,
    });
  } catch (error) {
    console.error("Error fetching types:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = categoriesRouter;
