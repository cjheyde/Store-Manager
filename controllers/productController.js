const dotenv = require('dotenv');
const productService = require('../services/productService');

dotenv.config();

const getAll = async (_req, res) => {
  const result = await productService.getAll();
  return res.status(process.env.HTTP_OK_STATUS).json(result);
};

module.exports = {
  getAll,
};
