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

    // Validate transcript has meaningful content (not just numbers/symbols)
    const MIN_TRANSCRIPT_LENGTH = 15
    if (transcript.trim().length < MIN_TRANSCRIPT_LENGTH) {
      return res.status(400).json({
        success: false,
        error: `Transcript is too short (minimum ${MIN_TRANSCRIPT_LENGTH} characters). Please provide your full spoken answer.`
      })
    }
    // Check that transcript contains at least some alphabetic content
    if (!/[a-zA-Z]/.test(transcript)) {
      return res.status(400).json({
        success: false,
        error: 'Transcript must contain actual English words. Please type your spoken answer.'
      })
    }

    const feedback = await getSpeakingFeedback(topic, transcript, part || 1)
    res.json({ success: true, data: feedback })
  } catch (err: any) {
    console.error('Speaking feedback error:', err.message)
    // Distinguish AI-detected invalid input from real server errors
    const isInputError = err.message?.includes('输入内容不足') || err.message?.includes('无效')
    res.status(isInputError ? 400 : 500).json({ success: false, error: err.message })
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
