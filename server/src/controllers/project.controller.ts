import type { Request, Response } from 'express'
import { ok } from '../utils/response.js'
import { listProjectsPlaceholder } from '../services/project.service.js'

export async function getProjects(_req: Request, res: Response) {
  const projects = await listProjectsPlaceholder()
  res.json(ok(projects, 'Projects endpoint placeholder'))
}
