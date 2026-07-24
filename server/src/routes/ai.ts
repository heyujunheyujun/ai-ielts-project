import { Router, Request, Response } from 'express'
import {
  getWritingFeedback,
  getSpeakingFeedback,
  generateExplanation
} from '../services/deepseek'

const router = Router()

// POST /api/ai/writing-feedback
router.post('/writing-feedback', async (req: Request, res: Response) => {
  try {
    const { prompt, essay, taskType } = req.body

    if (!prompt || !essay) {
      return res.status(400).json({ success: false, error: 'prompt and essay are required' })
    }

    const feedback = await getWritingFeedback(prompt, essay, taskType || 2)
    res.json({ success: true, data: feedback })
  } catch (err: any) {
    console.error('Writing feedback error:', err.message)
    res.status(500).json({ success: false, error: err.message })
  }
})

// POST /api/ai/speaking-feedback
router.post('/speaking-feedback', async (req: Request, res: Response) => {
  try {
    const { topic, transcript, part } = req.body

    if (!topic || !transcript) {
      return res.status(400).json({ success: false, error: 'topic and transcript are required' })
    }

    const feedback = await getSpeakingFeedback(topic, transcript, part || 1)
    res.json({ success: true, data: feedback })
  } catch (err: any) {
    console.error('Speaking feedback error:', err.message)
    res.status(500).json({ success: false, error: err.message })
  }
})

// POST /api/ai/generate-explanation
router.post('/generate-explanation', async (req: Request, res: Response) => {
  try {
    const { questionStem, correctAnswer, questionType } = req.body

    if (!questionStem || !correctAnswer) {
      return res.status(400).json({
        success: false,
        error: 'questionStem and correctAnswer are required'
      })
    }

    const explanation = await generateExplanation(
      questionStem,
      correctAnswer,
      questionType || 'multiple-choice'
    )
    res.json({ success: true, data: { explanation } })
  } catch (err: any) {
    console.error('Generate explanation error:', err.message)
    res.status(500).json({ success: false, error: err.message })
  }
})

export default router
