const productService = require('../services/productService');

const HTTP_OK_STATUS = 200;
// const HTTP_CREATED_STATUS = 201;
const HTTP_NOT_FOUND_STATUS = 404;
const HTTP_INTERNAL_SERVER_ERROR_STATUS = 500;

const getAll = async (_req, res) => {
  const result = await productService.getAll();
  return res.status(HTTP_OK_STATUS).json(result);
};

const getByID = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getById(id);
    if (!product) {
      return res.status(HTTP_NOT_FOUND_STATUS)
        .json({ message: 'Product not found' });
    }
    return res.status(HTTP_OK_STATUS).json(product);
  } catch (error) {
    console.log(error);
    return res.status(HTTP_INTERNAL_SERVER_ERROR_STATUS)
      .json({ message: 'internal server error' });
  }
};

module.exports = {
  getAll,
  getByID,
};
