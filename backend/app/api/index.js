const { Router } = require('express')
const UserRouter = require('./users')
const PositionRouter = require('./positions')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/users', UserRouter)
router.use('/positions', PositionRouter)

module.exports = router
