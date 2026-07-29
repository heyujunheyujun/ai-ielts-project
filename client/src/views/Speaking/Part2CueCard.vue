<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { getQuestions, getSpeakingFeedback } from '@/api'
import type { Question, SpeakingFeedback } from '@/types'
import { showToast } from 'vant'

const MIN_TRANSCRIPT_CHARS = 15

const questions = ref<Question[]>([])
const currentIndex = ref(0)
const loading = ref(true)
const showSample = ref(false)
const recordedAudioUrl = ref<string | null>(null)
const micAvailable = ref(true)
const textAnswer = ref('')
const aiLoading = ref(false)
const aiFeedback = ref<SpeakingFeedback | null>(null)

const hasMultiple = computed(() => questions.value.length > 1)

// Timer states
const phase = ref<'idle' | 'prepare' | 'speak' | 'done'>('idle')
const prepSeconds = ref(60)
const speakSeconds = ref(120)
let timer: ReturnType<typeof setInterval> | null = null

// Recording
let mediaRecorder: MediaRecorder | null = null
let audioChunks: Blob[] = []

onMounted(async () => {
  loading.value = true
  const all = await getQuestions('speaking')
  questions.value = all.filter(q => q.part === 2)
  loading.value = false
  // Check mic
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    stream.getTracks().forEach(t => t.stop())
    micAvailable.value = true
  } catch {
    micAvailable.value = false
  }
})

function startPrepare() {
  phase.value = 'prepare'
  prepSeconds.value = 60
  timer = setInterval(() => {
    prepSeconds.value--
    if (prepSeconds.value <= 0) {
      clearInterval(timer!)
      startSpeaking()
    }
  }, 1000)
}

async function startSpeaking() {
  phase.value = 'speak'
  speakSeconds.value = 120
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
    }
    mediaRecorder.start()
  } catch {
    micAvailable.value = false
  }
  timer = setInterval(() => {
    speakSeconds.value--
    if (speakSeconds.value <= 0) {
      clearInterval(timer!)
      if (mediaRecorder && mediaRecorder.state === 'recording') {
        mediaRecorder.stop()
      }
      phase.value = 'done'
    }
  }, 1000)
}

function reset() {
  if (timer) clearInterval(timer)
  timer = null
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    mediaRecorder.stop()
  }
  if (recordedAudioUrl.value) {
    URL.revokeObjectURL(recordedAudioUrl.value)
    recordedAudioUrl.value = null
  }
  phase.value = 'idle'
  prepSeconds.value = 60
  speakSeconds.value = 120
}

function prevQuestion() {
  if (questions.value.length > 1) {
    reset()
    showSample.value = false
    aiFeedback.value = null
    currentIndex.value = (currentIndex.value - 1 + questions.value.length) % questions.value.length
  }
}

function nextQuestion() {
  if (questions.value.length > 1) {
    reset()
    showSample.value = false
    aiFeedback.value = null
    currentIndex.value = (currentIndex.value + 1) % questions.value.length
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
    const topic = (q.cueCard || q.questionType) + ': ' + q.questions.map(s => s.stem).join('; ')
    const result = await getSpeakingFeedback(topic, textAnswer.value, 2)
    aiFeedback.value = result
  } catch (err: any) {
    const msg = err?.response?.data?.error || err?.message || 'Evaluation failed, please try again.'
    showToast(msg)
  } finally {
    aiLoading.value = false
  }
}
</script>

<template>
  <div class="part2-page">
    <van-nav-bar title="Part 2 - Cue Card" left-text="Back" left-arrow fixed placeholder @click-left="$router.back()" />

    <div class="content">
      <van-skeleton title :row="3" :loading="loading">
        <div v-if="questions.length > 0" class="practice-area">
          <div class="progress-bar">
            <span class="progress-text">{{ currentIndex + 1 }} / {{ questions.length }}</span>
          </div>

          <!-- Cue Card -->
          <div class="cue-card">
            <van-tag type="warning" size="medium">Cue Card</van-tag>
            <div class="cue-text">{{ questions[currentIndex]?.cueCard }}</div>
            <div class="cue-prompts">
              <p>You should say:</p>
              <ul>
                <li v-for="(q, i) in questions[currentIndex]?.questions" :key="i">
                  {{ q.stem }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Timer -->
          <div class="timer-section">
            <div v-if="phase === 'idle'" class="timer-display idle">
              <van-icon name="clock-o" size="20" />
              <span>Prep: 60s | Speak: 120s</span>
            </div>
            <div v-else-if="phase === 'prepare'" class="timer-display prepare">
              <span class="timer-big">{{ prepSeconds }}</span>
              <span>s preparing...</span>
            </div>
            <div v-else-if="phase === 'speak'" class="timer-display speak">
              <span class="timer-big">{{ speakSeconds }}</span>
              <span>s speaking... 🔴</span>
            </div>
            <div v-else class="timer-display done">
              <van-icon name="success" color="#4caf50" size="20" />
              <span>Finished</span>
            </div>
          </div>

          <!-- Playback -->
          <div v-if="recordedAudioUrl && phase === 'done'" class="playback-area">
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

          <!-- Controls -->
          <div class="controls">
            <van-button
              v-if="phase === 'idle'"
              type="primary"
              size="large"
              block
              @click="startPrepare"
            >
              Start (60s prep)
            </van-button>
            <van-button v-else-if="phase !== 'done'" type="danger" size="large" block @click="reset">
              Reset
            </van-button>
            <van-button v-else type="primary" size="large" block @click="reset">
              Restart
            </van-button>
          </div>

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
.part2-page { min-height: 100%; }
.content { padding: 12px; }

.progress-bar { text-align: center; margin-bottom: 10px; }
.progress-text { font-size: 13px; color: #999; }

.cue-card {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  border: 2px solid #ff9800;
  margin-bottom: 16px;
}
.cue-text { font-size: 16px; font-weight: 600; margin: 10px 0; line-height: 1.5; }
.cue-prompts p { font-size: 13px; color: #888; margin-bottom: 6px; }
.cue-prompts li { font-size: 14px; line-height: 1.6; color: #555; margin-left: 16px; }

.timer-section {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  margin-bottom: 16px;
}
.timer-big { font-size: 48px; font-weight: 700; }
.prepare .timer-big { color: #ff9800; }
.speak .timer-big { color: #f44336; }

.playback-area { margin-bottom: 16px; padding: 12px; background: #e8f5e9; border-radius: 8px; border: 1px solid #4caf50; }
.playback-label { font-size: 13px; font-weight: 600; color: #2e7d32; margin-bottom: 6px; }
.text-answer-area { margin-bottom: 16px; }
.text-hint { font-size: 13px; color: #ff9800; margin-bottom: 8px; }

.controls { margin-bottom: 12px; }
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
