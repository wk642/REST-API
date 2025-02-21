const { Pool } = require('pg');

const pool = new Pool({
  user: 'winnie',
  password: 'books123',
  host: 'localhost',
  port: 5432, 
  database: 'restapidb'
});

// connect the database
async function connectDatabase(){
  await pool.connect();
}

// run the sql queries
async function runDatabaseQuery (text, params) {
  return pool.query(text, params);
}

module.exports = { connectDatabase, runDatabaseQuery};
module.exports = pool;