import jwt from 'jsonwebtoken'
// import job_cardTs from '.'
import { jc } from '../../models'


export const createJob_card = data => {
  
  return jc.create(data)
}

export const getJob_card = async (title: string,company: string,
  location: string,
  date: string,
  tasks: string,
  applied: number,
  about: string,
  requirements: string,
  type: string,
  aboutCompany: string) => {
  // const jc = await jc.findBytitle(title)    
  console.log(jc)
  if (!jc) {
    return {
      error: 'jc not found',
    }
  }

  const token = await jwt.sign(
    {
      title: jc.title,
   
    },
    process.env.JWT_SECRET
  )
  return { token: `fraise ${token}`}
  }