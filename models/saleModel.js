const connection = require('./connection');

const a = 'StoreManager.sales';
const b = 'StoreManager.sales_products';
const headers = `${b}.sale_id AS saleId, ${b}.product_id AS productId, ${b}.quantity, ${a}.date`;
const headers2 = `${b}.product_id AS productId, ${b}.quantity, ${a}.date`;
const allQuery = `${a} INNER JOIN ${b} ON ${a}.id=${b}.sale_id`;

const getAll = async () => {
  const [result] = await connection.execute(`SELECT ${headers} FROM ${allQuery} ORDER BY saleId;`);
  return result;
};
// SELECT sales_products.sale_id AS saleId,
// sales_products.product_id AS productId,
// sales_products.quantity AS quantity,
// sales.date AS date
// FROM StoreManager.sales AS sales 
// INNER JOIN StoreManager.sales_products AS sales_products
// ON sales.id = sales_products.sale_id
// ORDER BY sale_id;

const getById = async (saleId) => {
  const [result] = await connection
    .execute(`SELECT ${headers2} FROM ${allQuery} WHERE sale_id = ?; `, [saleId]);
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

// const addSales = async () => {
//   const [result] = await connection
//     .execute('INSERT INTO StoreManager.sales (date) VALUES (NOW());');
//   return result.insertId;
// };

// const add = async (allSalesArray) => {
//   const saleId = await addSales();
//   // console.log(saleId);
// console.log(allSalesArray);
//   const { productId, quantity } = allSalesArray;
//     await connection
//       .execute(`INSERT 
//       INTO StoreManager.sales_products (sale_id, product_id, quantity) 
//       VALUES (?, ?, ?);`, [saleId, productId, quantity]);
//   return { id: saleId, itemsSold: allSalesArray };
// };

// const add = async (allSalesArray) => {
//   const table = 'StoreManager.sales_products';
//   const saleId = await addSales();
//   console.log(saleId);

//   allSalesArray.forEach(async (transaction) => {
//     await connection
//       .execute(`INSERT INTO ${table} (sale_id, product_id, quantity) VALUES (?, ?, ?);`,
//         [saleId, transaction.productId, transaction.quantity]);
//   });
//   return { id: saleId, itemsSold: allSalesArray };
// };

module.exports = {
  getAll,
  getById,
  // add,
};
