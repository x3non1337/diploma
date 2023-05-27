import { createRouter, createWebHistory } from 'vue-router'
import MenuPage from '../pages/MenuPage'
// import LoginPage from "@/pages/LoginPage";

const routes = [
  // {
  //   path: '/',
  //   name: 'login',
  //   component: LoginPage
  // },
  {
    path: '/',
    name: 'Menu',
    component: MenuPage,
  },
  {
    path: '/easy',
    name: 'FirstExercise',
    component: () => import(/* webpackChunkName: "about" */ '../pages/FirstExercisePage.vue'),
  },
  {
    path: '/difficulty',
    name: 'ChooseDifficulty',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Difficulty.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
