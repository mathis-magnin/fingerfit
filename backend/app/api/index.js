const { Router } = require('express')
const UserRouter = require('./users')
const PositionRouter = require('./positions')
const QuizRouter = require('./quizzes')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/users', UserRouter)
router.use('/positions', PositionRouter)
router.use('/quizzes', QuizRouter)

module.exports = router