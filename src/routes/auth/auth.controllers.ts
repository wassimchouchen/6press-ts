import { RequestHandler } from 'express'
import * as services from './auth.services'
const createError =require('http-errors')
import { User } from '../../models'



export const login: RequestHandler = async (rq, rs) => {
  const data = rq.body
  console.log(rq.body)
  const { token, error } = await services.login(data.email, data.password)
  const doesExist=await User.findOne({email : data.email})
   if(doesExist)throw createError.Conflict(`${data.email}is already been registered`)
   if (error) {
    rs.status(400).json({ error })
  } else {
    rs.status(200).json({ token })
  }
}


export const register: RequestHandler = async (rq, rs) => {
  const data = rq.body
  console.log(rq.body)
  const user = await services.register(data)
  const savedUser =  user.save()
  // rs.send(savedUser)
  return rs.status(200).json(savedUser)
}
