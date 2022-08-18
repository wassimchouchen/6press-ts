import { number } from 'joi'
import mongoose, { Model, Schema, Document } from 'mongoose'

interface job_card {
create(data: any)
title:string
company: string
location: string
date: string
tasks: string
applied: number
about: string
requirements: string
type: string
aboutCompany: string
}

const job_card = new Schema<job_card>(
  {
    title: {
        type: String,
        required: true,
        unique:true
      },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    aboutCompany: {
        type: String,
        required: true,
      },
    requirements: {
        type: String,
        required: true,
      },
    type: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
)


export default mongoose.model('jc', job_card)