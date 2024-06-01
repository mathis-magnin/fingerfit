const { Router } = require('express')

const { Statistic } = require('../../../models')
const manageAllErrors = require('../../../utils/routes/error-management')

const router = new Router()

router.get('/', (req, res) => {
  try {
    const positionId = req.query.positionId;
    const userId = req.query.userId;
    if (positionId && userId) {
      const statistics = Statistic.get()
      const filteredStatitics = statistics.filter(statistic => statistic.positionId === Number(positionId) && statistic.userId === Number(userId));
      return res.status(200).json(filteredStatitics)
    }else{
      res.status(200).json(Statistic.get())
    }
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:statisticId', (req, res) => {
  try {
    res.status(200).json(Statistic.getById(req.params.statisticId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    const statistic = Statistic.create({ ...req.body })
    res.status(201).json(statistic)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:statisticId', (req, res) => {
  try {
    res.status(200).json(Statistic.update(req.params.statisticId, req.body))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:statisticId', (req, res) => {
  try {
    Statistic.delete(req.params.statisticId)
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router