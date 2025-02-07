const { Router } = require("express");

const categoriesRouter = Router();
const categoriesController = require("../controllers/categoriesController");
const itemsController = require("../controllers/itemsController");

categoriesRouter.get("/", async (req, res) => {
  res.render("categories");
});

categoriesRouter.get("/types/:typeName/:model", async (req, res) => {
  try {
    const { typeName } = req.params;
    const { model } = req.params;
    const item = await itemsController.getItemByModel(req, res);
    res.render("layout", {
      title: model,
      content: "item",
      item: item,
      baseUrl: req.originalUrl,
      back: `/categories/types/${typeName}`,
    });
  } catch (error) {
    console.error("Error fetching types:", error);
    res.status(500).send("Internal Server Error");
  }
});

categoriesRouter.get("/types/:typeName", async (req, res) => {
  try {
    const { typeName } = req.params;
    const items = await categoriesController.getItemsByType(req, res);
    res.render("layout", {
      title: "Types",
      content: "items",
      items: items,
      baseUrl: req.originalUrl,
      back: "/categories/types",
    });
  } catch (error) {
    console.error("Error fetching types:", error);
    res.status(500).send("Internal Server Error");
  }
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

categoriesRouter.get("/brands/:brandName/:model", async (req, res) => {
  try {
    const { brandName } = req.params;
    const { model } = req.params;
    const item = await itemsController.getItemByModel(req, res);
    res.render("layout", {
      title: model,
      content: "item",
      item: item,
      baseUrl: req.originalUrl,
      back: `/categories/brands/${brandName}`,
    });
  } catch (error) {
    console.error("Error fetching types:", error);
    res.status(500).send("Internal Server Error");
  }
});

categoriesRouter.get("/brands/:brandName", async (req, res) => {
  try {
    const { brandName } = req.params;
    const items = await categoriesController.getItemsByBrand(req, res);
    res.render("layout", {
      title: "Brands",
      content: "items",
      items: items,
      baseUrl: req.originalUrl,
      back: "/categories/brands",
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

categoriesRouter.get("/movements/:movementName/:model", async (req, res) => {
  try {
    const { movementName } = req.params;
    const { model } = req.params;
    const item = await itemsController.getItemByModel(req, res);
    res.render("layout", {
      title: model,
      content: "item",
      item: item,
      baseUrl: req.originalUrl,
      back: `/categories/movements/${movementName}`,
    });
  } catch (error) {
    console.error("Error fetching types:", error);
    res.status(500).send("Internal Server Error");
  }
});

categoriesRouter.get("/movements/:movementName", async (req, res) => {
  try {
    const { movementName } = req.params;
    const items = await categoriesController.getItemsByMovement(req, res);
    res.render("layout", {
      title: "Movements",
      content: "items",
      items: items,
      baseUrl: req.originalUrl,
      back: "/categories/movements",
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

categoriesRouter.get("/styles/:styleName/:model", async (req, res) => {
  try {
    const { styleName } = req.params;
    const { model } = req.params;
    const item = await itemsController.getItemByModel(req, res);
    res.render("layout", {
      title: model,
      content: "item",
      item: item,
      baseUrl: req.originalUrl,
      back: `/categories/styles${styleName}`,
    });
  } catch (error) {
    console.error("Error fetching types:", error);
    res.status(500).send("Internal Server Error");
  }
});

categoriesRouter.get("/styles/:styleName", async (req, res) => {
  try {
    const { styleName } = req.params;
    console.log(req.baseUrl);
    const items = await categoriesController.getItemsByStyle(req, res);
    res.render("layout", {
      title: "Styles",
      content: "items",
      items: items,
      baseUrl: req.originalUrl,
      back: "/categories/styles",
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
