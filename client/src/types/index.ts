// ========== Question Types ==========

export type Category = 'reading' | 'listening' | 'speaking' | 'writing'

export type QuestionType =
  | 'multiple-choice'
  | 'fill-blank'
  | 'true-false-ng'
  | 'matching'
  | 'short-answer'
  | 'map-labeling'

export interface SubQuestion {
  number: number
  type: QuestionType
  stem: string
  options?: string[]
  correctAnswer: string
  explanation: string
}

export interface Question {
  _id: string
  testId: string
  category: Category
  section: number
  part: number
  questionType: string
  passage?: string
  audioUrl?: string
  transcript?: string
  cueCard?: string
  writingPrompt?: string
  questions: SubQuestion[]
  sampleAnswer?: string
  difficulty: 1 | 2 | 3 | 4 | 5
}

// ========== Test Paper Types ==========

export interface TestPaper {
  _id: string
  title: string
  year: number
  category: 'A' | 'G'
  sections: {
    listening: string[]
    reading: string[]
    writing: string[]
    speaking: string[]
  }
}

// ========== Answer Types ==========

export interface UserAnswer {
  questionId: string
  subQuestionIndex: number
  answer: string
}

// ========== AI Feedback Types ==========

export interface WritingFeedback {
  score: number
  taskResponse: string
  coherence: string
  lexicalResource: string
  grammar: string
  overallComment: string
  correctedVersion?: string
}

export interface SpeakingFeedback {
  fluency: string
  vocabulary: string
  grammar: string
  pronunciation: string
  overallComment: string
  correctedVersion?: string
}

export interface SpeechFeedbackResult extends SpeakingFeedback {
  transcript: string
}

// ========== API Response Wrapper ==========

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}
