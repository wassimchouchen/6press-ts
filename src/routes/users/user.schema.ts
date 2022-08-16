import Joi from 'joi'

export const createUser = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  fullname: Joi.string().required(),
  role: Joi.string().required(),
})

export const updateUser = Joi.object({
  email: Joi.string().email().required(),
})

export const deleteUser =Joi.object({
    email : Joi.string().email().required()

})
export const getUser =Joi.object({
    email : Joi.string().email().required()

})