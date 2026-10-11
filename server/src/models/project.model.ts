import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    summary: String,
    stack: [String],
    featured: { type: Boolean, default: false },
  },
  { timestamps: true },
)

export const ProjectModel = mongoose.model('Project', projectSchema)
