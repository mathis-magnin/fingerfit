const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('User', {
    id: Joi.number().required(),
    name: Joi.string().required(),
    firstName: Joi.string().required(),
    age: Joi.number().required(),
    profilePicture: Joi.string().required(),
    gameMode: Joi.number().required(),
    timeMesure: Joi.number().required(),
    countdown: Joi.number().required()
})
