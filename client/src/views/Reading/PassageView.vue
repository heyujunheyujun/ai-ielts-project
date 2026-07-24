<script setup lang="ts">
import { ref, reactive, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getQuestionDetail } from '@/api'
import type { Question } from '@/types'

const route = useRoute()
const question = ref<Question | null>(null)
const loading = ref(true)
const showAnswer = ref(false)
const answerMap = reactive<Record<number, string>>({})

// Initialize answerMap when question loads
watch(question, (q) => {
  if (q) {
    q.questions.forEach((_, i) => {
      if (!(i in answerMap)) answerMap[i] = ''
    })
  }
})

onMounted(async () => {
  const id = route.params.id as string
  question.value = await getQuestionDetail(id, true)
  loading.value = false
})

function toggleAnswer() {
  showAnswer.value = !showAnswer.value
}

function getAnswerClass(index: number): string {
  if (!showAnswer.value || !question.value) return ''
  const sub = question.value.questions[index]
  const userAns = answerMap[index]
  return userAns === sub.correctAnswer ? 'correct' : 'wrong'
}
</script>

<template>
  <div class="passage-view">
    <van-nav-bar title="Reading" left-text="Back" left-arrow fixed placeholder @click-left="$router.back()" />
    <van-skeleton title :row="5" :loading="loading">
      <div v-if="question" class="content">
        <!-- Passage -->
        <div class="passage-card">
          <div class="passage-text" v-html="question.passage"></div>
        </div>

        <!-- Questions -->
        <div class="questions-section">
          <h3 class="section-title">Questions</h3>
          <div
            v-for="(q, index) in question.questions"
            :key="index"
            class="question-item"
            :class="getAnswerClass(index)"
          >
            <div class="question-stem">
              <span class="q-number">{{ q.number }}.</span>
              {{ q.stem }}
            </div>

            <!-- Options (multiple choice / TFNG) -->
            <van-radio-group v-if="q.options?.length" v-model="answerMap[index]" direction="horizontal">
              <van-radio
                v-for="(opt, oi) in q.options"
                :key="oi"
                :name="opt"
                :disabled="showAnswer"
              >
                {{ opt }}
              </van-radio>
            </van-radio-group>

            <!-- Fill blank -->
            <van-field
              v-else
              v-model="answerMap[index]"
              placeholder="Type your answer"
              :disabled="showAnswer"
            />

            <!-- Answer & Explanation (revealed) -->
            <div v-if="showAnswer" class="answer-reveal">
              <div class="correct-answer">
                Answer: <strong>{{ q.correctAnswer }}</strong>
              </div>
              <div class="explanation">{{ q.explanation }}</div>
            </div>
          </div>
        </div>

        <!-- Answer Button -->
        <div class="bottom-bar">
          <van-button
            type="primary"
            size="large"
            @click="toggleAnswer"
          >
            {{ showAnswer ? 'Hide Answers' : 'Show Answers' }}
          </van-button>
        </div>
      </div>
    </van-skeleton>
  </div>
</template>

<style scoped>
.passage-view { min-height: 100%; }
.content { padding: 12px; padding-bottom: 120px; }

.passage-card {
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}
.passage-text {
  font-size: 15px;
  line-height: 1.8;
}
.passage-text :deep(p) { margin-bottom: 8px; }

.section-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
}

.question-item {
  background: #fff;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 10px;
}
.question-item.correct {
  border-left: 3px solid #4caf50;
}
.question-item.wrong {
  border-left: 3px solid #f44336;
}
.q-number { font-weight: 600; color: #4caf50; margin-right: 4px; }
.question-stem { font-size: 14px; line-height: 1.6; margin-bottom: 8px; }

.answer-reveal {
  margin-top: 8px;
  padding: 10px;
  background: #f0f9f0;
  border-radius: 6px;
}
.correct-answer { color: #2e7d32; font-size: 14px; margin-bottom: 4px; }
.explanation { color: #666; font-size: 13px; line-height: 1.5; }

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
