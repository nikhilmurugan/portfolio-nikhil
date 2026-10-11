import type { Request, Response } from 'express'
import { ok } from '../utils/response.js'

export function getResume(_req: Request, res: Response) {
  res.json(
    ok(
      {
        url: '/resume.pdf',
        version: 'placeholder',
      },
      'Resume endpoint placeholder',
    ),
  )
}
