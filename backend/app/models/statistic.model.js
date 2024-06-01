const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Statistic', {
  averageTime: Joi.number().required(),
  accuracy: Joi.number().required(),
  nbData: Joi.number().required(),
  positionId: Joi.number().required(),
  userId: Joi.number().required(),
})