/**
 * OpenAI Whisper API Service
 *
 * Transcribes audio to text using the Whisper speech-to-text model.
 * Set OPENAI_API_KEY in your environment variables or .env file.
 */

import dotenv from 'dotenv'
dotenv.config()

const WHISPER_API_URL = 'https://api.openai.com/v1/audio/transcriptions'
const WHISPER_MODEL = 'whisper-1'

function getApiKey(): string {
  return process.env.OPENAI_API_KEY || ''
}

/**
 * Transcribe an audio buffer to English text.
 * @param audioBuffer - The audio file as a Buffer
 * @param mimeType   - MIME type of the audio (e.g. 'audio/webm', 'audio/mp4')
 * @returns The transcribed text
 */
export async function transcribeAudio(
  audioBuffer: Buffer,
  mimeType: string
): Promise<string> {
  const apiKey = getApiKey()
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY environment variable is not set')
  }

  // Normalize MIME type to a file extension Whisper understands
  const extension = mimeTypeToExtension(mimeType)

  const formData = new FormData()
  const blob = new Blob([audioBuffer], { type: mimeType })
  formData.append('file', blob, `recording.${extension}`)
  formData.append('model', WHISPER_MODEL)
  formData.append('language', 'en')
  formData.append('response_format', 'text')

  const response = await fetch(WHISPER_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`
    },
    body: formData
  })

  if (!response.ok) {
    const errText = await response.text()
    throw new Error(`Whisper API error (${response.status}): ${errText}`)
  }

  const text = await response.text()
  return text.trim()
}

/** Map a MIME type to a file extension the Whisper API accepts. */
function mimeTypeToExtension(mimeType: string): string {
  if (mimeType.includes('webm')) return 'webm'
  if (mimeType.includes('mp4') || mimeType.includes('aac')) return 'mp4'
  if (mimeType.includes('ogg') || mimeType.includes('opus')) return 'ogg'
  if (mimeType.includes('mpeg') || mimeType.includes('mp3')) return 'mp3'
  if (mimeType.includes('wav')) return 'wav'
  return 'webm' // fallback
}
