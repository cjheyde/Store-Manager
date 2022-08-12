const dotenv = require('dotenv');
const productService = require('../services/productService');

dotenv.config();

const getAll = async (_req, res) => {
  const result = await productService.getAll();
  return res.status(process.env.HTTP_OK_STATUS).json(result);
};

const getByID = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getById(id);
    if (!product) {
      return res.status(process.env.HTTP_NOT_FOUND_STATUS)
        .json({ message: 'Product not found' });
    }
    return res.status(process.env.HTTP_OK_STATUS).json(product);
  } catch (error) {
    console.log(error);
    return res.status(process.env.HTTP_INTERNAL_SERVER_ERROR_STATUS)
      .json({ message: 'internal server error' });
  }
};

module.exports = {
  getAll,
  getByID,
};
