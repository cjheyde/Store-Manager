const saleService = require('../services/saleService');

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_NO_CONTENT = 204;
const HTTP_NOT_FOUND_STATUS = 404;
const HTTP_INTERNAL_SERVER_ERROR_STATUS = 500;

const SERVER_ERROR = 'internal server error';

const getAll = async (_req, res) => {
  try {
    const result = await saleService.getAll();
    return res.status(HTTP_OK_STATUS).json(result);
  } catch (error) {
    console.log(error);
    return res.status(HTTP_INTERNAL_SERVER_ERROR_STATUS)
      .json({ message: SERVER_ERROR });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const sale = await saleService.getById(id);
    if (!sale) {
      return res.status(HTTP_NOT_FOUND_STATUS)
        .json({ message: 'Sale not found' });
    }
    return res.status(HTTP_OK_STATUS).json(sale);
  } catch (error) {
    console.log(error);
    return res.status(HTTP_INTERNAL_SERVER_ERROR_STATUS)
      .json({ message: SERVER_ERROR });
  }
};

const add = async (req, res) => {
  try {
    const itemsSold = req.body;

    const result = await saleService.add(itemsSold);
    if (!result) return res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Product not found' });
    return res.status(HTTP_CREATED_STATUS).json(result);
  } catch (error) {
    console.log(error);
    return res.status(HTTP_INTERNAL_SERVER_ERROR_STATUS)
      .json({ message: SERVER_ERROR });
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await saleService.destroy(id);
    if (!result) {
      return res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Sale not found' });
    }
    return res.status(HTTP_NO_CONTENT).json();
  } catch (error) {
    console.log(error);
    return res.status(HTTP_INTERNAL_SERVER_ERROR_STATUS).json({ message: SERVER_ERROR });
  }
};

const edit = async (req, res) => {
  try {
    const { id } = req.params;
    const itemsUpdated = req.body;

    const checkSaleId = await saleService.getById(id);
    if (!checkSaleId) return res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Sale not found' });

    const result = await saleService.edit({ saleId: id }, itemsUpdated);
    if (!result) {
      return res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Sale not found' });
    }
    return res.status(HTTP_OK_STATUS).json(result);
  } catch (error) {
    console.log(error);
    return res.status(HTTP_INTERNAL_SERVER_ERROR_STATUS).json({ message: SERVER_ERROR });
  }
};

module.exports = {
  getAll,
  getById,
  destroy,
  add,
  edit,
};
