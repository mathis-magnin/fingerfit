const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Statistics', {
  userId: Joi.string().required(),
  positionId: Joi.string().required(),
  averageTime: Joi.number().required(),
  accuracy: Joi.number().required(),
})