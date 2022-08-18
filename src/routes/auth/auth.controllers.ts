import { RequestHandler } from 'express'
import * as services from './auth.services'
const createError =require('http-errors')
import { User } from '../../models'



export const login: RequestHandler = async (rq, rs) => {
  const data = rq.body
  console.log(rq.body)
  const { token, error } = await services.login(data.email, data.password)
 
  if (error) {
    rs.status(400).json({ error })
  } else {
    rs.send({ token , data})
  }
}


export const register: RequestHandler = async (rq, rs) => {
  const data = rq.body
  console.log(rq.body)
  const user = await services.register(data)
  const doesExist=await User.findOne({email : data.email})
  if(doesExist)throw createError.Conflict(`${data.email}is already been registered`)
  else {
    const savedUser =  user.save()
    return rs.status(200).json(savedUser)
  }

}
