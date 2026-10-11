import mongoose from 'mongoose'
import { env } from './env.js'

export async function connectDatabase() {
  if (!env.mongoUri || env.mongoUri.includes('user:pass@cluster')) {
    console.warn('[db] MongoDB Atlas skipped (set a real MONGODB_URI when ready).')
    return
  }

  try {
    mongoose.set('strictQuery', true)
    await mongoose.connect(env.mongoUri)
    console.info('[db] Connected to MongoDB Atlas')
  } catch (error) {
    console.warn('[db] Connection failed. API will continue without MongoDB.', error)
  }
}
