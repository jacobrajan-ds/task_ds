const express = require("express");
const app = express();

const port = 3000;

let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
];

app.use(express.json());

// Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// Get a specific book
app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((book) => book.id === id);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Create a new book
app.post("/books", (req, res) => {
  const newBook = req.body;
  newBook.id = books.length + 1;
  books.push(newBook);

  res.status(201).json(newBook);
});

// Update a book
app.put("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedBook = req.body;
  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    books[index] = { ...books[index], ...updatedBook };
    res.json(books[index]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// Delete a book
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter((book) => book.id !== id);

  res.json({ message: "Book deleted successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
