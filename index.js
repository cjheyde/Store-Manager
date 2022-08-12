const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const PORT = process.env.PORT || 3000;

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
