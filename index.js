const express = require('express');
// const BOOKS = require('./books');
const app = express();
const db = require('./db');

//adding  json parsing middleware
app.use(express.json());

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

// POST - create a new book
app.post('/books', async (req, res) => {
  const {isbn, title, author, format} = req.body;

  try{
    const createResult = await db.query('INSERT INTO book (isbn, title, author, format) VALUES ($1, $2, $3, $4) RETURNING *', [isbn, title, author, format]);
    res.json(createResult.rows[0]);
  } catch(err) {
    console.error(err);
    res.send("Unable to use POST to add a new book");
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
})