const productService = require('../services/productService');

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_NO_CONTENT = 204;
const HTTP_NOT_FOUND_STATUS = 404;
const HTTP_INTERNAL_SERVER_ERROR_STATUS = 500;

const getAll = async (_req, res) => {
  const result = await productService.getAll();
  return res.status(HTTP_OK_STATUS).json(result);
};

const getById = async (req, res) => {
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

const getSearch = async (req, res) => {
  try {
    const { q } = req.query;
    const result = await productService.getSearch(q);
    console.log(result);
    return res.status(HTTP_OK_STATUS).json(result);
  } catch (error) {
    return res.status(HTTP_INTERNAL_SERVER_ERROR_STATUS)
      .json(error);
  }
};

const add = async (req, res) => {
  try {
    const { name } = req.body;
    const newProduct = await productService.add(name);
    return res.status(HTTP_CREATED_STATUS).json(newProduct);
  } catch (error) {
    console.log(error);
    return res.status(HTTP_INTERNAL_SERVER_ERROR_STATUS)
      .json({ message: 'internal server error' });
  }
};

const edit = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const result = await productService.edit({ name, id });
    if (!result) {
      return res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Product not found' });
    }
    return res.status(HTTP_OK_STATUS).json({ id: Number(id), name });
  } catch (error) {
    console.log(error);
    return res.status(HTTP_INTERNAL_SERVER_ERROR_STATUS).json({ message: 'internal server error' });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productService.destroy(id);
    if (!result) {
      return res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Product not found' });
    }
    return res.status(HTTP_NO_CONTENT).json();
  } catch (error) {
    console.log(error);
    return res.status(HTTP_INTERNAL_SERVER_ERROR_STATUS).json({ message: 'internal server error' });
  }
};

module.exports = {
  getAll,
  getById,
  add,
  edit,
  destroy,
  getSearch,
};
