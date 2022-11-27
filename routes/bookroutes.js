const { getBook, getBooks } = require("../controllers/bookController");

// options for get all books
const Item = {
  type: "object",
  properties: {
    id: { type: "integer" },
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
        items: Item,
      },
    },
  },
  handler: getBooks,
};

const getBookOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getBook,
};

function bookRoutes(fastify, options, done) {
  // Get all books
  fastify.get("/books", getBooksOpts);

  // Get single book
  fastify.get("/books/:id", getBookOpts);

  done();
}

module.exports = bookRoutes;
