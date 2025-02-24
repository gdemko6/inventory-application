const db = require("../db/query");

async function getAllCategories(req, res) {
    const categories = await db.getAllCategoryNames();
    res.render("categories", { categories });
}

async function getCategoryItems(req, res) {
    const categoryName = req.params.name;
    const items = await db.getAllItemsByCategory(req.params.name);
    res.render("items", { categoryName, items })
}

module.exports = { getAllCategories, getCategoryItems };