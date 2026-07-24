import axios from 'axios'
import type { ApiResponse, Question, TestPaper, WritingFeedback, SpeakingFeedback } from '@/types'

const http = axios.create({
  baseURL: '/api',
  timeout: 60000
})

// ========== Test Papers ==========

export async function getTestPapers(): Promise<TestPaper[]> {
  const res = await http.get<ApiResponse<TestPaper[]>>('/testpapers')
  return res.data.data || []
}

// ========== Questions ==========

export async function getQuestions(category?: string, testId?: string): Promise<Question[]> {
  const res = await http.get<ApiResponse<Question[]>>('/questions', {
    params: { category, testId }
  })
  return res.data.data || []
}

export async function getQuestionDetail(id: string, reveal = false): Promise<Question | null> {
  const res = await http.get<ApiResponse<Question>>(`/questions/${id}`, {
    params: { reveal }
  })
  return res.data.data || null
}

// ========== AI Endpoints ==========

export async function getWritingFeedback(
  prompt: string,
  essay: string,
  taskType: number
): Promise<WritingFeedback | null> {
  const res = await http.post<ApiResponse<WritingFeedback>>('/ai/writing-feedback', {
    prompt,
    essay,
    taskType
  })
  return res.data.data || null
}

export async function getSpeakingFeedback(
  topic: string,
  transcript: string,
  part: number
): Promise<SpeakingFeedback | null> {
  const res = await http.post<ApiResponse<SpeakingFeedback>>('/ai/speaking-feedback', {
    topic,
    transcript,
    part
  })
  return res.data.data || null
}

export async function generateExplanation(
  questionStem: string,
  correctAnswer: string,
  questionType: string
): Promise<string> {
  const res = await http.post<ApiResponse<{ explanation: string }>>('/ai/generate-explanation', {
    questionStem,
    correctAnswer,
    questionType
  })
  return res.data.data?.explanation || ''
}
