const { getBook, getBooks, addBook } = require("../controllers/bookController");

// options for get all books
const Book = {
  type: "object",
  properties: {
    id: { type: "string" },
    title: { type: "string" },
    author: { type: "string" },
    published: { type: "string" },
  },
};

const getBooksOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Book,
      },
    },
  },
  handler: getBooks,
};

const getBookOpts = {
  schema: {
    response: {
      200: Book,
    },
  },
  handler: getBook,
};

const postBookOpts = {
  schema: {
    response: {
      201: Book,
    },
  },
  handler: addBook,
};

function bookRoutes(fastify, options, done) {
  // GET all books
  fastify.get("/books", getBooksOpts);

  // GET single book
  fastify.get("/books/:id", getBookOpts);

  // POST single book
  fastify.post("/books", postBookOpts);

  done();
}

module.exports = bookRoutes;
