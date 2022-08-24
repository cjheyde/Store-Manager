const express = require('express');

const saleController = require('../controllers/saleController');
// const { validacaoSale } = require('../middlewares/validacaoSale');

const saleRoute = express.Router();

saleRoute.get('/', saleController.getAll);

// saleRoute.post('/', validacaoSale, saleController.add);

saleRoute.get('/:id', saleController.getById);

// saleRoute.put('/:id', validacaoSale, saleController.edit);

saleRoute.delete('/:id', saleController.destroy);

module.exports = saleRoute;