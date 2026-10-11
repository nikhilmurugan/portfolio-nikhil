import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, default: 'new' },
  },
  { timestamps: true },
)

export const ContactModel = mongoose.model('Contact', contactSchema)
