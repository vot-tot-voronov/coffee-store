const fastify = require('fastify')()

fastify.register(require('./routes/route'))

fastify.listen(3001, (err, address) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    fastify.log.info(`server listening on port ${address}`)
})