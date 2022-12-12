const { getAdminsSchema, getAdminSchema, registerAdminSchema,  updateAdminSchema, deleteAdminSchema } = require('../controllers/schemas/admins.js');
const { getAdminsHandler, getAdminHandler, registerAdminHandler, updateAdminHandler, deleteAdminHandler } = require('../controllers/handlers/admins.js');

const getAdminsOpts = {
  schema: getAdminsSchema,
  handler: getAdminsHandler
}

const getAdminOpts = {
  schema: getAdminSchema,
  handler: getAdminHandler
}

const registerAdminOpts = {
  schema: registerAdminSchema,
  handler: registerAdminHandler
}

const deleteAdminOpts = {
  schema: deleteAdminSchema,
  handler: deleteAdminHandler
}

const updateAdminOpts = {
  schema: updateAdminSchema,
  handler: updateAdminHandler
}

const adminRoutes = (fastify, options, done) => {
  fastify.get('/api/admins', getAdminsOpts)
  fastify.get('/api/admins/:id', getAdminOpts)
  fastify.post('/api/admins/register', registerAdminOpts)
  fastify.put('/api/admins/:id', updateAdminOpts)
  fastify.delete('/api/admins/:id', deleteAdminOpts)
  done();
}

module.exports = adminRoutes;