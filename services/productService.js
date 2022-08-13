const productModel = require('../models/productModel');

const getAll = async () => productModel.getAll();

const getById = async (id) => productModel.getById(id);

const add = async (name) => productModel.add(name);

module.exports = {
  getAll,
  getById,
  add,
};