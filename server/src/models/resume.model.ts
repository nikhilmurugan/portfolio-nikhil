import mongoose from 'mongoose'

const resumeSchema = new mongoose.Schema(
  {
    version: { type: String, required: true },
    url: { type: String, required: true },
    published: { type: Boolean, default: true },
  },
  { timestamps: true },
)

export const ResumeModel = mongoose.model('Resume', resumeSchema)
