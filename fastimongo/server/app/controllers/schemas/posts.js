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

const headerSchema = {
  type: 'object',
  required: ['token'],
  properties: {
    token: typeString,
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
  // headers: headerSchema,
  body: {
    type: 'object',
    required: ['title', 'body'],
    properties: {
      title: typeString,
      body: typeString,
    },
  },
  response: {
    200: {
      type: 'array',
      items: post
    },
  },
};

const updatePostSchema = {
  // headers: headerSchema,
  params: {
    id: typeNumber,
  },
  response: {
    200: {
      type: 'array',
      items: post
    },
  },
};

const deletePostSchema = {
  // headers: headerSchema,
  params: {
    id: typeNumber,
  },
  response: {
    200: {
      type: 'array',
      items: post
    },
  },
};



module.exports = { getPostsSchema, getPostSchema, addPostSchema, updatePostSchema, deletePostSchema };