import express from 'express';
import books from './books.js';
const app = express();

// route that uses the hardcoded data
app.get('/books', (req, res) => {
  res.json(books);
})

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
})