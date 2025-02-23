const db = require("../db/query");

async function changeItemQuantity(req, res) {
    const { id, quantity, action } = req.body;
    if (action === "increase") {
        await db.increaseItemQuantity(id, quantity);
    } else if (action === "decrease") {
        await db.decreaseItemQuantity(id, quantity);
    }
    console.log(`Updating item ${id}: ${action} by ${quantity}`);

    res.redirect(req.get("Referrer") || `/categories/${req.params.name}`);
}

module.exports = { changeItemQuantity };