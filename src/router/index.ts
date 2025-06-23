import { createRouter, createWebHistory } from 'vue-router'
import { encodeURIStep, steps } from '/@/data/trip'

import PortfolioView from '/@/views/PortfolioView.vue'
import TripView from '/@/views/TripView.vue'
import { TripRoute, PortfolioRoute } from '/@/data/globals'

const defaultTripPath = `/${TripRoute}/${encodeURIStep(steps[0])}`

const routes = [
  { path: '/', redirect: `/${PortfolioRoute}` },
  { path: `/${PortfolioRoute}`, component: PortfolioView },
  { path: `/${TripRoute}`, redirect: () => defaultTripPath },
  {
    path: `/${TripRoute}/:id`,
    component: TripView
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
