const joi = require('joi');

const productSchema = joi.object({
  name: joi.string().min(5).required().messages({
    'string.min': '422|"name" length must be at least {#limit} characters long',
    'any.required': '400|"name" is required',
  }),
});

// ref. código de aula de monitoria de Henrique Baeta - https://trybecourse.slack.com/archives/C02T5FNGN07/p1660324808013639
const isProductValid = (product) => {
  const isValid = productSchema.validate(product);
  return isValid;
};

  const validacao = (req, res, next) => {
    const product = { ...req.body };
    const { error } = isProductValid(product);

    if (error) {
      const [code, message] = error.message.split('|');
      return res.status(Number(code)).json({ message });
    }
    next();
  };

  module.exports = { validacao };
