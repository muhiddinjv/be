const { getPostsSchema, getPostSchema, addPostSchema,  updatePostSchema, deletePostSchema } = require('../controllers/schemas/posts.js');
const { getPostsHandler, getPostHandler, addPostHandler, updatePostHandler, deletePostHandler } = require('../controllers/handlers/posts.js');
const fastify = require("fastify")({logger: true});

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

// const privatePostRoutes = (fastify) => {
//   // create a new post
//   fastify.post('/api/posts/new', {
//     preHandler: fastify.auth([fastify.verifyToken]),
//     ...addPostOpts,
//   });

//   // update a post
//   fastify.put('/api/posts/:id', {
//     preHandler: fastify.auth([fastify.verifyToken]),
//     ...updatePostOpts,
//   });

//   // delete a post
//   fastify.delete('/api/posts/:id', {
//     preHandler: fastify.auth([fastify.verifyToken]),
//     ...deletePostOpts,
//   });
  
// };

// fastify
//   .register(require('@fastify/auth'))
//   .after(() => privatePostRoutes(fastify));

module.exports = postRoutes;