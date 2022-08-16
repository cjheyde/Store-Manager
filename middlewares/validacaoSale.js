const joi = require('joi');

const HTTP_BAD_REQUEST = 400;
const HTTP_UNPROCESSABLE_ENTITY = 422;

const saleSchema = joi.object({
  quantity: joi.number().required(),
  productId: joi.number().required(),
});

const validacaoSale = (req, res, next) => {
  const { productId, quantity } = req.body;
  if (!productId) {
    return res.status(HTTP_BAD_REQUEST)
      .json({ message: '"productId" is required' });
  }
  if (!quantity) {
    return res.status(HTTP_BAD_REQUEST)
      .json({ message: '"quantity" is required' });
  }
  if (quantity <= 0) {
    return res.status(HTTP_UNPROCESSABLE_ENTITY)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }
  const isValid = saleSchema.validate({ productId, quantity });
  if (isValid.error) {
    return res.status(HTTP_UNPROCESSABLE_ENTITY).json({ message: isValid.error.message });
  }
  next();
};

module.exports = { validacaoSale };
