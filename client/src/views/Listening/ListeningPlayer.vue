<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getQuestionDetail } from '@/api'
import type { Question, UserAnswer } from '@/types'

const route = useRoute()
const question = ref<Question | null>(null)
const loading = ref(true)
const showAnswer = ref(false)
const audioPlayed = ref(false)

// Mock audio state
const hasAudio = ref(false)

onMounted(async () => {
  const id = route.params.id as string
  question.value = await getQuestionDetail(id)
  hasAudio.value = !!question.value?.audioUrl
  loading.value = false
})

function onAudioEnded() {
  audioPlayed.value = true
}

function toggleAnswer() {
  showAnswer.value = !showAnswer.value
}
</script>

<template>
  <div class="listening-player">
    <van-nav-bar title="Listening" left-text="Back" left-arrow fixed placeholder @click-left="$router.back()" />

    <van-skeleton title :row="5" :loading="loading">
      <div v-if="question" class="content">
        <!-- Audio Player -->
        <div class="audio-section">
          <div v-if="hasAudio" class="audio-player">
            <audio
              controls
              @ended="onAudioEnded"
              style="width:100%"
            >
              <source :src="question.audioUrl" type="audio/mpeg" />
            </audio>
          </div>
          <div v-else class="audio-placeholder">
            <van-icon name="music-o" size="32" />
            <p>Audio coming soon</p>
            <van-button size="small" type="primary" plain @click="audioPlayed = true">
              Skip (simulate complete)
            </van-button>
          </div>
        </div>

        <!-- Questions -->
        <div class="questions-section">
          <h3>Section {{ question.section }}</h3>
          <div v-for="(q, index) in question.questions" :key="index" class="question-item">
            <div class="q-stem">
              <span class="q-num">{{ q.number }}.</span> {{ q.stem }}
            </div>

            <van-radio-group v-if="q.options?.length" direction="horizontal">
              <van-radio v-for="(opt, oi) in q.options" :key="oi" :name="opt" :disabled="showAnswer">
                {{ opt }}
              </van-radio>
            </van-radio-group>

            <van-field v-else placeholder="Type answer" :disabled="showAnswer" />

            <div v-if="showAnswer" class="answer-reveal">
              <div class="correct">✓ {{ q.correctAnswer }}</div>
              <div class="explanation">{{ q.explanation }}</div>
            </div>
          </div>
        </div>

        <!-- Transcript (revealed with answer) -->
        <div v-if="showAnswer && question.transcript" class="transcript-section">
          <h4>Transcript</h4>
          <div class="transcript-text">{{ question.transcript }}</div>
        </div>

        <div class="bottom-bar">
          <van-button type="primary" size="large" @click="toggleAnswer">
            {{ showAnswer ? 'Hide Answers' : 'Show Answers' }}
          </van-button>
        </div>
      </div>
    </van-skeleton>
  </div>
</template>

<style scoped>
.listening-player { min-height: 100%; }
.content { padding: 12px; padding-bottom: 120px; }

.audio-section {
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  text-align: center;
}
.audio-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  color: #999;
}
.audio-placeholder p { font-size: 14px; }

.question-item {
  background: #fff;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 10px;
}
.q-num { font-weight: 600; color: #4caf50; }

.answer-reveal {
  margin-top: 8px;
  padding: 10px;
  background: #f0f9f0;
  border-radius: 6px;
}
.correct { color: #2e7d32; font-weight: 600; }
.explanation { color: #666; font-size: 13px; margin-top: 4px; }

.transcript-section {
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
}
.transcript-section h4 { margin-bottom: 8px; }
.transcript-text { font-size: 14px; line-height: 1.8; color: #555; }

.bottom-bar {
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 480px;
  padding: 10px 16px;
  background: #fff;
  box-shadow: 0 -2px 8px rgba(0,0,0,0.08);
}
</style>
