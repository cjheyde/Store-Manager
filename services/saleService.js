const saleModel = require('../models/saleModel');

const getAll = async () => saleModel.getAll();

const getById = async (id) => saleModel.getById(id);

const add = async (name) => saleModel.add(name);

module.exports = {
  getAll,
  getById,
  add,
};