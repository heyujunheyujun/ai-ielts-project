import { Router, Request, Response } from 'express'
import { getTestPapers, getTestPaperById } from '../data/store'

const router = Router()

// GET /api/testpapers
router.get('/', (_req: Request, res: Response) => {
  const papers = getTestPapers()
  res.json({ success: true, data: papers })
})

// GET /api/testpapers/:id
router.get('/:id', (req: Request, res: Response) => {
  const paper = getTestPaperById(req.params.id)
  if (!paper) {
    return res.status(404).json({ success: false, error: 'Test paper not found' })
  }
  res.json({ success: true, data: paper })
})

export default router
