const typeString = { type: 'string' };
const typeNumber = { type: 'number' };

const post = {
  type: 'object',
  properties: {
    id: typeNumber,
    title: typeString,
    body: typeString,
  },
};

const getPostsSchema = {
  response: {
      200: {
        type: 'array',
        items: post
      },
  },
}

const getPostSchema = {
  params: {
    id: typeNumber,
  },
  response: {
    200: post,
  },
};

const addPostSchema = {
  body: {
    type: 'object',
    required: ['title', 'body'],
    properties: {
      title: typeString,
      body: typeString,
    },
  },
  response: {
    200: typeString,
  },
};

const deletePostSchema = {
  params: {
    id: {type: 'number'},
  },
  response: {
    200: post,
  },
};

module.exports = { getPostsSchema, getPostSchema, addPostSchema, deletePostSchema };
// move on to update post