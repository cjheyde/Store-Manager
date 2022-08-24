const saleModel = require('../models/saleModel');
// const productModel = require('../models/productModel');

const getAll = async () => saleModel.getAll();

const getById = async (id) => saleModel.getById(id);

const add = async (allSalesArray) => {
  // allSalesArray.foreEach((transaction) => {
  //   if (!transaction.productId) => return resizeBy.
  // });
  console.log(allSalesArray);
  return saleModel.add(allSalesArray);
};

const destroy = async (id) => {
  const result = await saleModel.destroy(id);
  if (result.affectedRows === 0) return false;
  return true;
};

const edit = async ({ saleId, itemsUpdated }) => {
  const result = await saleModel.edit({ saleId, itemsUpdated });
  if (result.affectedRows === 0) return false;
  return true;
};

module.exports = {
  getAll,
  getById,
  add,
  destroy,
  edit,
};