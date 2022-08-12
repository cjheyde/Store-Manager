const productModel = require('../models/productModel');

const getAll = async () => productModel.getAll();

const getById = async (id) => productModel.getById(id);

module.exports = {
  getAll,
  getById,
};