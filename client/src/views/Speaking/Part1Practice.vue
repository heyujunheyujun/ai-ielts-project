<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { getQuestions, getSpeakingFeedback, getSpeechFeedback } from '@/api'
import type { Question, SpeakingFeedback } from '@/types'
import { showToast } from 'vant'
import { getSupportedAudioMimeType, getRecordingErrorMessage } from '@/utils/audio'
import { isSpeechRecognitionSupported, startSpeechRecognition, stopSpeechRecognition, abortSpeechRecognition } from '@/utils/speechRecognition'

const MIN_TRANSCRIPT_CHARS = 15

const questions = ref<Question[]>([])
const currentIndex = ref(0)
const loading = ref(true)
const showSample = ref(false)
const isRecording = ref(false)
const recordedAudioUrl = ref<string | null>(null)
const micAvailable = ref(true)
const textAnswer = ref('')
const aiLoading = ref(false)
const voiceLoading = ref(false)
const aiFeedback = ref<SpeakingFeedback | null>(null)
const speechSupported = ref(false)
const recognizing = ref(false)
let mediaRecorder: MediaRecorder | null = null
let audioChunks: Blob[] = []
let currentAudioBlob: Blob | null = null
let accumulatedTranscript = ''

const hasMultiple = computed(() => questions.value.length > 1)

onMounted(async () => {
  loading.value = true
  const all = await getQuestions('speaking')
  questions.value = all.filter(q => q.part === 1)
  loading.value = false
  // Check mic availability
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    stream.getTracks().forEach(t => t.stop())
    micAvailable.value = true
  } catch {
    micAvailable.value = false
  }
  speechSupported.value = isSpeechRecognitionSupported()
})

function prevQuestion() {
  abortSpeechRecognition()
  recognizing.value = false
  accumulatedTranscript = ''
  if (questions.value.length > 1) {
    if (recordedAudioUrl.value) {
      URL.revokeObjectURL(recordedAudioUrl.value)
      recordedAudioUrl.value = null
    }
    textAnswer.value = ''
    aiFeedback.value = null
    currentIndex.value = (currentIndex.value - 1 + questions.value.length) % questions.value.length
    showSample.value = false
  }
}

function nextQuestion() {
  abortSpeechRecognition()
  recognizing.value = false
  accumulatedTranscript = ''
  if (questions.value.length > 1) {
    if (recordedAudioUrl.value) {
      URL.revokeObjectURL(recordedAudioUrl.value)
      recordedAudioUrl.value = null
    }
    textAnswer.value = ''
    aiFeedback.value = null
    currentIndex.value = (currentIndex.value + 1) % questions.value.length
    showSample.value = false
  }
}

async function evaluateAnswer() {
  if (!textAnswer.value.trim() || !questions.value[currentIndex.value]) return
  if (textAnswer.value.trim().length < MIN_TRANSCRIPT_CHARS) {
    showToast(`Please enter at least ${MIN_TRANSCRIPT_CHARS} characters of your spoken answer before evaluating.`)
    return
  }
  if (!/[a-zA-Z]/.test(textAnswer.value)) {
    showToast('Please enter actual English words (not just numbers or symbols).')
    return
  }
  aiLoading.value = true
  aiFeedback.value = null
  try {
    const q = questions.value[currentIndex.value]
    const topic = q.questionType + ': ' + q.questions.map(s => s.stem).join('; ')
    const result = await getSpeakingFeedback(topic, textAnswer.value, 1)
    aiFeedback.value = result
  } catch (err: any) {
    const msg = err?.response?.data?.error || err?.message || 'Evaluation failed, please try again.'
    showToast(msg)
  } finally {
    aiLoading.value = false
  }
}

async function evaluateVoice() {
  if (!currentAudioBlob || !questions.value[currentIndex.value]) return
  voiceLoading.value = true
  aiFeedback.value = null
  try {
    const q = questions.value[currentIndex.value]
    const topic = q.questionType + ': ' + q.questions.map(s => s.stem).join('; ')
    const result = await getSpeechFeedback(currentAudioBlob, topic, 1)
    if (result) {
      textAnswer.value = result.transcript
      aiFeedback.value = result
    }
  } catch (err: any) {
    const msg = err?.response?.data?.error || err?.message || '语音评价失败，请重试。'
    showToast(msg)
  } finally {
    voiceLoading.value = false
  }
}

