import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/domains/auth/pages/LoginPage.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/domains/dashboard/pages/DashboardPage.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/landing_page.vue')
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

export default router
