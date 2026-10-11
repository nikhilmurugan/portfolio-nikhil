import { Router } from 'express'
import { healthRouter } from './health.routes.js'
import { projectsRouter } from './projects.routes.js'
import { contactRouter } from './contact.routes.js'
import { resumeRouter } from './resume.routes.js'

export const apiRouter = Router()

apiRouter.use('/health', healthRouter)
apiRouter.use('/projects', projectsRouter)
apiRouter.use('/contact', contactRouter)
apiRouter.use('/resume', resumeRouter)
