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
  
  const foundPost = posts.find(post => post.id === id);

  if(!foundPost){
    return reply.status(404).send(new Error('Post not found'));
  }
  
  posts = posts.filter(post => post.id !== id) //LOOK HERE

  return reply.status(200).send(posts);
};

const updatePostHandler = (req, reply) => {
  const { id } = req.params;
  const { title, body } = req.body;
  
  const targetIndex = posts.findIndex(f => f.id === id); 
  
  posts[targetIndex] = { id, title, body };

  return reply.send('Post updated');
};

module.exports = { getPostsHandler, getPostHandler, addPostHandler, deletePostHandler, updatePostHandler };