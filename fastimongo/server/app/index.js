const fastify = require("fastify")({logger: true});
const cors = require("@fastify/cors");
const dotenv = require("dotenv");
const fs = require('fs')
const verifyToken = require("./controllers/auth/auth");
const path = require('path')
dotenv.config();

fastify.register(require("@fastify/swagger"), {});
fastify.register(require("@fastify/swagger-ui"), {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: {
      title: "Imma swagga cuz I swag!",
    },
  },
});



fastify.decorate('verifyToken', verifyToken);
fastify.register(cors, {origin: true})
fastify.register(require("./routes/posts.routes"));
fastify.register(require("./routes/admins.routes"));
fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, '/')
})

fastify.get('/', function (req, reply) {
  return reply.sendFile('test.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
})

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await fastify.listen({port: PORT});
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
}

startServer();
