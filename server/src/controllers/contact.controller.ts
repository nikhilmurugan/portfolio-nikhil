import type { Request, Response } from 'express'
import { ok } from '../utils/response.js'
import { enqueueContactPlaceholder } from '../services/contact.service.js'

export async function postContact(req: Request, res: Response) {
  const result = await enqueueContactPlaceholder(req.body)
  res.status(202).json(ok(result, 'Contact endpoint placeholder'))
}
