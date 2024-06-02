const { Router } = require('express')

const { Position } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')
const router = new Router()

router.get('/', (req, res) => {
  try {
    res.status(200).json(Position.get())
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:positionId', (req, res) => {
  try {
    res.status(200).json(Position.getById(req.params.positionId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    const position = Position.create({ ...req.body })
    res.status(201).json(position)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:positionId', (req, res) => {
  try {
    res.status(200).json(Position.update(req.params.positionId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:positionId', (req, res) => {
  try {
    Position.delete(req.params.positionId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
