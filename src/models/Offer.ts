import mongoose, { Model, Schema, Document } from 'mongoose'
interface Offer {
    create(data: any)
    name:string
    category: string
    body: string

    }

const Offer = new Schema<Offer>(
  {
    name: {
        type: String,
        required: true,
        unique:true
      },
    category: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
)


export default mongoose.model('Offer', Offer)

