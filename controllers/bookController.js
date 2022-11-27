const bookdata = require("../bookdata");

const getBooks = (req, reply) => {
  reply.send(bookdata);
};

const getBook = (req, reply) => {
  const { id } = req.params;

  const book = bookdata.find((book) => book.id === id);

  reply.send(book);
};

module.exports = { getBooks, getBook };
