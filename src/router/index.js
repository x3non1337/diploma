import { createRouter, createWebHistory } from 'vue-router'
import MenuPage from '../pages/MenuPage'

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: MenuPage,
  },
  {
    path: '/exercise',
    name: 'FirstExercise',
    component: () => import(/* webpackChunkName: "about" */ '../pages/FirstExercisePage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
