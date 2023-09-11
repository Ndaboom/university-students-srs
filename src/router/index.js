import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: ()=> import('@/views/HomeView.vue').then((m) => m.default || (m)),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import('@/views/DashboardView.vue').then((m) => m.default || (m)),
        }
      ]
    },
  ]
})

export default router
