const HTTP_INTERNAL_SERVER_ERROR_STATUS = 500;

const errorMiddleware = (err, _req, res, _next) => {
  if (err.message === 'connect ECONNREFUSED 127.0.0.1:3306') {
    return res.status(HTTP_INTERNAL_SERVER_ERROR_STATUS)
        .json({ message: 'banco esta off' });
  }
  if (err.code && err.status) {
    return res.status(err.status)
      .json({ message: `Erro: ${err.message}`, code: err.code });
  }
  return res.status(HTTP_INTERNAL_SERVER_ERROR_STATUS).json({ message: err.message });
};

module.exports = errorMiddleware;
