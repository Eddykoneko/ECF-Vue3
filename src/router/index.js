import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import ListView from '../views/ListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list/',
      name: 'Liste',
      component: ListView
      component: () => import('../views/ListView.vue')
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: DetailView
      component: () => import('../views/DetailView.vue')
    },
  ]
})

export default router
