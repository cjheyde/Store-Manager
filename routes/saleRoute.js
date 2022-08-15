const express = require('express');

const saleController = require('../controllers/saleController');

const saleRoute = express.Router();

saleRoute.get('/', saleController.getAll);

// saleRoute.post('/', saleController.add);

saleRoute.get('/:id', saleController.getById);

module.exports = saleRoute;