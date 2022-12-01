const fastify = require("fastify")();
// const swaggerObj = require("./helper/swagger");
fastify.register(require("@fastify/swagger"), {
  routePrefix: "/docs",
  exposeRoute: true,
  swagger: {
    info: {
      title: "Imma swagga cuz I swag!",
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

// git config --global http.sslVerify false 
// ------------ git push -----------------
// git config --global http.sslVerify true
