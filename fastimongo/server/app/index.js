const fastify = require("fastify")({logger: true});
const dotenv = require("dotenv");
dotenv.config();

// fastify.register(require("@fastify/swagger"), {
//   routePrefix: "/docs",
//   exposeRoute: true,
//   swagger: {
//     info: {
//       title: "Imma swagga cuz I swag!",
//     },
//   },
// });

fastify.register(require("./routes/posts.routes"));

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
