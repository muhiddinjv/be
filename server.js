const fastify = require("fastify")({logger: true});
// const swaggerObj = require("./helper/swagger");
fastify.register(require("@fastify/swagger"), {
  routePrefix: "/docs",
  exposeRoute: true,
  swagger: {
    info: {
      title: "Okeni swaggeri bu uka!",
    },
  },
});
fastify.register(require("./routes/bookroutes"));

const start = async () => {
  const PORT = 5000;
  try {
    await fastify.listen({ port: PORT });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};
start();
//asdfasfs