async function toggleRecording() {
  if (isRecording.value) {
    mediaRecorder?.stop()
    stopSpeechRecognition()
    recognizing.value = false
    textAnswer.value = accumulatedTranscript
    return
  }
  if (recordedAudioUrl.value) {
    URL.revokeObjectURL(recordedAudioUrl.value)
    recordedAudioUrl.value = null
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    audioChunks = []
    const mimeType = getSupportedAudioMimeType()
    const recorderOptions: MediaRecorderOptions = {}
    if (mimeType) {
      recorderOptions.mimeType = mimeType
    }
    mediaRecorder = new MediaRecorder(stream, recorderOptions)
    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) audioChunks.push(e.data)
    }
    mediaRecorder.onstop = () => {
      stream.getTracks().forEach(t => t.stop())
      const actualType = mediaRecorder?.mimeType || mimeType || 'audio/webm'
      const blob = new Blob(audioChunks, { type: actualType })
      currentAudioBlob = blob
      recordedAudioUrl.value = URL.createObjectURL(blob)
      isRecording.value = false
    }
    mediaRecorder.onerror = () => {
      stream.getTracks().forEach(t => t.stop())
      isRecording.value = false
      showToast('Recording failed. Please try again.')
    }
    mediaRecorder.start()
    isRecording.value = true

    // Start speech recognition alongside recording
    if (speechSupported.value) {
      accumulatedTranscript = ''
      textAnswer.value = ''
      recognizing.value = true
      startSpeechRecognition({
        onResult: (final, interim) => {
          accumulatedTranscript = final
          textAnswer.value = final + (interim ? ' ' + interim : '')
        },
        onError: (msg) => {
          console.warn('Speech recognition:', msg)
        },
        onEnd: () => {
          recognizing.value = false
        }
      })
    }
  } catch (err: any) {
    console.error('Recording error:', err)
    showToast(getRecordingErrorMessage(err))
    isRecording.value = false
    recognizing.value = false
  }
}
</script>

<template>
  <div class="part1-page">
    <van-nav-bar title="Part 1 - Interview" left-text="Back" left-arrow fixed placeholder @click-left="$router.back()" />

    <div class="content">
      <van-skeleton title :row="3" :loading="loading">
        <div v-if="questions.length > 0" class="practice-area">
          <!-- Progress -->
          <div class="progress-bar">
            <span class="progress-text">{{ currentIndex + 1 }} / {{ questions.length }}</span>
          </div>

          <!-- Question Card -->
          <div class="question-card">
            <div class="card-header">
              <van-tag type="primary">{{ questions[currentIndex]?.questionType }}</van-tag>
            </div>
            <div class="card-body">
              <p v-for="(q, i) in questions[currentIndex]?.questions" :key="i" class="question-line">
                <strong>{{ q.number }}.</strong> {{ q.stem }}
              </p>
            </div>
          </div>

          <!-- Recording Controls (mic available) -->
          <div v-if="micAvailable" class="recording-area">
            <van-button
              :type="isRecording ? 'danger' : 'primary'"
              icon="audio"
              round
              size="large"
              @click="toggleRecording"
            >
              {{ isRecording ? 'Stop' : recordedAudioUrl ? 'Re-record' : 'Record' }}
            </van-button>
            <p class="recording-hint">
              <template v-if="isRecording">
                🔴 Recording{{ recognizing ? ' + Transcribing...' : '...' }}
              </template>
              <template v-else-if="recordedAudioUrl">
                Recording saved ✓
              </template>
              <template v-else>
                Tap to record
              </template>
            </p>
          </div>

          <!-- Playback -->
          <div v-if="recordedAudioUrl && !isRecording" class="playback-area">
            <p class="playback-label">🔊 Your Recording</p>
            <audio :src="recordedAudioUrl" controls style="width:100%"></audio>
            <van-button
              v-if="!speechSupported"
              type="success"
              block
              :loading="voiceLoading"
              class="voice-eval-btn"
              @click="evaluateVoice"
            >
              🎙️ AI Voice Evaluate
            </van-button>
            <p v-if="!speechSupported" class="voice-hint">将录音发送给 AI，自动转写并评价</p>
            <p v-else class="voice-hint">转写已自动完成，可在下方编辑后评价</p>
          </div>

          <!-- Text Answer Area -->
          <div class="text-answer-area">
            <p class="text-hint">
              <template v-if="speechSupported && isRecording">
                🎙️ 实时转写中，请说英文...
              </template>
              <template v-else-if="speechSupported && textAnswer">
                ✅ 转写完成，可编辑后评价
              </template>
              <template v-else-if="micAvailable">
                Type what you said (or plan to say):
              </template>
              <template v-else>
                🎤 Mic not available — type your answer:
              </template>
            </p>
            <van-field
              v-model="textAnswer"
              type="textarea"
              rows="4"
              :placeholder="recognizing ? '转写中...' : 'Type your spoken answer here...'"
              autosize
            />
          </div>

          <!-- AI Evaluate -->
          <div class="action-buttons">
            <van-button
              type="warning"
              block
              :loading="aiLoading"
              :disabled="!textAnswer.trim() || textAnswer.trim().length < MIN_TRANSCRIPT_CHARS"
              @click="evaluateAnswer"
            >
              🤖 AI Evaluate
            </van-button>
            <van-button type="default" block @click="showSample = !showSample">
              {{ showSample ? 'Hide Sample' : 'Show Sample' }}
            </van-button>
            <div class="nav-row">
              <van-button type="primary" block :disabled="!hasMultiple" @click="prevQuestion">
                ← Previous
              </van-button>
              <van-button type="primary" block :disabled="!hasMultiple" @click="nextQuestion">
                Next →
              </van-button>
            </div>
          </div>

          <!-- AI Feedback -->
          <div v-if="aiFeedback" class="ai-feedback-card">
            <h4>🤖 AI Evaluation</h4>
            <div class="ai-item"><strong>Fluency:</strong> {{ aiFeedback.fluency }}</div>
            <div class="ai-item"><strong>Vocabulary:</strong> {{ aiFeedback.vocabulary }}</div>
            <div class="ai-item"><strong>Grammar:</strong> {{ aiFeedback.grammar }}</div>
            <div class="ai-item"><strong>Pronunciation:</strong> {{ aiFeedback.pronunciation }}</div>
            <div class="ai-overall">{{ aiFeedback.overallComment }}</div>
            <div v-if="aiFeedback.correctedVersion" class="ai-corrected">
              <strong>✨ Polished Version:</strong>
              <p>{{ aiFeedback.correctedVersion }}</p>
            </div>
          </div>

          <div v-if="showSample && questions[currentIndex]?.sampleAnswer" class="sample-card">
            <h4>Sample Answer</h4>
            <div class="sample-text">{{ questions[currentIndex]?.sampleAnswer }}</div>
          </div>
        </div>
        <van-empty v-else description="No questions available" />
      </van-skeleton>
    </div>
  </div>
