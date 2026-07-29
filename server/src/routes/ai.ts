import { Router, Request, Response } from 'express'
import multer from 'multer'
import {
  getWritingFeedback,
  getSpeakingFeedback,
  generateExplanation
} from '../services/deepseek'
import { transcribeAudio } from '../services/whisper'

const router = Router()
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 } // 5 MB max
})

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

// POST /api/ai/speech-feedback (audio upload + transcription + evaluation)
router.post(
  '/speech-feedback',
  upload.single('audio'),
  async (req: Request, res: Response) => {
    try {
      const { topic, part } = req.body
      const audioFile = req.file

      if (!topic) {
        return res.status(400).json({ success: false, error: 'topic is required' })
      }
      if (!audioFile || audioFile.size === 0) {
        return res.status(400).json({ success: false, error: '音频文件缺失或为空，请重新录制。' })
      }

      // Step 1: Transcribe audio to text
      let transcript: string
      try {
        transcript = await transcribeAudio(audioFile.buffer, audioFile.mimetype)
      } catch (whisperErr: any) {
        console.error('Whisper transcription error:', whisperErr.message)
        return res.status(500).json({
          success: false,
          error: '语音转写失败，请确认 OPENAI_API_KEY 已配置且音频清晰可辨。'
        })
      }

      if (!transcript || transcript.trim().length < 5) {
        return res.status(400).json({
          success: false,
          error: '未能从音频中识别到有效英文内容，请重新录制一段清晰的英文回答。'
        })
      }

      // Step 2: Evaluate the transcript with DeepSeek
      const feedback = await getSpeakingFeedback(topic, transcript, Number(part) || 1)

      // Step 3: Return transcript + feedback
      res.json({
        success: true,
        data: {
          transcript,
          ...feedback
        }
      })
    } catch (err: any) {
      console.error('Speech feedback error:', err.message)
      const isInputError =
        err.message?.includes('输入内容不足') || err.message?.includes('无效')
      res.status(isInputError ? 400 : 500).json({ success: false, error: err.message })
    }
  }
)

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
