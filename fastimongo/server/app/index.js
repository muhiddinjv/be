const fastify = require("fastify")({logger: true});
const cors = require("@fastify/cors");
const dotenv = require("dotenv");
dotenv.config();

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
