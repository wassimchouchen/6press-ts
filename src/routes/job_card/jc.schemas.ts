import Joi from 'joi'
// import { mainModule } from 'process'

export const getJob_card = Joi.object({
  company: Joi.string().required(),
  location: Joi.string().required(),
  date: Joi.string(),
  tasks: Joi.string().required(),
  about: Joi.string().required(),
  requirements: Joi.string().required(),
  applied: Joi.number().required(),
  type: Joi.string().required(),
  aboutCompany: Joi.string().required(),
})

export const createJob_card = Joi.object({
  company: Joi.string().required(),
  location: Joi.string().required(),
  date: Joi.string(),
  tasks: Joi.string().required(),
  about: Joi.string().required(),
  requirements: Joi.string().required(),
  applied: Joi.number().required(),
  type: Joi.string().required(),
  aboutCompany: Joi.string().required(),
})

export const updateJob_card = Joi.object({
  company: Joi.string().required(),
  location: Joi.string().required(),
  date: Joi.string(),
  tasks: Joi.string().required(),
  about: Joi.string().required(),
  requirements: Joi.string().required(),
  applied: Joi.number().required(),
  type: Joi.string().required(),
  aboutCompany: Joi.string().required(),
})