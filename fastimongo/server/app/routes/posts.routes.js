const { getPostsSchema, getPostSchema, addPostSchema } = require('../controllers/schemas/posts.js');
const { getPostsHandler, getPostHandler, addPostHandler } = require('../controllers/handlers/posts.js');

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

const postRoutes = (fastify, options, done) => {
    fastify.get('/api/posts', getPostsOpts)
    fastify.get('/api/posts/:id', getPostOpts)
    fastify.post('/api/posts/new', addPostOpts)
    done();
}

module.exports = postRoutes;