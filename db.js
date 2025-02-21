const { Pool } = require('pg');

const pool = new Pool({
  user: 'winnie',
  password: 'books123',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'books'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};