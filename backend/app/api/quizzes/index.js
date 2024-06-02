const { Router } = require('express')

const manageAllErrors = require('../../utils/routes/error-management')
const { getQuiz, getQuizzes, createQuiz, updateQuiz, deleteQuiz } = require('./manager')
const router = new Router()


router.get('/', (req, res) => {
  try {
    res.status(200).json(getQuizzes())
  } catch (err) {
    manageAllErrors(res, err)
  }
})


router.get('/:QuizId', (req, res) => {
  try {
    res.status(200).json(getQuiz(req.params.quizId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})


router.post('/', (req, res) => {
  try {
    res.status(201).json(createQuiz({ ...req.body }))
  } catch (err) {
    manageAllErrors(res, err)
  }
})


router.put('/:quizId', (req, res) => {
  try {
    res.status(200).json(updateQuiz(req.params.quizId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})


router.delete('/:quizId', (req, res) => {
  try {
    deleteQuiz(req.params.quizId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})


module.exports = router