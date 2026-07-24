<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const active = ref(2) // default to reading tab

const tabs = [
  { name: 'speaking', label: 'Speaking', icon: 'comment-o' },
  { name: 'writing', label: 'Writing', icon: 'edit' },
  { name: 'reading', label: 'Reading', icon: 'bookmark-o' },
  { name: 'listening', label: 'Listening', icon: 'music-o' }
]

const tabIndex: Record<string, number> = {
  speaking: 0,
  writing: 1,
  reading: 2,
  listening: 3
}

// Sync tab with current route
watch(
  () => route.path,
  (path) => {
    for (const tab of tabs) {
      if (path.startsWith(`/${tab.name}`)) {
        active.value = tabIndex[tab.name]
        return
      }
    }
  },
  { immediate: true }
)

function onTabChange(index: number) {
  const tab = tabs[index]
  if (tab) {
    router.push(`/${tab.name}`)
  }
}
</script>

<template>
  <div class="app-container">
    <div class="page-content">
      <router-view />
    </div>
    <van-tabbar
      v-model="active"
      :fixed="true"
      :safe-area-inset-bottom="true"
      active-color="#4caf50"
      @change="onTabChange"
    >
      <van-tabbar-item
        v-for="(tab, index) in tabs"
        :key="tab.name"
        :icon="tab.icon"
      >
        {{ tab.label }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background-color: #f7f8fa;
  -webkit-font-smoothing: antialiased;
}

.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 480px;
  margin: 0 auto;
}

.page-content {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 50px; /* space for tabbar */
}
</style>
