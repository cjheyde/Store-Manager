const joi = require('joi');

// const HTTP_BAD_REQUEST = 400;
// const HTTP_UNPROCESSABLE_ENTITY = 422;

const saleSchema = joi.object({
  productId: joi.number().required().messages({
    'any.required': '400|"productId" is required',
  }),
  quantity: joi.number().min(1).required().messages({
    'any.required': '400|"quantity" is required',
    'number.min': '422|"quantity" must be greater than or equal to 1"',
  }),
});

// ref. código de aula de monitoria de Henrique Baeta - https://trybecourse.slack.com/archives/C02T5FNGN07/p1660324808013639
const isSaleValid = (sale) => {
  const isValid = saleSchema.validate(sale);
  return isValid;
};

const validacaoSale = (req, res, next) => {
  const saleArray = req.body;
  
  saleArray.foreEach((sale) => {
    const { error } = isSaleValid(sale);

    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(Number(code)).json({ message });
    }
    });
  next();
};

module.exports = { validacaoSale };
