const createError=require('http-errors')
const JWT=require('jsonwebtoken')

module.exports={
  signAccessToken:(userId)=>{
    return new Promise((resolve,reject)=>{
      const payload={
        name:"yours truly"}
 
     
      const secret="some super secret"
      const options={}


      JWT.sign(payload,secret,options,(err,token)=>{
        if(err)reject(err)
        resolve(token)
      })
    })

}
}