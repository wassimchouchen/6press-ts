import { RequestHandler } from 'express'
import * as services from './jc.services'

// export async function job_card(rq, rs) {
//   const data = rq.body
//   console.log(rq.body)
//   const { token, error } = await services.getJob_card(data)

//   if (error) {
//     rs.status(400).json({ error })
//   } else {
//     rs.send({ token, data })
//   }
// }

export const getJob_card: RequestHandler = (rq, rs) => {
  const title = rq.params.title
  console.log(rq.body)
  return rs.send(`Get User ${title}`)
}

export const createJob_card: RequestHandler = (rq, rs) => {
  const data = rq.body
  console.log(rq.body)
  return rs.send(`Create User with ${JSON.stringify(data)}`)
}

export const updateJob_card: RequestHandler = (rq, rs) => {
  const title = rq.params.title
  const data = rq.body
  console.log(data)
  return rs.send(`Update User ${title} with ${JSON.stringify(data)}`)
}

export const deleteJob_card: RequestHandler = (rq, rs) => {
  const id = rq.params.id
  return rs.send(`Delete User ${id}`)
}
