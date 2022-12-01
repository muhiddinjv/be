const { getBook, getBooks, addBook, updateBook, deleteBook } = require("../controllers/bookController");

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

const updateBookOpts = {
  schema: {
    response: {
      200: Book,
    },
  },
  handler: updateBook,
};

const deleteBookOpts = {
  schema: {
    response: {
      201: {
        body:{
          type:'object',
          properties: {
            message: { type:'string' }
          }
        }
      },
    },
  },
  handler: deleteBook,
};

function bookRoutes(fastify, options, done) {
  // GET all books
  fastify.get("/books", getBooksOpts);

  // GET single book
  fastify.get("/books/:id", getBookOpts);

  // POST single book
  fastify.post("/books", postBookOpts);

  // UPDATE single book
  fastify.put("/books/:id", updateBookOpts);

  // DELETE single book
  fastify.delete("/books/:id", deleteBookOpts);

  done();
}

module.exports = bookRoutes;
