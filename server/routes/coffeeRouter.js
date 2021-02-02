const Router = require('express')
const router = new Router()

const coffeeController = require('../controllers/coffeeController')

router.post('/', coffeeController.create)
router.get('/', coffeeController.getAll)

module.exports = router