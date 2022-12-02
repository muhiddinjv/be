const allposts = [
  { id: 1, title: 'Post One', body: 'This is post one' },
  { id: 2, title: 'Post Two', body: 'This is post two' },
  { id: 3, title: 'Post Three', body: 'This is post three' },
];

const getPostsOpts = {
  schema:{
    response:{
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {type: 'number'},
            title: {type: 'string'},
            body: {type:'string'},
          }
        }
      }
    }
  },
  handler:(request, reply) => {
    reply.send(allposts);
  }
}

const postRoutes = (fastify, options, done) => {
    fastify.get('/', getPostsOpts)
    done();
}

module.exports = postRoutes;