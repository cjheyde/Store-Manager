const express = require('express');

const saleController = require('../controllers/saleController');
// const { validacaoSale } = require('../middlewares/validacaoSale');

const saleRoute = express.Router();

saleRoute.get('/', saleController.getAll);

// saleRoute.post('/', validacaoSale, saleController.add);

saleRoute.get('/:id', saleController.getById);

module.exports = saleRoute;