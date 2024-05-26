const { Router } = require('express')
const StatisticsRouter = require('./statistics')
const UserRouter = require('./users')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/statistics', StatisticsRouter)
router.use('/users', UserRouter)

module.exports = router