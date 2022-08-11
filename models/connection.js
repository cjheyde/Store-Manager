const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config(); https://github.com/tryber/sd-020-a-store-manager

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE || 'StoreManager',
  port: process.env.MYSQL_PORT,
});

module.exports = connection;