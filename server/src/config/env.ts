import dotenv from 'dotenv'

dotenv.config()

export const env = {
  port: Number(process.env.PORT ?? 5000),
  mongoUri: process.env.MONGODB_URI ?? '',
  clientOrigin: process.env.CLIENT_ORIGIN ?? 'http://localhost:5173',
  nodeEnv: process.env.NODE_ENV ?? 'development',
}
