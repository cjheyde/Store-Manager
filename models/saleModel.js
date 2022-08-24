const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection
    .execute(`SELECT sales_products.sale_id AS saleId,
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
    .execute(`SELECT pro.product_id AS productId, pro.quantity, sa.date 
    FROM StoreManager.sales AS sa
    INNER JOIN StoreManager.sales_products AS pro ON sa.id = pro.sale_id
    WHERE sale_id = ?;`, [saleId]);
  if (!result.length) return null;
  return result;
};

const addSales = async () => {
  const [result] = await connection
    .execute('INSERT INTO StoreManager.sales (date) VALUES (NOW());');
  return result.insertId;
};

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

const add = async (allSalesArray) => {
  const table = 'StoreManager.sales_products';
  const saleId = await addSales();
  // console.log(saleId);

  allSalesArray.forEach(async (transaction) => {
    await connection
      .execute(`INSERT INTO ${table} (sale_id, product_id, quantity) VALUES (?, ?, ?);`,
        [saleId, transaction.productId, transaction.quantity]);
  });
  return { id: saleId, itemsSold: allSalesArray };
};

const destroy = async (id) => {
  const [result] = await connection
    .execute('DELETE FROM StoreManager.sales WHERE id = ?;', [id]);
  return result;
};

const edit = async (saleId, itemsUpdated) => {
  itemsUpdated.forEach(async (transaction) => {
    await connection
      .execute(`UPDATE StoreManager.sales_products SET quantity = ? 
        WHERE sale_id = ?
        AND product_id = ?;`, [transaction.quantity, saleId, transaction.productId]);
  });

  return { saleId, itemsUpdated };
};

module.exports = {
  getAll,
  getById,
  add,
  destroy,
  edit,
};
