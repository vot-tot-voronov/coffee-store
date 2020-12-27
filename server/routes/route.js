const User = require('../User');

async function routes(fastify, options) {
    fastify.get('/', async (req, res) => {
        const user = new User('1', 'Lalibella', 'Peru', '320')
        res.header("Access-Control-Allow-Origin", "*")
        res.send(user)
    });
}

module.exports = routes;