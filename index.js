const express = require('express');
// const BOOKS = require('./books');
const app = express();
const db = require('./db');

// to GET all the books
app.get('/books', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM book');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Was not able to GET all the books');
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
})