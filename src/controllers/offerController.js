const Offer = require('../models/Offer');
// import jwt from 'jsonwebtoken';
const mongoose = require('mongoose');


//get all workouts 
const getOffers = async(req, res) => {
  
    const offers = await Offer.find({}).sort({ createdAt: -1 })
    res.status(200).json(offers)
    // const token = await jwt.sign(
    //     {
    //       id: Offer._id,
    //       body: user.body,
    //     },
    //     process.env.JWT_SECRET
    //   )
    //   return { token: `ninininiii ${token}`}
}



//get a single workout
const getOffer = async(req, res) => {
  

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

const createOffer = async(req, res) => {
    
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
const  deleteOffer = async(req,res, next)=>{
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


const updateOffer = async(req, res) => {
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



module.exports = {


    getOffers,
    getOffer,
    createOffer,
    deleteOffer,
    updateOffer


}