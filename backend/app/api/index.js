const { Router } = require('express')
const UserRouter = require('./users')
const PositionRouter = require('./positions')
const QuizRouter = require('./quizzes')
const PasswordRouter = require('./passwords')

const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/users', UserRouter)
router.use('/positions', PositionRouter)
router.use('/quizzes', QuizRouter)
router.use('/passwords', PasswordRouter)

module.exports = router