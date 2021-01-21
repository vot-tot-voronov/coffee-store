const CoffeeDB = require('../CoffeeDB');

const Coffee = new CoffeeDB()
async function routes(fastify, options) {
    fastify.get('/', async (req, res) => {
        res.header("Access-Control-Allow-Origin", "*")
        res.send(Coffee.getCoffee());
    });
}

module.exports = routes;