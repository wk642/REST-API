const express = require('express');
// const BOOKS = require('./books');
const app = express();
const db = require('./db');

//adding  json parsing middleware
app.use(express.json());

//maybe add a test connection message at url /

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
    res.json(createResult.rows);
  } catch(err) {
    console.error(err);
    res.send("Unable to use POST to add a new book");
  }
});

// PUT - update a book
app.put('/books/:id', async(req, res) => {
  const {isbn, title, author, format} = req.body;

  try {
    const updateResult = await db.query('UPDATE book SET isbn = $1, title = $2, author = $3, format = $4 WHERE id = $5 RETURNING *', [isbn, title, author, format, req.params.id]);
    res.json(updateResult.rows);
  } catch(err) {
    console.log(err);
    res.send("Unable to use PUT to update");
  }
});

//DELETE - deleting book by author
app.delete('/books/author/:author', async (req, res) => {
  const {author} = req.params;
  try {
    const deleteByAuthorResult = await db.query('DELETE FROM book WHERE author = $1 RETURNING *', [author]);
    res.json(deleteByAuthorResult.rows,);
  } catch (err) {
    res.status(500).json({ error: 'Error deleting books' });
  }
});

//DELETE - deleting book by id
app.delete('/books/id/:id', async (req, res) => {
  try {
    const deletedByIdResults = await db.query('DELETE FROM book WHERE id = $1 RETURNING *', [req.params.id]);
    res.json(deletedByIdResults.rows,);
  } catch (err) {
    res.status(500).json({ error: 'Error deleting books' });
  }
});
// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});