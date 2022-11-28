// CommonJs
const fastify = require('fastify')();
const bookdata = require('./bookdata')

fastify.get('/', async (request, reply) => {
  return bookdata
})

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()