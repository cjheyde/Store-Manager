const joi = require('joi');

// const HTTP_BAD_REQUEST = 400;
// const HTTP_UNPROCESSABLE_ENTITY = 422;

const saleSchema = joi.object({
  quantity: joi.number().required().messages({
    'any.required': '400|"quantity" is required',
  }),
  productId: joi.number().min(1).required().messages({
    'number.min': '422|"quantity" must be greater than or equal to 1"',
    'any.required': '400|"productId" is required',
  }),
});

// ref. código de aula de monitoria de Henrique Baeta - https://trybecourse.slack.com/archives/C02T5FNGN07/p1660324808013639
const isSaleValid = (sale) => {
  const isValid = saleSchema.validate(sale);
  return isValid;
};

const validacaoSale = (req, res, next) => {
  const sale = { ...req.body };

  sale.forEach((transaction) => {
    const { error } = isSaleValid(transaction);

    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(Number(code)).json({ message });
    }
    });

  next();
};

module.exports = { validacaoSale };
