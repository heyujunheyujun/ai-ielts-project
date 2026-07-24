/**
 * In-memory data store — replaces MongoDB/Mongoose.
 * All question and test paper data lives in JS arrays.
 */

import { allSections, readingSections, listeningSections, writingTasks, speakingParts } from '../seed/seed-data'
import type { SeedQuestion } from '../seed/seed-data'

// ========== Types (matching what the frontend expects) ==========

export interface StoreQuestion extends SeedQuestion {
  _id: string
  testId: string
}

export interface StoreTestPaper {
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

// ========== Build store ==========

const testPaperId = 'paper-1'

// Assign IDs to all question items
const _questions: StoreQuestion[] = allSections.map((item, i) => ({
  ...item,
  _id: `${item.category}-${i}`,
  testId: testPaperId
}))

// Test paper
const _testPapers: StoreTestPaper[] = [
  {
    _id: testPaperId,
    title: 'Cambridge IELTS Practice Test 1 (General Training)',
    year: 2024,
    category: 'G',
    sections: {
      listening: _questions.filter(q => q.category === 'listening').map(q => q._id),
      reading: _questions.filter(q => q.category === 'reading').map(q => q._id),
      writing: _questions.filter(q => q.category === 'writing').map(q => q._id),
      speaking: _questions.filter(q => q.category === 'speaking').map(q => q._id)
    }
  }
]

console.log(`[store] Loaded ${_questions.length} questions, ${_testPapers.length} test papers.`)
console.log(`[store]   Reading:   ${readingSections.length} sections`)
console.log(`[store]   Listening: ${listeningSections.length} sections`)
console.log(`[store]   Writing:   ${writingTasks.length} tasks`)
console.log(`[store]   Speaking:  ${speakingParts.length} parts`)

// ========== Query Functions ==========

/** Strip answers from a question (unless reveal=true) */
function stripAnswers<T extends { questions: any[] }>(q: T): T {
  return {
    ...q,
    questions: q.questions.map(sub => ({
      ...sub,
      correctAnswer: undefined,
      explanation: undefined
    }))
  }
}

export function getTestPapers(): StoreTestPaper[] {
  return _testPapers
}

export function getTestPaperById(id: string): StoreTestPaper | undefined {
  return _testPapers.find(p => p._id === id)
}

export function getQuestions(category?: string, testId?: string): StoreQuestion[] {
  let result = _questions
  if (category) {
    result = result.filter(q => q.category === category)
  }
  if (testId) {
    result = result.filter(q => q.testId === testId)
  }
  // Never return answers in list view
  return result.map(stripAnswers)
}

export function getQuestionById(id: string, reveal = false): StoreQuestion | undefined {
  const q = _questions.find(q => q._id === id)
  if (!q) return undefined
  return reveal ? q : stripAnswers(q)
}
