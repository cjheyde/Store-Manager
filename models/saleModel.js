const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection
    .execute(`SELECT sales.id AS saleId,
    sales_products.product_id AS productId,
    sales_products.quantity AS quantity,
    sales.date AS date
    FROM StoreManager.sales AS sales 
    INNER JOIN StoreManager.sales_products AS sales_products
    ON sales.id = sales_products.sale_id
    ORDER BY sale_id;`);
  return result;
};

const getById = async (saleId) => {
  const [result] = await connection
    .execute(`SELECT sales_products.product_id AS productId, 
    sales_products.quantity, sales.date 
    FROM StoreManager.sales AS sales
    INNER JOIN StoreManager.sales_products AS sales_products
    ON sales.id = sales_products.sale_id
    WHERE sale_id = ?;`, [saleId]);
  if (!result.length) return null;
  return result;
};

const addSales = async () => {
  const [result] = await connection
    .execute('INSERT INTO StoreManager.sales (date) VALUES (NOW());');
  return result.insertId;
};

const add = async (itemsSold) => {
  const saleId = await addSales();

  itemsSold.forEach(async (item) => {
    await connection
      .execute(`INSERT INTO StoreManager.sales_products
        (sale_id, product_id, quantity) VALUES (?, ?, ?);`,
        [saleId, item.productId, item.quantity]);
  });

  const result = {
    id: saleId,
    itemsSold,
  };
  return result;
};

const destroy = async (id) => {
  const [result] = await connection
    .execute('DELETE FROM StoreManager.sales WHERE id = ?;', [id]);
  return result;
};

const edit = async (saleId, itemsUpdated) => {
  await Promise.all(itemsUpdated.map(async (item) => {
    await connection
      .execute(`UPDATE StoreManager.sales_products SET quantity = ?, 
        product_id = ? WHERE sale_id = ?
        AND product_id = ?;`, [item.quantity, item.productId, saleId, item.productId]);
  }));

  const result = {
    id: saleId,
    itemsUpdated,
  };
  return result;
};

module.exports = {
  getAll,
  getById,
  destroy,
  add,
  edit,
};
