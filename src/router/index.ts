import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: () => import('@/views/home/index.vue')
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('@/views/login/index.vue')
    // },
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: () => import('@/views/register/index.vue')
    // }
  ]
})

export default router