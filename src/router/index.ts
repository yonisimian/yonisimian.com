import { createRouter, createWebHistory } from 'vue-router'
import { encodeURIStep, steps } from '/@/data/trip'

import PortfolioView from '../views/PortfolioView.vue'
import TheBigTripView from '../views/TheBigTripView.vue'

const defaultTripPath = `/thebigtrip/${encodeURIStep(steps[0])}`

const routes = [
  { path: '/', redirect: '/portfolio' },
  { path: '/portfolio', component: PortfolioView },
  { path: '/thebigtrip', redirect: () => defaultTripPath },
  {
    path: '/thebigtrip/:id',
    component: TheBigTripView
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
