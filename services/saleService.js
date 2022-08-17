const saleModel = require('../models/saleModel');

const getAll = async () => saleModel.getAll();

const getById = async (id) => saleModel.getById(id);

// const add = async (allSalesArray) => saleModel.add(allSalesArray);

module.exports = {
  getAll,
  getById,
  // add,
};