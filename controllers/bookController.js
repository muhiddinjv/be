let bookdata = require("../bookdata");
const { v4: uuidv4 } = require("uuid");

const getBooks = (req, reply) => {
  reply.send(bookdata);
};

const getBook = (req, reply) => {
  const { id } = req.params;

  const book = bookdata.find((book) => book.id === id);

  reply.send(book);
};

const addBook = (req, reply) => {
  const { title, author, published } = req.body;
  const book = {
    id: uuidv4(),
    title,
    author,
    published,
  };
  bookdata = [...bookdata, book];
  reply.code(201).send(book);
};

const updateBook = (req, reply) => {
  const { id } = req.params;
  const { title, author, published } = req.body;

  bookdata = bookdata.map((book) => (book.id === id ? {id, title, author, published} : book));
  book = bookdata.find(book => book.id === id)

  reply.send(book);
};

const deleteBook = (req, reply) => {
  const { id } = req.params;

  bookdata = bookdata.filter((book) => book.id !== id);

  reply.send({message: `book ${id} has been deleted`});
};

module.exports = { getBooks, getBook, addBook, updateBook, deleteBook };
