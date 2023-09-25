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
        },
        {
          path: "/add-student",
          name: "add-student",
          component: () => import('@/views/Students/AddNewStudentView.vue').then((m) => m.default || (m)),
        },
        {
          path: "/students",
          name: "students",
          component: () => import('@/views/Students/StudentsView.vue').then((m) => m.default || (m)),
        },
        {
          path: "/add-department",
          name: "add-department",
          component: () => import('@/views/Departments/AddNewDepartmentView.vue').then((m) => m.default || (m)),
        },
        {
          path: "/departments",
          name: "departments",
          component: () => import('@/views/Departments/DepartmentsView.vue').then((m) => m.default || (m)),
        }
      ]
    },
  ]
})

export default router
