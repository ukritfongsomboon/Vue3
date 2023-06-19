import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/views/Home.vue'

const routes = [
  {
    path: '/home',
    component: Homepage,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes: routes,
})
