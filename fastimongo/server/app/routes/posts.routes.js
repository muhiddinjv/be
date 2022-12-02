const {
  getPosts,
  addPost,
  getPost,
} = require("../actions/posts.controller");

async function routes(fastify, options) {
  fastify.get("/posts", getPosts);
  fastify.post("/posts", addPost);
  fastify.get("/posts/:id", getPost);
}

const allposts = [
  { id: 1, title: 'Post One', body: 'This is post one' },
  { id: 2, title: 'Post Two', body: 'This is post two' },
  { id: 3, title: 'Post Three', body: 'This is post three' },
]

const postRoutes = (fastify, options, done) => {
    fastify.get('/', (request, reply) => {
        reply.send(allposts);
    })
    done();
}
  module.exports = postRoutes;