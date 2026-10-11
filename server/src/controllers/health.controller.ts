import type { Request, Response } from 'express'
import { ok } from '../utils/response.js'

export function getHealth(_req: Request, res: Response) {
  res.json(
    ok({
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    }),
  )
}
