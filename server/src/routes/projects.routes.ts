import { Router } from 'express'
import { getProjects } from '../controllers/project.controller.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const projectsRouter = Router()
projectsRouter.get('/', asyncHandler(getProjects))
