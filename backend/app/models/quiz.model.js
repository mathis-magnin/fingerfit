const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Quiz', {
    name: Joi.string().required(),
    positions: Joi.array().required(),
    side: Joi.number().required()
})