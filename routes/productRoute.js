const express = require('express');

const productController = require('../controllers/productController');
const { validacao } = require('../middlewares/validacaoProduct');

const productRoute = express.Router();

productRoute.get('/', productController.getAll);

productRoute.post('/', validacao, productController.add);

productRoute.get('/:id', productController.getById);

productRoute.put('/:id', validacao, productController.edit);

productRoute.delete('/:id', productController.destroy);

module.exports = productRoute;