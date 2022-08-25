const saleModel = require('../models/saleModel');
const productModel = require('../models/productModel');

const getAll = async () => saleModel.getAll();

const getById = async (id) => saleModel.getById(id);

const add = async (itemsSold) => {
  const allProducts = await productModel.getAll();

  const checkProducts = itemsSold.every((item) =>
    allProducts.some((product) => item.productId === product.id));
  if (checkProducts === false) return false;
  const result = await saleModel.add(itemsSold);

  return result;
};

const destroy = async (id) => {
  const result = await saleModel.destroy(id);
  if (result.affectedRows === 0) return false;
  return true;
};

const edit = async (saleId, itemsUpdated) => {
  const checkSales = await saleModel.getById(saleId);
  if (!checkSales) return false;

  const allProducts = await productModel.getAll();

  const checkProducts = itemsUpdated.every((item) =>
    allProducts.some((product) => item.productId === product.id));
  if (checkProducts === false) return false;
  
  const result = await saleModel.edit(saleId, itemsUpdated);
  if (result.affectedRows === 0) return false;
  return true;
};

module.exports = {
  getAll,
  getById,
  destroy,
  add,
  edit,
};