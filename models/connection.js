const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  MYSQL_PORT,
} = process.env;

const connection = mysql.createPool({
  host: MYSQL_HOST || 'localhost',
  user: MYSQL_USER || 'root',
  password: MYSQL_PASSWORD || 'password',
  database: MYSQL_DATABASE || 'StoreManager',
  port: MYSQL_PORT || 3306,
});

module.exports = connection;