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
  questions.value = await getQuestions('listening')
  loading.value = false
})

function openPlayer(id: string) {
  router.push(`/listening/${id}`)
}
</script>

<template>
  <div class="listening-home">
    <van-nav-bar title="Listening" fixed placeholder />
    <div class="content">
      <van-skeleton title :row="3" :loading="loading">
        <van-cell-group inset title="Listening Practice">
          <van-cell
            v-for="q in questions"
            :key="q._id"
            :title="`Section ${q.section}`"
            :label="q.questions?.length + ' questions'"
            is-link
            @click="openPlayer(q._id)"
          />
        </van-cell-group>
      </van-skeleton>
      <van-empty v-if="!loading && questions.length === 0" description="No listening questions" />
    </div>
  </div>
</template>

<style scoped>
.listening-home { min-height: 100%; }
.content { padding: 12px; }
</style>
