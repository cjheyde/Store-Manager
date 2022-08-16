const productModel = require('../models/productModel');

const getAll = async () => productModel.getAll();

const getById = async (id) => productModel.getById(id);

const add = async (name) => productModel.add(name);

const edit = async ({ name, id }) => {
  const result = await productModel.edit({ name, id });
  if (result.affectedRows === 0) return false;
  return true;
};

const destroy = async (id) => {
  const result = await productModel.destroy(id);
  if (result.affectedRows === 0) return false;
  return true;
};

module.exports = {
  getAll,
  getById,
  add,
  edit,
  destroy,
};