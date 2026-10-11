import type { NextFunction, Request, Response } from 'express'

export function notFound(_req: Request, res: Response) {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  })
}

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  console.error(err)
  res.status(500).json({
    success: false,
    message: envSafeMessage(err),
  })
}

function envSafeMessage(err: Error) {
  return process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message
}
