const fastify = require("fastify")({ logger: true });

fastify.register(require("./routes/bookroutes"));
fastify.register(require("@fastify/swagger"), {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: { title: "fastify-api" },
  },
});

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
