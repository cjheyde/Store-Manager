const joi = require('joi');

const productSchema = joi.object({
  name: joi.string().min(5).required().messages({
    'string.min': '"name" length must be at least 5 characters long',
    'any.required': '"name" is required',
  }),
});

  const validacao = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }
    const isValid = productSchema.validate({ name });
    // console.log(isValid.error.details);
    if (isValid.error) {
      return res.status(422).json({ message: isValid.error.message });
    }
    next();
  };

  module.exports = { validacao };
