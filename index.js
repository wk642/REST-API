const express = require('express');
const app = express();

//hardcoded data
const books= [
  {
    "isbn": "05531324567",
    "title": "A Court of Wings and Ruin",
    "author": "Sarah J. Maas",
    "format": "Hardcover"
  },
  {
    "isbn": "05531324511",
    "title": "A Court of Silver Flames",
    "author": "Sarah J. Maas",
    "format": "Hardcover"
  }
]

// route that uses the hardcoded data
app.get('/books', (req, res) => {
  res.json(books);
})

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
})