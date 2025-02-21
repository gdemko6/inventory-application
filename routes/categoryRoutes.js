const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

// Show all categories
router.get("/", categoryController.getCategories);

// Show items in a specific category (e.g., /categories/football)
router.get("/:name", categoryController.getCategoryItems);

// Form to add a new item to a category
router.get("/:name/add", (req, res) => {
  res.render("addItem", { category: req.params.name });
});

// Process adding a new item
router.post("/:name/add", categoryController.addItem);

// Form to update an item's quantity in a category
router.get("/:name/update", (req, res) => {
  res.render("updateItem", { category: req.params.name });
});

// Process updating an item's quantity
router.post("/:name/update", categoryController.updateItemQuantity);

module.exports = router;
