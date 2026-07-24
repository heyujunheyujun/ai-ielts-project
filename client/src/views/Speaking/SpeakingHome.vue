<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="speaking-home">
    <van-nav-bar title="Speaking" fixed placeholder />
    <div class="content">
      <!-- Part 1 -->
      <div class="part-card" @click="router.push('/speaking/part1')">
        <van-icon name="chat-o" size="24" color="#4caf50" />
        <div class="part-info">
          <h3>Part 1 — Interview</h3>
          <p>Basic topics: introduction, family, work, studies</p>
          <van-tag type="primary" size="small">4-5 mins</van-tag>
        </div>
        <van-icon name="arrow" />
      </div>

      <!-- Part 2 -->
      <div class="part-card" @click="router.push('/speaking/part2')">
        <van-icon name="description" size="24" color="#ff9800" />
        <div class="part-info">
          <h3>Part 2 — Cue Card</h3>
          <p>1 min preparation + 2 min talk</p>
          <van-tag type="warning" size="small">3-4 mins</van-tag>
        </div>
        <van-icon name="arrow" />
      </div>

      <!-- Part 3 -->
      <div class="part-card" @click="router.push('/speaking/part3')">
        <van-icon name="comment-circle-o" size="24" color="#2196f3" />
        <div class="part-info">
          <h3>Part 3 — Discussion</h3>
          <p>Extended discussion based on Part 2 topic</p>
          <van-tag type="primary" size="small">4-5 mins</van-tag>
        </div>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.speaking-home { min-height: 100%; }
.content { padding: 12px; }

.part-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #fff;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 12px;
  cursor: pointer;
}
.part-card:active { background: #f5f5f5; }

.part-info { flex: 1; }
.part-info h3 { font-size: 15px; font-weight: 600; margin-bottom: 4px; }
.part-info p { font-size: 13px; color: #888; margin-bottom: 6px; }
</style>
