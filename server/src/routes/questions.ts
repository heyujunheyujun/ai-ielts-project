import { Router, Request, Response } from 'express'
import { getQuestions, getQuestionById } from '../data/store'

const router = Router()

// GET /api/questions?category=&testId=
router.get('/', (req: Request, res: Response) => {
  const { category, testId } = req.query
  const questions = getQuestions(
    category as string | undefined,
    testId as string | undefined
  )
  res.json({ success: true, data: questions })
})

// GET /api/questions/:id?reveal=true
router.get('/:id', (req: Request, res: Response) => {
  const reveal = req.query.reveal === 'true'
  const question = getQuestionById(req.params.id, reveal)
  if (!question) {
    return res.status(404).json({ success: false, error: 'Question not found' })
  }
  res.json({ success: true, data: question })
})

export default router
