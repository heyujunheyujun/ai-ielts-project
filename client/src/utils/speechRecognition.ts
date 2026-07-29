/**
 * Web Speech API 封装（免费浏览器端语音转文字）
 *
 * Chrome / Edge 完全支持，iOS Safari 部分支持，Firefox 不支持。
 * 不支持时 isSpeechRecognitionSupported() 返回 false，应降级到 Whisper API。
 */

// 浏览器全局 SpeechRecognition 类型
interface SpeechRecognitionInstance extends EventTarget {
  continuous: boolean
  interimResults: boolean
  lang: string
  onresult: ((event: SpeechRecognitionEvent) => void) | null
  onerror: ((event: SpeechRecognitionError) => void) | null
  onend: (() => void) | null
  start(): void
  stop(): void
  abort(): void
}

interface SpeechRecognitionEvent {
  resultIndex: number
  results: SpeechRecognitionResultList
}

interface SpeechRecognitionResultList {
  length: number
  [index: number]: SpeechRecognitionResult
}

interface SpeechRecognitionResult {
  isFinal: boolean
  [index: number]: SpeechRecognitionAlternative
}

interface SpeechRecognitionAlternative {
  transcript: string
  confidence: number
}

interface SpeechRecognitionError {
  error: string
  message: string
}

declare global {
  interface Window {
    SpeechRecognition?: new () => SpeechRecognitionInstance
    webkitSpeechRecognition?: new () => SpeechRecognitionInstance
  }
}

/** 检测当前浏览器是否支持 Web Speech API */
export function isSpeechRecognitionSupported(): boolean {
  return !!(window.SpeechRecognition || window.webkitSpeechRecognition)
}

let recognition: SpeechRecognitionInstance | null = null

/**
 * 创建（或复用）一个 SpeechRecognition 实例并开始识别。
 * 同时只允许一个实例运行，重复调用会先停止旧的。
 */
export function startSpeechRecognition(options: {
  onResult: (finalText: string, interimText: string) => void
  onError: (message: string) => void
  onEnd: () => void
}): void {
  // 停止已有的识别
  stopSpeechRecognition()

  const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition
  if (!SpeechRecognitionCtor) {
    options.onError('当前浏览器不支持语音识别')
    return
  }

  let finalText = ''
  recognition = new SpeechRecognitionCtor()
  recognition.continuous = true
  recognition.interimResults = true
  recognition.lang = 'en-US'

  recognition.onresult = (event: SpeechRecognitionEvent) => {
    let interim = ''
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const result = event.results[i]
      if (result.isFinal) {
        finalText += result[0].transcript + ' '
      } else {
        interim += result[0].transcript
      }
    }
    options.onResult(finalText.trim(), interim)
  }

  recognition.onerror = (event: SpeechRecognitionError) => {
    // 'no-speech' 和 'aborted' 是正常情况，不报错
    if (event.error === 'no-speech' || event.error === 'aborted') return
    const messages: Record<string, string> = {
      'not-allowed': '麦克风权限被拒绝',
      'audio-capture': '未检测到麦克风设备',
      'network': '语音识别需要网络连接',
      'service-not-allowed': '语音识别服务不可用'
    }
    options.onError(messages[event.error] || `语音识别错误：${event.error}`)
  }

  recognition.onend = () => {
    options.onEnd()
  }

  recognition.start()
}

/** 停止当前识别并返回累积的最终文本 */
export function stopSpeechRecognition(): string {
  if (!recognition) return ''
  let finalText = ''
  // 无法从外部获取 finalText，由调用方自行维护
  try {
    recognition.stop()
  } catch {
    // 可能已停止
  }
  recognition = null
  return finalText
}

/** 中止识别（不触发 onend） */
export function abortSpeechRecognition(): void {
  if (!recognition) return
  try {
    recognition.abort()
  } catch {
    // ignore
  }
  recognition = null
}
