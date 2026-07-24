<script setup lang="ts">
// This page receives feedback from the store after AI evaluation
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { WritingFeedback } from '@/types'

const router = useRouter()

// In a real app this would come from a Pinia store
// For now using a placeholder pattern
const feedback = ref<WritingFeedback>({
  score: 6.5,
  taskResponse: 'You addressed all parts of the task with a clear position. Some arguments could be developed more fully with specific examples.',
  coherence: 'The essay is logically organised with clear progression. Consider using a wider range of cohesive devices to link ideas more smoothly.',
  lexicalResource: 'Vocabulary is generally adequate and appropriate. Try to incorporate more academic and topic-specific vocabulary for a higher score.',
  grammar: 'Good control of grammar with a mix of simple and complex sentences. There are occasional errors with articles and prepositions.',
  overallComment: 'This is a solid mid-range essay. To improve further, focus on deepening your arguments with concrete examples, expanding your academic vocabulary, and proofreading for minor grammatical errors.',
  correctedVersion: undefined
})
</script>

<template>
  <div class="result-page">
    <van-nav-bar title="AI Feedback" left-text="Back" left-arrow fixed placeholder @click-left="$router.back()" />

    <div class="content">
      <!-- Overall Score -->
      <div class="score-card">
        <div class="score-circle">
          <span class="score-num">{{ feedback.score }}</span>
          <span class="score-total">/ 9</span>
        </div>
        <div class="score-label">Estimated Band Score</div>
      </div>

      <!-- Detail Cards -->
      <div class="detail-cards">
        <div class="detail-item">
          <h4>📝 Task Response</h4>
          <p>{{ feedback.taskResponse }}</p>
        </div>
        <div class="detail-item">
          <h4>🔗 Coherence & Cohesion</h4>
          <p>{{ feedback.coherence }}</p>
        </div>
        <div class="detail-item">
          <h4>📖 Lexical Resource</h4>
          <p>{{ feedback.lexicalResource }}</p>
        </div>
        <div class="detail-item">
          <h4>✏️ Grammatical Range & Accuracy</h4>
          <p>{{ feedback.grammar }}</p>
        </div>
      </div>

      <!-- Overall Comment -->
      <div class="overall-comment">
        <h4>💡 Overall Comment</h4>
        <p>{{ feedback.overallComment }}</p>
      </div>

      <!-- Corrected Version -->
      <div v-if="feedback.correctedVersion" class="corrected-card">
        <h4>✨ Polished Version</h4>
        <div class="corrected-text">{{ feedback.correctedVersion }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.result-page { min-height: 100%; }
.content { padding: 12px; }

.score-card {
  background: linear-gradient(135deg, #4caf50, #81c784);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  color: #fff;
  margin-bottom: 16px;
}
.score-circle {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
}
.score-num { font-size: 48px; font-weight: 700; }
.score-total { font-size: 20px; opacity: 0.8; }
.score-label { font-size: 14px; opacity: 0.9; margin-top: 4px; }

.detail-cards { display: flex; flex-direction: column; gap: 10px; margin-bottom: 16px; }
.detail-item {
  background: #fff;
  border-radius: 8px;
  padding: 14px;
}
.detail-item h4 { font-size: 14px; margin-bottom: 6px; }
.detail-item p { font-size: 13px; color: #666; line-height: 1.6; }

.overall-comment {
  background: #fff;
  border-radius: 8px;
  padding: 14px;
  margin-bottom: 16px;
}
.overall-comment h4 { font-size: 14px; margin-bottom: 6px; }
.overall-comment p { font-size: 13px; color: #666; line-height: 1.6; }

.corrected-card {
  background: #f0f9f0;
  border-radius: 8px;
  padding: 14px;
}
.corrected-card h4 { margin-bottom: 6px; color: #2e7d32; }
.corrected-text { font-size: 14px; line-height: 1.8; white-space: pre-wrap; }
</style>
