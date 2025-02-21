const db = require('./db');
const BOOKS  =  require('./books');

// generate the database of books via a script
async function generateDatabase() {
  try {
    for (let book of BOOKS) {
      await db.query(
        'INSERT INTO book (isbn, title, author, format) VALUES ($1, $2, $3, $4)', [book.isbn, book.title, book.author, book.format]
      );
    }
    console.log(`import sucesful!`);
  } catch(err) {
    console.error('Not able to generate the database', err)
  }
}

generateDatabase();