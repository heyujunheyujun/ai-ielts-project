<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getQuestions } from '@/api'
import type { Question } from '@/types'

const router = useRouter()
const questions = ref<Question[]>([])
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  questions.value = await getQuestions('reading')
  loading.value = false
})

function openPassage(id: string) {
  router.push(`/reading/${id}`)
}

function stripHtml(html?: string): string {
  if (!html) return ''
  const div = document.createElement('div')
  div.innerHTML = html
  return div.textContent || div.innerText || ''
}

function getLabel(q: Question): string {
  const text = stripHtml(q.passage)
  return text.length > 80 ? text.substring(0, 80) + '...' : text
}
</script>

<template>
  <div class="reading-home">
    <van-nav-bar title="Reading" fixed placeholder />
    <div class="content">
      <van-skeleton title :row="3" :loading="loading">
        <van-cell-group inset title="GT Reading Practice">
          <van-cell
            v-for="q in questions"
            :key="q._id"
            :title="`Section ${q.section} - ${q.questionType}`"
            :label="getLabel(q)"
            is-link
            @click="openPassage(q._id)"
          />
        </van-cell-group>
      </van-skeleton>
      <van-empty v-if="!loading && questions.length === 0" description="No reading questions" />
    </div>
  </div>
</template>

<style scoped>
.reading-home {
  min-height: 100%;
}
.content {
  padding: 12px;
}
</style>
