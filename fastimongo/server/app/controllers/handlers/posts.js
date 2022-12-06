let posts = require('../../data/posts');

const getPostsHandler = (request, reply) => {
  reply.send(posts);
}

const getPostHandler = (req, reply) => {
  const { id } = req.params;

  const post = posts.filter((post) => {
    return post.id === id;
  })[0];

  if (!post) {
    return reply.status(404).send(new Error('Post not found'));
  }

  return reply.send(post);
};

const addPostHandler = (req, reply) => {
  const { title, body } = req.body; // no body parser required

  const id = posts.length + 1;
  posts.push({ id, title, body });

  reply.send('Post added');
};

const deletePostHandler = (req, reply) => {
  const { id } = req.params;

  let post = posts.filter((post) => {
    return post.id !== id;
  });

  posts.find(post => post.id !== id && reply.status(404).send(new Error("Post doesn't exist"))
  );

  posts = post;

  reply.send('Post deleted');
};

module.exports = { getPostsHandler, getPostHandler, addPostHandler, deletePostHandler };