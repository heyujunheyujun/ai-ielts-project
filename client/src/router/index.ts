import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/reading'
    },
    {
      path: '/speaking',
      name: 'speaking',
      component: () => import('@/views/Speaking/SpeakingHome.vue')
    },
    {
      path: '/speaking/part1',
      name: 'speaking-part1',
      component: () => import('@/views/Speaking/Part1Practice.vue')
    },
    {
      path: '/speaking/part2',
      name: 'speaking-part2',
      component: () => import('@/views/Speaking/Part2CueCard.vue')
    },
    {
      path: '/speaking/part3',
      name: 'speaking-part3',
      component: () => import('@/views/Speaking/Part3Discussion.vue')
    },
    {
      path: '/writing',
      name: 'writing',
      component: () => import('@/views/Writing/WritingHome.vue')
    },
    {
      path: '/writing/task1/:id?',
      name: 'writing-task1',
      component: () => import('@/views/Writing/Task1Letter.vue')
    },
    {
      path: '/writing/task2/:id?',
      name: 'writing-task2',
      component: () => import('@/views/Writing/Task2Essay.vue')
    },
    {
      path: '/writing/result',
      name: 'writing-result',
      component: () => import('@/views/Writing/WritingResult.vue')
    },
    {
      path: '/reading',
      name: 'reading',
      component: () => import('@/views/Reading/ReadingHome.vue')
    },
    {
      path: '/reading/:id',
      name: 'reading-passage',
      component: () => import('@/views/Reading/PassageView.vue')
    },
    {
      path: '/listening',
      name: 'listening',
      component: () => import('@/views/Listening/ListeningHome.vue')
    },
    {
      path: '/listening/:id',
      name: 'listening-player',
      component: () => import('@/views/Listening/ListeningPlayer.vue')
    }
  ]
})

export default router
