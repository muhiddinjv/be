const { getPostsSchema, getPostSchema, addPostSchema, deletePostSchema, updatePostSchema } = require('../controllers/schemas/posts.js');
const { getPostsHandler, getPostHandler, addPostHandler, deletePostHandler, updatePostHandler } = require('../controllers/handlers/posts.js');

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

const updatePostOpts = {
  schema: updatePostSchema,
  handler: updatePostHandler
}

const postRoutes = (fastify, options, done) => {
    fastify.get('/api/posts', getPostsOpts)
    fastify.get('/api/posts/:id', getPostOpts)
    fastify.post('/api/posts/new', addPostOpts)
    fastify.put('/api/posts/:id', updatePostOpts)
    fastify.delete('/api/posts/:id', deletePostOpts)
    done();
}

module.exports = postRoutes;