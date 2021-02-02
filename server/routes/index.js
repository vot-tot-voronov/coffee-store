const Router = require('express')
const router = new Router()

const coffeeRouter = require('./coffeeRouter');

router.use('/coffee', coffeeRouter)

module.exports = router
