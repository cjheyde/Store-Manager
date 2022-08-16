const saleModel = require('../models/saleModel');

const getAll = async () => saleModel.getAll();

const getById = async (id) => saleModel.getById(id);

const add = async (productId, quantity) => saleModel.add(productId, quantity);

module.exports = {
  getAll,
  getById,
  add,
};