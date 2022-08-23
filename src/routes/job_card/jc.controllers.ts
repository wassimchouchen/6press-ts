import  Offer from '../../models/Offer';
import jwt from 'jsonwebtoken'


//get all workouts 
export const getOffers = async(req, res) => {
  
    const offers = await Offer.find({}).sort({ createdAt: -1 })
    res.status(200).json(offers)
    // const token = await jwt.sign(
    //     {
    //       id: Offer._id
    //     },
    //     process.env.JWT_SECRET
    //   )
    //   return { token: `ninininiii ${token}`}
}

export const getOffer = async(req, res) => {
  

    const { id } = req.params.id 
    const offer = await Offer.findById(id)
    try{
        console.log(offer)
        res.status(200).json(offer)
    }
    catch {

    if (!offer) {
        res.status(404).json({ error: 'hadhi maanaha mefmech user ' })
    }
}
  
    
}

export const createOffer = async(req, res) => {
    
    const register = data => {
  
        return Offer.create(data)
      }

      const data = req.body
      console.log(req.body)
try {
    const offer = await register(data)
    // const doesExist=await User.findOne({email : data.email})
    // if(doesExist)throw createError.Conflict(`${data.email}is already been registered`)
    // else {
      const savedoffer =  offer.save()
      return res.status(200).json( data )
}
catch (error){
    res.status(400).json({ error: "3a9adni nizarrrrrrrrrr" })

}
}
export const  deleteOffer = async(req,res, next)=>{
    const { id } = req.params._id || req.params
       Offer
        .findByIdAndRemove({_id :id})
        .exec()
        .then(doc=>{
         if(!doc){return res.status(404).json("femech jsp pourquoi ");}
          console.log("deleted successfully")
          return res.status(204).json("deleted successfully");
          
       })
        .catch(err=>next(err));
    }


    export const updateOffer = async(req, res) => {
    const { id } = req.params._id || req.params
    const offer = await Offer.findOneAndUpdate({ _id: id }, {
        ...req.body})
    try{
        
      
 
    res.status(200).json(offer)
    }
    catch {
        if (!offer) {
            res.status(404).json({ error: 'femech offer error 2' })
        }
    }
  

   
    

};



// module.exports = {
//     getOffers,
//     getOffer,
//     createOffer,
//     deleteOffer,
//     updateOffer


// }

// import { RequestHandler } from 'express'
// import * as services from './jc.services'

// // export async function job_card(rq, rs) {
// //   const data = rq.body
// //   console.log(rq.body)
// //   const { token, error } = await services.getJob_card(data)

// //   if (error) {
// //     rs.status(400).json({ error })
// //   } else {
// //     rs.send({ token, data })
// //   }
// // }

// export const getJob_card: RequestHandler = (rq, rs) => {
//   const title = rq.params.title
//   console.log(rq.body)
//   return rs.send(`Get User ${title}`)
// }

// export const createJob_card: RequestHandler = (rq, rs) => {
//   const data = rq.body
//   console.log(rq.body)
//   return rs.send(`Create User with ${JSON.stringify(data)}`)
// }

// export const updateJob_card: RequestHandler = (rq, rs) => {
//   const title = rq.params.title
//   const data = rq.body
//   console.log(data)
//   return rs.send(`Update User ${title} with ${JSON.stringify(data)}`)
// }

// export const deleteJob_card: RequestHandler = (rq, rs) => {
//   const id = rq.params.id
//   return rs.send(`Delete User ${id}`)
// }