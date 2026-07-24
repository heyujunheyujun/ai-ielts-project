<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getQuestions } from '@/api'
import type { Question } from '@/types'

const router = useRouter()
const task1Questions = ref<Question[]>([])
const task2Questions = ref<Question[]>([])
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  const all = await getQuestions('writing')
  task1Questions.value = all.filter(q => q.part === 1)
  task2Questions.value = all.filter(q => q.part === 2)
  loading.value = false
})
</script>

<template>
  <div class="writing-home">
    <van-nav-bar title="Writing" fixed placeholder />
    <div class="content">
      <van-skeleton title :row="3" :loading="loading">
        <!-- Task 1 -->
        <van-cell-group inset title="Task 1 - Letter (GT)">
          <van-cell
            v-for="q in task1Questions"
            :key="q._id"
            :title="q.questionType"
            :label="q.writingPrompt?.substring(0, 60) + '...'"
            is-link
            @click="router.push(`/writing/task1/${q._id}`)"
          />
        </van-cell-group>

        <!-- Task 2 -->
        <van-cell-group inset title="Task 2 - Essay">
          <van-cell
            v-for="q in task2Questions"
            :key="q._id"
            :title="q.questionType"
            :label="q.writingPrompt?.substring(0, 60) + '...'"
            is-link
            @click="router.push(`/writing/task2/${q._id}`)"
          />
        </van-cell-group>
      </van-skeleton>
    </div>
  </div>
</template>

<style scoped>
.writing-home { min-height: 100%; }
.content { padding: 12px; }
</style>
