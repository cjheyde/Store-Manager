const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products ORDER BY id;');
  return result;
};

const getById = async (id) => {
  const [result] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id = ?; ', [id]);
  if (!result.length) return null;
  return result[0];
};

const add = async (name) => {
  const [result] = await connection
      .execute('INSERT INTO StoreManager.products (name) VALUES (?);', [name]);
  return { id: result.insertId, name };
};

const edit = async ({ name, id }) => {
  const [result] = await connection
    .execute('UPDATE StoreManager.products SET name = ? WHERE id = ?;', [name, id]);
  return result;
};

const destroy = async (id) => {
  const [result] = await connection
    .execute('DELETE FROM StoreManager.products WHERE id = ?;', [id]);
  return result;
};

module.exports = {
  getAll,
  getById,
  add,
  edit,
  destroy,
};
