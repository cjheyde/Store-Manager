const connection = require('./connection');

const a = 'StoreManager.sales';
const b = 'StoreManager.sales_products';
const headers = `${b}.sale_id, ${b}.product_id, ${b}.quantity, ${a}.date`;
const allQuery = `${a} INNER JOIN ${b} ON ${a}.id=${b}.sale_id`;

const getAll = async () => {
  const [result] = await connection.execute(`SELECT ${headers} FROM ${allQuery} ORDER BY sale_id;`);
  return result;
};
// SELECT sales_products.sale_id AS sale_id,
// sales_products.product_id AS product_id,
// sales_products.quantity AS quantity,
// sales.date AS sales_date
// FROM StoreManager.sales AS sales 
// INNER JOIN StoreManager.sales_products AS sales_products
// ON sales.id = sales_products.sale_id
// ORDER BY sale_id;

const getById = async (saleId) => {
  const [result] = await connection
    .execute(`SELECT ${headers} FROM ${allQuery} WHERE sale_id = ?; `, [saleId]);
  if (!result.length) return null;
  return result;
};
// SELECT StoreManager.sales_products.sale_id, 
// StoreManager.sales_products.product_id,
// StoreManager.sales_products.quantity,
// StoreManager.sales.date 
// FROM StoreManager.sales
// INNER JOIN StoreManager.sales_products
// ON StoreManager.sales.id = StoreManager.sales_products.sale_id 
// WHERE sale_id = 1;

const add = async (productId, quantity) => {
  const [result] = await connection
    .execute('INSERT INTO StoreManager.sales (productId, quantity) VALUES (?,?);',
        [productId, quantity]);
  return { id: result.insertId, productId, quantity };
};

module.exports = {
  getAll,
  getById,
  add,
};
