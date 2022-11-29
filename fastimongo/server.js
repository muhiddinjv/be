const fastify = require('fastify')({logger: true});

fastify.get('/',(req, res)=>{
    return {message: "it worked"}
})

const start = async () => {
    try {
        await fastify.listen({port: 4000})
        fastify.log.info(`Server running at ${fastify.server.adress().port}`)
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}

start();