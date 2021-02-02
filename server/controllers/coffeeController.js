const {Coffee} = require('../models/models')

class CoffeeController {
    async create(req, res) {
        const {img, cookMethod, series, name, weight, price} = req.body
        const coffee = await Coffee.create({img, cookMethod, series, name, weight, price})
        return res.json(coffee)
    }
    async getAll(req, res) {
        const coffee = await Coffee.findAll()
        return res.json(coffee)
    }
}

module.exports = new CoffeeController()