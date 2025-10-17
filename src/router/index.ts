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
        path: 'category/:id',
        component: () => import('@/views/Category/index.vue')
      },
      {
        path: 'category/sub/:id',
        component: () => import('@/views/SubCategory/index.vue')
      },
      {
        path: 'detail/:id',
        component: () => import('@/views/Detail/index.vue')
      },
      {
        path: 'cartlist',
        component: () => import('@/views/CartList/index.vue')
      },
      {
        path: 'checkout',
        component: () => import('@/views/Checkout/index.vue')
      },
      {
        path: 'pay',
        component: () => import('@/views/Pay/index.vue')
      },
      {
        path: 'paycallback',
        component: () => import('@/views/Pay/PayBack.vue')
      },
      {
        path: 'member',
        component: () => import('@/views/Member/index.vue'),
        children: [
          {
            path: '',
            component: () => import('@/views/Member/components/UserInfo.vue')
          },
          {
            path: 'order',
            component: () => import('@/views/Member/components/UserOrder.vue')
          }
        ]
      }
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