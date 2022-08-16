const joi = require('joi');

const HTTP_BAD_REQUEST = 400;
const HTTP_UNPROCESSABLE_ENTITY = 422;

const productSchema = joi.object({
  name: joi.string().min(5).required().messages({
    'string.min': '"name" length must be at least 5 characters long',
    'any.required': '"name" is required',
  }),
});

  const validacao = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
      return res.status(HTTP_BAD_REQUEST).json({ message: '"name" is required' });
    }
    const isValid = productSchema.validate({ name });
    // console.log(isValid.error.details);
    if (isValid.error) {
      return res.status(HTTP_UNPROCESSABLE_ENTITY).json({ message: isValid.error.message });
    }
    next();
  };

  module.exports = { validacao };
