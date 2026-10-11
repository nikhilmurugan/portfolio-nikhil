import { Router } from 'express'
import { getResume } from '../controllers/resume.controller.js'

export const resumeRouter = Router()
resumeRouter.get('/', getResume)
