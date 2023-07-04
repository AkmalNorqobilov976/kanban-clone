import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '@/layouts/Layout.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DefaultLayout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        }
      ]
    },
  ]
})

export default router
