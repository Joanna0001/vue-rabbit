import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Layout from '@/views/Layout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('@/views/Home/index.vue')
      },
      {
        path: 'category',
        component: () => import('@/views/Category/index.vue')
      },
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router