const pool = require("./pool");

async function getItemByName(name) {
  const { rows } = await pool.query("SELECT * FROM items WHERE name = $1", [
    name,
  ]);
  return rows.length ? rows[0] : null;
}

async function increaseItemQuantity(id, quantity) {
  await pool.query("UPDATE items SET quantity = quantity + $1 WHERE id = $2", [quantity, id]);
}

async function decreaseItemQuantity({ id, upc, quantity }) {
  let query, params;

  if (upc) {
    query =
      "UPDATE items SET quantity = quantity - $1 WHERE upc = $2 AND quantity >= $1";
    params = [quantity, upc];
  } else if (id) {
    query =
      "UPDATE items SET quantity = quantity - $1 WHERE id = $2 AND quantity >= $1";
    params = [quantity, id];
  } else {
    throw new Error("Either UPC or ID must be provided.");
  }

  await pool.query(query, params);
}

async function getAllCategoryNames() {
  const { rows } = await pool.query("SELECT name FROM categories");
  return rows;
}

async function getAllItemsByCategory(category) {
  const { rows } = await pool.query(
      "SELECT * FROM items WHERE category_id = (SELECT id FROM categories WHERE name = $1)",
      [category]
  );
  return rows;
}

module.exports = { getAllCategoryNames, getAllItemsByCategory, increaseItemQuantity, decreaseItemQuantity };
