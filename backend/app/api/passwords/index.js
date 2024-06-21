const { Router } = require('express')

const { Password } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')
const router = new Router()


router.get('/', (req, res) => {
  try {
    res.status(200).json(Password.get())
  } catch (err) {
    manageAllErrors(res, err)
  }
})


router.get('/:passwordId', (req, res) => {
  try {
    res.status(200).json(Password.getById(req.params.passwordId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})


router.post('/', (req, res) => {
  try {
    res.status(201).json(Password.create({ ...req.body }))
  } catch (err) {
    manageAllErrors(res, err)
  }
})


router.put('/:passwordId', (req, res) => {
  try {
    res.status(200).json(Password.update(req.params.passwordId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})


router.delete('/:passwordId', (req, res) => {
  try {
    Password.delete(req.params.passwordId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})


module.exports = router