<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getQuestionDetail, getWritingFeedback } from '@/api'
import type { Question, WritingFeedback } from '@/types'

const route = useRoute()
const router = useRouter()

const question = ref<Question | null>(null)
const loading = ref(true)
const essay = ref('')
const showSample = ref(false)
const aiLoading = ref(false)
const feedback = ref<WritingFeedback | null>(null)

const wordCount = computed(() => {
  const text = essay.value.trim()
  return text ? text.split(/\s+/).length : 0
})

onMounted(async () => {
  if (route.params.id) {
    question.value = await getQuestionDetail(route.params.id as string)
  }
  loading.value = false
})

async function submitForFeedback() {
  if (!question.value || !essay.value.trim()) return
  aiLoading.value = true
  feedback.value = await getWritingFeedback(
    question.value.writingPrompt || '',
    essay.value,
    2
  )
  aiLoading.value = false
  if (feedback.value) {
    router.push('/writing/result')
  }
}
</script>

<template>
  <div class="task2-page">
    <van-nav-bar title="Task 2 - Essay" left-text="Back" left-arrow fixed placeholder @click-left="$router.back()" />

    <div class="content">
      <van-skeleton title :row="3" :loading="loading">
        <div v-if="question" class="task-content">
          <div class="prompt-card">
            <van-tag type="warning" size="medium">{{ question.questionType }}</van-tag>
            <div class="prompt-text">{{ question.writingPrompt }}</div>
          </div>

          <div class="writing-area">
            <div class="word-count" :class="{ 'min-reached': wordCount >= 250 }">
              Words: {{ wordCount }} / 250 (min)
            </div>
            <van-field
              v-model="essay"
              type="textarea"
              rows="15"
              placeholder="Write your essay here... (min 250 words)"
              autosize
            />
          </div>

          <div class="action-buttons">
            <van-button type="default" block @click="showSample = !showSample">
              {{ showSample ? 'Hide Sample' : 'Show Sample' }}
            </van-button>
            <van-button type="primary" block :loading="aiLoading" @click="submitForFeedback">
              AI Feedback
            </van-button>
          </div>

          <div v-if="showSample && question.sampleAnswer" class="sample-card">
            <h4>Sample Essay</h4>
            <div class="sample-text">{{ question.sampleAnswer }}</div>
          </div>
        </div>
      </van-skeleton>
    </div>
  </div>
</template>

<style scoped>
.task2-page { min-height: 100%; }
.content { padding: 12px; }

.prompt-card { background: #fff; border-radius: 8px; padding: 16px; margin-bottom: 12px; }
.prompt-text { margin-top: 8px; font-size: 15px; line-height: 1.7; white-space: pre-wrap; }

.writing-area { background: #fff; border-radius: 8px; padding: 12px; margin-bottom: 12px; }
.word-count { font-size: 13px; color: #999; margin-bottom: 8px; text-align: right; }
.word-count.min-reached { color: #4caf50; }

.action-buttons { display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px; }

.sample-card { background: #f0f9f0; border-radius: 8px; padding: 16px; }
.sample-card h4 { margin-bottom: 8px; color: #2e7d32; }
.sample-text { font-size: 14px; line-height: 1.8; white-space: pre-wrap; }
</style>
