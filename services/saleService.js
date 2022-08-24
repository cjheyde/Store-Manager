const saleModel = require('../models/saleModel');

const getAll = async () => saleModel.getAll();

const getById = async (id) => saleModel.getById(id);

// const add = async (itemsSold) => saleModel.add(itemsSold);

const destroy = async (id) => {
  const result = await saleModel.destroy(id);
  if (result.affectedRows === 0) return false;
  return true;
};

// const edit = async (saleId, itemsUpdated) => saleModel.edit(saleId, itemsUpdated);

// const edit = async (saleId, itemsUpdated) => {
//   const result = await saleModel.edit(saleId, itemsUpdated);
//   if (result.affectedRows === 0) return false;
//   return true;
// };

module.exports = {
  getAll,
  getById,
  destroy,
  // add,
  // edit,
};