const joi = require('joi');

const HTTP_BAD_REQUEST = 400;
const HTTP_UNPROCESSABLE_ENTITY = 422;

const saleSchema = joi.object({
  quantity: joi.number().required().messages({
    'any.required': '"quantity" is required',
  }),
  productId: joi.number().min(1).required().messages({
    'number.min': '"quantity" must be greater than or equal to 1"',
    'any.required': '"productId" is required',
  }),
});

const validacaoSale = (req, res, next) => {
  const allSalesArray = req.body;

  allSalesArray.forEach((transaction) => {
    if (!transaction.quantity) {
      return res.status(HTTP_BAD_REQUEST).json({ message: '"quantity" is required' });
    }
    if (!transaction.productId) {
      return res.status(HTTP_BAD_REQUEST).json({ message: '"productId" is required' });
    }
    if (!transaction.quantity <= 0) {
      return res.status(HTTP_BAD_REQUEST)
        .json({ message: '"quantity" must be greater than or equal to 1"' });
    }
    const isValid = saleSchema.validate(transaction);
    if (isValid.error) {
      return res.status(HTTP_UNPROCESSABLE_ENTITY).json({ message: isValid.error.message });
    }
    });

  next();
};

module.exports = { validacaoSale };