import { createRouter, createWebHistory } from 'vue-router'

import PortfolioView from '../views/PortfolioView.vue'
import TheBigTripView from '../views/TheBigTripView.vue'

const routes = [
  { path: '/', redirect: '/portfolio' },
  { path: '/portfolio', component: PortfolioView },
  {
    path: '/thebigtrip/:id',
    component: TheBigTripView
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
