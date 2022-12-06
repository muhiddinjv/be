const { getPostsSchema, getPostSchema, addPostSchema, deletePostSchema } = require('../controllers/schemas/posts.js');
const { getPostsHandler, getPostHandler, addPostHandler, deletePostHandler } = require('../controllers/handlers/posts.js');

const getPostsOpts = {
  schema: getPostsSchema,
  handler: getPostsHandler
}

const getPostOpts = {
  schema: getPostSchema,
  handler: getPostHandler
}

const addPostOpts = {
  schema: addPostSchema,
  handler: addPostHandler
}

const deletePostOpts = {
  schema: deletePostSchema,
  handler: deletePostHandler
}

const postRoutes = (fastify, options, done) => {
    fastify.get('/api/posts', getPostsOpts)
    fastify.get('/api/posts/:id', getPostOpts)
    fastify.post('/api/posts/new', addPostOpts)
    fastify.delete('/api/posts/:id', deletePostOpts)
    done();
}

module.exports = postRoutes;