import { connect } from 'mongoose'


// mongoose
//   .connect("mongodb+srv://Linked:52145023wassim",{
//    dbName:'linked',
//    useNewUrlParser:true,
//    useUnifiedTopology:true,
//     useFindAndModify:false,
//    useCreateIndex:true,})
//   .then(()=>{
//     console.log('mongodb connected.')
//  })
//   .catch((err)=>console.log(err.message))

// mongoose.connection.on('connected',()=>{
//  console.log('Mongoose connected to db')})


export const connectToDb = () => {
  return connect(process.env.DB || '')
    .then(() => {
      console.log('MongoDB Connected')
    })
    .catch(err => {
      console.log(err)
    })
}
