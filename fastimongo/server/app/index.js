const fastify = require("fastify")({logger: true});
const verifyToken = require("./controllers/auth/auth");
const cors = require("@fastify/cors");
const dotenv = require("dotenv");
dotenv.config();

fastify.register(require("@fastify/swagger"), {});
fastify.register(require("@fastify/swagger-ui"), {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: {
      title: "I'm a swagga cuz I swag!",
    },
  },
});

fastify.decorate('verifyToken', verifyToken);
fastify.register(cors, {origin: true})
fastify.register(require("./routes/posts.routes"));
fastify.register(require("./routes/admins.routes"));


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
