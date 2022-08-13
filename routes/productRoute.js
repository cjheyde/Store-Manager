const express = require('express');

const productController = require('../controllers/productController');
const validacao = require('../middlewares/validacaoProduct');

const productRoute = express.Router();

productRoute.get('/', productController.getAll);

productRoute.post('/', validacao.validacao, productController.add);

productRoute.get('/:id', productController.getById);

module.exports = productRoute;