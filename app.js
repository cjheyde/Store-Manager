const express = require('express');
const bodyParser = require('body-parser');
const { log } = require('console');

const routes = require('./routes');
// const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

const HTTP_NOT_FOUND_STATUS = 404;
const HTTP_INTERNAL_SERVER_ERROR_STATUS = 500;

app.use(bodyParser.json());

// Ref course Bloco 22 aula 5
app.use((req, _res, next) => {
  log('req.method:', req.method);
  log('req.path:', req.path);
  log('req.params:', req.params);
  log('req.query:', req.query);
  log('req.headers:', req.headers);
  log('req.body:', req.body);
  next();
});

app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', routes.productRoute);

app.use('/sales', routes.saleRoute);

app.use((err, _req, res, _next) => {
  if (err.message === 'connect ECONNREFUSED 127.0.0.1:3306') {
    return res.status(HTTP_INTERNAL_SERVER_ERROR_STATUS)
      .json({ message: 'banco esta off' });
  }
  if (err.code && err.status) {
    return res.status(err.status)
      .json({ message: `Erro: ${err.message}`, code: err.code });
  }
  return res.status(HTTP_INTERNAL_SERVER_ERROR_STATUS).json({ message: err.message });
});

// ref. course Bloco 22 Aula 4
app.all('*', (req, res) => res.status(HTTP_NOT_FOUND_STATUS)
  .json({ message: `Rota '${req.path}' não existe!` }));

module.exports = app;