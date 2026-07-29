/**
 * DeepSeek Chat API Service
 *
 * Uses the OpenAI-compatible chat completions endpoint.
 * Set DEEPSEEK_API_KEY in your environment variables or .env file.
 */

import dotenv from 'dotenv'
dotenv.config()

const DEEPSEEK_BASE_URL = 'https://api.deepseek.com/v1'
const DEEPSEEK_MODEL = 'deepseek-chat'

function getApiKey(): string {
  return process.env.DEEPSEEK_API_KEY || ''
}

async function chat(messages: Array<{ role: string; content: string }>): Promise<string> {
  const apiKey = getApiKey()
  if (!apiKey) {
    throw new Error('DEEPSEEK_API_KEY environment variable is not set')
  }

  const response = await fetch(`${DEEPSEEK_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: DEEPSEEK_MODEL,
      messages,
      temperature: 0.2,
      max_tokens: 2048
    })
  })

  if (!response.ok) {
    const errText = await response.text()
    throw new Error(`DeepSeek API error (${response.status}): ${errText}`)
  }

  const data: any = await response.json()
  return data.choices?.[0]?.message?.content || ''
}

// ========== Writing Feedback ==========

export async function getWritingFeedback(
  prompt: string,
  essay: string,
  taskType: number
): Promise<{
  score: number
  taskResponse: string
  coherence: string
  lexicalResource: string
  grammar: string
  overallComment: string
  correctedVersion?: string
}> {
  const systemPrompt = `你是一名雅思写作考官。请按照雅思官方四项评分标准评估以下Task ${taskType}作文，并用中文给出反馈。

返回格式必须为严格的JSON：
{
  "score": 数字(0-9,可保留0.5),
  "taskResponse": "任务回应评价(中文)",
  "coherence": "连贯与衔接评价(中文)",
  "lexicalResource": "词汇资源评价(中文)",
  "grammar": "语法范围与准确性评价(中文)",
  "overallComment": "总体评价和改进建议(中文)",
  "correctedVersion": "润色后的版本(可选)"
}`

  const userMessage = `题目：${prompt}\n\n学生作文：\n${essay}`

  try {
    const result = await chat([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userMessage }
    ])
    // Extract JSON from response (may be wrapped in markdown code block)
    const jsonMatch = result.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0])
    }
    throw new Error('Failed to parse AI response')
  } catch (err: any) {
    console.error('DeepSeek writing feedback error:', err.message)
    throw err
  }
}

// ========== Speaking Feedback ==========

export async function getSpeakingFeedback(
  topic: string,
  transcript: string,
  part: number
): Promise<{
  fluency: string
  vocabulary: string
  grammar: string
  pronunciation: string
  overallComment: string
  correctedVersion?: string
}> {
  const systemPrompt = `你是一名雅思口语考官。请根据以下口语Part ${part}的转写文本，按雅思口语四项评分标准用中文给出反馈。

IMPORTANT: You MUST evaluate ONLY the actual transcript provided by the student. Do NOT fabricate, imagine, or fill in missing content. If the transcript is too short (less than ~15 characters), nonsensical, or does not contain a meaningful English spoken answer, you MUST return the following error JSON instead of an evaluation:
{ "error": "输入内容不足或无效，无法进行评价。请提供完整的口语回答文本。" }

Otherwise, if the transcript is valid, return the evaluation in this exact JSON format:
{
  "fluency": "流利度与连贯性评价（中文）",
  "vocabulary": "词汇资源评价（中文）",
  "grammar": "语法范围与准确性评价（中文）",
  "pronunciation": "发音评价（中文，基于文本推测）",
  "overallComment": "总体评价和改进建议（中文）",
  "correctedVersion": "润色改进后的版本——修正语法错误，升级词汇，使表达更地道自然，保持原意不变"
}`

  const userMessage = `话题：${topic}\n\n学生口语转写：\n${transcript}`

  try {
    const result = await chat([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userMessage }
    ])
    const jsonMatch = result.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0])
      if (parsed.error) {
        throw new Error(parsed.error)
      }
      return parsed
    }
    throw new Error('Failed to parse AI response')
  } catch (err: any) {
    console.error('DeepSeek speaking feedback error:', err.message)
    throw err
  }
}

// ========== Generate Explanation ==========

export async function generateExplanation(
  questionStem: string,
  correctAnswer: string,
  questionType: string
): Promise<string> {
  const systemPrompt = `你是一名雅思辅导老师。请为以下题目生成简洁的中文答案解析（100字以内），说明为什么正确答案是"${correctAnswer}"。`

  const userMessage = `题型：${questionType}\n题目：${questionStem}\n正确答案：${correctAnswer}`

  try {
    const result = await chat([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userMessage }
    ])
    return result.trim()
  } catch (err: any) {
    console.error('DeepSeek explanation error:', err.message)
    throw err
  }
}
