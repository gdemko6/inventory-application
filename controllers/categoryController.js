const db = require("../db/query");

async function getAllCategories(req, res) {
    const categories = await db.getAllCategoryNames();
    res.render("categories", { categories });
}

module.exports = { getAllCategories };