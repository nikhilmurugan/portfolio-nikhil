import { Router } from 'express'
import { postContact } from '../controllers/contact.controller.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const contactRouter = Router()
contactRouter.post('/', asyncHandler(postContact))
