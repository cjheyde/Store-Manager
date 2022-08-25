const validProductId = (req, res, next) => {
  const itemsSold = req.body;

  if (itemsSold.some((item) => item.productId === undefined)) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  next();
};

const validQuantity = (req, res, next) => {
  const itemsSold = req.body;

  if (itemsSold.some((item) => item.quantity === undefined)) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  if (itemsSold.some((item) => item.quantity <= 0)) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

module.exports = { validProductId, validQuantity };