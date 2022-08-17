const saleModel = require('../models/saleModel');

const getAll = async () => saleModel.getAll();

const getById = async (id) => saleModel.getById(id);

// const add = async (allSalesArray) => saleModel.add(allSalesArray);

const destroy = async (id) => {
  const result = await saleModel.destroy(id);
  if (result.affectedRows === 0) return false;
  return true;
};

module.exports = {
  getAll,
  getById,
  // add,
  destroy,
};