const fastify = require("fastify")({logger: true});
const dotenv = require("dotenv");
const cors = require("@fastify/cors");
dotenv.config();

fastify.register(cors, {origin: true})

// fastify.register(require("@fastify/swagger"), {
//   routePrefix: "/docs",
//   exposeRoute: true,
//   swagger: {
//     info: {
//       title: "Imma swagga cuz I swag!",
//     },
//   },
// });

const PORT = process.env.PORT || 5000;

fastify.register(require("./routes/posts.routes"));

const startServer = async () => {
  try {
    await fastify.listen({port: PORT});
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
}

startServer();
