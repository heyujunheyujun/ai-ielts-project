<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { getQuestions, getSpeakingFeedback } from '@/api'
import type { Question, SpeakingFeedback } from '@/types'

const questions = ref<Question[]>([])
const currentIndex = ref(0)
const loading = ref(true)
const showSample = ref(false)
const isRecording = ref(false)
const recordedAudioUrl = ref<string | null>(null)
const micAvailable = ref(true)
const textAnswer = ref('')
const aiLoading = ref(false)
const aiFeedback = ref<SpeakingFeedback | null>(null)
let mediaRecorder: MediaRecorder | null = null
let audioChunks: Blob[] = []

const hasMultiple = computed(() => questions.value.length > 1)

onMounted(async () => {
  loading.value = true
  const all = await getQuestions('speaking')
  questions.value = all.filter(q => q.part === 3)
  loading.value = false
  // Check mic availability
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    stream.getTracks().forEach(t => t.stop())
    micAvailable.value = true
  } catch {
    micAvailable.value = false
  }
})

function prevQuestion() {
  if (questions.value.length > 1) {
    if (recordedAudioUrl.value) {
      URL.revokeObjectURL(recordedAudioUrl.value)
      recordedAudioUrl.value = null
    }
    textAnswer.value = ''
    aiFeedback.value = null
    showSample.value = false
    currentIndex.value = (currentIndex.value - 1 + questions.value.length) % questions.value.length
  }
}

function nextQuestion() {
  if (questions.value.length > 1) {
    if (recordedAudioUrl.value) {
      URL.revokeObjectURL(recordedAudioUrl.value)
      recordedAudioUrl.value = null
    }
    textAnswer.value = ''
    aiFeedback.value = null
    showSample.value = false
    currentIndex.value = (currentIndex.value + 1) % questions.value.length
  }
}

async function evaluateAnswer() {
  if (!textAnswer.value.trim() || !questions.value[currentIndex.value]) return
  aiLoading.value = true
  aiFeedback.value = null
  const q = questions.value[currentIndex.value]
  const topic = q.questionType + ': ' + q.questions.map(s => s.stem).join('; ')
  const result = await getSpeakingFeedback(topic, textAnswer.value, 3)
  aiFeedback.value = result
  aiLoading.value = false
}

async function toggleRecording() {
  if (isRecording.value) {
    mediaRecorder?.stop()
    return
  }
  if (recordedAudioUrl.value) {
    URL.revokeObjectURL(recordedAudioUrl.value)
    recordedAudioUrl.value = null
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    audioChunks = []
    mediaRecorder = new MediaRecorder(stream)
    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) audioChunks.push(e.data)
    }
    mediaRecorder.onstop = () => {
      stream.getTracks().forEach(t => t.stop())
      const blob = new Blob(audioChunks, { type: 'audio/webm' })
      recordedAudioUrl.value = URL.createObjectURL(blob)
      isRecording.value = false
    }
    mediaRecorder.start()
    isRecording.value = true
  } catch (err) {
    console.error('Microphone access denied:', err)
    micAvailable.value = false
  }
}
</script>

<template>
  <div class="part3-page">
    <van-nav-bar title="Part 3 - Discussion" left-text="Back" left-arrow fixed placeholder @click-left="$router.back()" />

    <div class="content">
      <van-skeleton title :row="3" :loading="loading">
        <div v-if="questions.length > 0" class="practice-area">
          <div class="progress-bar">
            <span class="progress-text">{{ currentIndex + 1 }} / {{ questions.length }}</span>
          </div>

          <div class="question-card">
            <van-tag type="primary" size="medium">{{ questions[currentIndex]?.questionType }}</van-tag>
            <div class="questions-list">
              <p v-for="(q, i) in questions[currentIndex]?.questions" :key="i" class="q-item">
                <strong>{{ q.number }}.</strong> {{ q.stem }}
              </p>
            </div>
          </div>

          <!-- Recording Controls -->
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
              {{ isRecording ? '🔴 Recording...' : recordedAudioUrl ? 'Recording saved ✓' : 'Tap to record' }}
            </p>
          </div>

          <!-- Playback -->
          <div v-if="recordedAudioUrl && !isRecording" class="playback-area">
            <p class="playback-label">🔊 Your Recording</p>
            <audio :src="recordedAudioUrl" controls style="width:100%"></audio>
          </div>

          <!-- Text Answer Area -->
          <div class="text-answer-area">
            <p class="text-hint">{{ micAvailable ? 'Type what you said (or plan to say):' : '🎤 Mic not available — type your answer:' }}</p>
            <van-field
              v-model="textAnswer"
              type="textarea"
              rows="4"
              placeholder="Type your spoken answer here..."
              autosize
            />
          </div>

          <div class="action-buttons">
            <van-button
              type="warning"
              block
              :loading="aiLoading"
              :disabled="!textAnswer.trim()"
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
            <h4>Sample Points</h4>
            <div class="sample-text">{{ questions[currentIndex]?.sampleAnswer }}</div>
          </div>
        </div>
        <van-empty v-else description="No questions available" />
      </van-skeleton>
    </div>
  </div>
</template>

<style scoped>
.part3-page { min-height: 100%; }
.content { padding: 12px; }

.progress-bar { text-align: center; margin-bottom: 10px; }
.progress-text { font-size: 13px; color: #999; }

.question-card { background: #fff; border-radius: 10px; padding: 16px; margin-bottom: 16px; }
.q-item { font-size: 15px; line-height: 1.7; margin-top: 10px; color: #333; }

.recording-area { text-align: center; padding: 24px 0; }
.recording-hint { margin-top: 12px; font-size: 13px; color: #999; }
.playback-area { margin-bottom: 16px; padding: 12px; background: #e8f5e9; border-radius: 8px; border: 1px solid #4caf50; }
.playback-label { font-size: 13px; font-weight: 600; color: #2e7d32; margin-bottom: 6px; }
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
