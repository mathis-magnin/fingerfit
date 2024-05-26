const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('User', {
    name: Joi.string().required(),
    firstName: Joi.string().required(),
    age: Joi.number().required(),
    profilePicture: Joi.string().required()
})
