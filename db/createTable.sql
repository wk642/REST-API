CREATE TABLE IF NOT EXISTS book (
  id SERIAL PRIMARY KEY,
  isbn VARCHAR,
  title VARCHAR,
  author VARCHAR,
  format VARCHAR
)