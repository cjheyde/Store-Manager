const express = require('express');

const productController = require('../controllers/productController');

const productRoute = express.Router();

productRoute.get('/', productController.getAll);

productRoute.get('/:id', productController.getByID);

module.exports = productRoute;