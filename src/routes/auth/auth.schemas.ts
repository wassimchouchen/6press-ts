import Joi from 'joi'
// import { mainModule } from 'process'

export const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
})

export const register = Joi.object({
  fullname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
})
