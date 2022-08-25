const express = require('express');

const saleController = require('../controllers/saleController');
// const { validacaoSale } = require('../middlewares/validacaoSale');
const { validProductId, validQuantity } = require('../middlewares/saleValidacoes');

const saleRoute = express.Router();

saleRoute.get('/', saleController.getAll);

saleRoute.post('/', validProductId, validQuantity, saleController.add);

saleRoute.get('/:id', saleController.getById);

saleRoute.put('/:id', validProductId, validQuantity, saleController.edit);

saleRoute.delete('/:id', saleController.destroy);

module.exports = saleRoute;