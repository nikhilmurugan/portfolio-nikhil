import cors from 'cors'
import express from 'express'
import { connectDatabase } from './config/db.js'
import { env } from './config/env.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'
import { apiRouter } from './routes/index.js'

const app = express()

app.use(
  cors({
    origin: env.clientOrigin,
    credentials: true,
  }),
)
app.use(express.json())
app.use('/api', apiRouter)
app.use(notFound)
app.use(errorHandler)

async function bootstrap() {
  await connectDatabase()
  app.listen(env.port, () => {
    console.info(`[api] listening on http://localhost:${env.port}`)
  })
}

void bootstrap()
