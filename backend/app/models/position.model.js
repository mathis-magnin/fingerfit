const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Position', {
    keys: Joi.array().items({ symbol: Joi.number(), finger: Joi.number() }),
    side: Joi.number().required()
})