</template>

<style scoped>
.part1-page { min-height: 100%; }
.content { padding: 12px; }

.progress-bar { text-align: center; margin-bottom: 10px; }
.progress-text { font-size: 13px; color: #999; }

.question-card { background: #fff; border-radius: 10px; padding: 16px; margin-bottom: 16px; }
.card-header { margin-bottom: 12px; }
.question-line { font-size: 15px; line-height: 1.7; margin-bottom: 8px; color: #333; }

.recording-area { text-align: center; padding: 24px 0; }
.recording-hint { margin-top: 12px; font-size: 13px; color: #999; }
.playback-area { margin-bottom: 16px; padding: 12px; background: #e8f5e9; border-radius: 8px; border: 1px solid #4caf50; }
.playback-label { font-size: 13px; font-weight: 600; color: #2e7d32; margin-bottom: 6px; }
.voice-eval-btn { margin-top: 10px; }
.voice-hint { font-size: 12px; color: #999; text-align: center; margin-top: 6px; }
.text-answer-area { margin-bottom: 16px; }
.text-hint { font-size: 13px; color: #ff9800; margin-bottom: 8px; }

.action-buttons { display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; }
.nav-row { display: flex; gap: 8px; }

.sample-card { background: #f0f9f0; border-radius: 8px; padding: 16px; }
.sample-card h4 { margin-bottom: 8px; color: #2e7d32; }
.sample-text { font-size: 14px; line-height: 1.8; white-space: pre-wrap; }

.ai-feedback-card { background: #fff8e1; border-radius: 8px; padding: 14px; border: 1px solid #ff9800; margin-bottom: 12px; }
.ai-feedback-card h4 { color: #e65100; margin-bottom: 8px; }
.ai-item { font-size: 13px; margin-bottom: 4px; color: #555; }
.ai-overall { font-size: 13px; line-height: 1.6; color: #333; margin-top: 8px; padding-top: 8px; border-top: 1px solid #ffe0b2; }
.ai-corrected { margin-top: 8px; padding: 10px; background: #fff; border-radius: 6px; border: 1px solid #c8e6c9; }
.ai-corrected p { font-size: 13px; line-height: 1.8; color: #2e7d32; margin-top: 4px; white-space: pre-wrap; }
</style>
