const typeString = { type: 'string' };
const typeNumber = { type: 'number' };

const admin = {
  type: 'object',
  properties: {
    id: typeNumber,
    username: typeString,
    email: typeString,
  },
};

const getAdminsSchema = {
  response: {
      200: {
        type: 'array',
        items: admin
      },
  },
}

const getAdminSchema = {
  params: {
    id: typeNumber,
  },
  response: {
    200: admin,
  },
};

const registerAdminSchema = {
  body: {
    type: 'object',
    required: ['username', 'email', 'password'],
    properties: {
      username: typeString,
      email: typeString,
      password: typeString,
    },
  },
  response: {
    200: {
      type: 'array',
      items: admin
    },
  },
};

const loginAdminSchema = {
  body: {
    type: 'object',
    required: ['username', 'password'],
    properties: {
      username: typeString,
      password: typeString,
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        token: typeString,
      },
    },
  },
};

const updateAdminSchema = {
  params: {
    id: typeNumber,
  },
  response: {
    200: {
      type: 'array',
      items: admin
    },
  },
};

const deleteAdminSchema = {
  params: {
    id: typeNumber,
  },
  response: {
    200: {
      type: 'array',
      items: admin
    },
  },
};

module.exports = { getAdminsSchema, getAdminSchema, registerAdminSchema, updateAdminSchema, deleteAdminSchema };