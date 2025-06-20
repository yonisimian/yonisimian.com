import { createRouter, createWebHistory } from 'vue-router'

import StepView from '/@/components/TheBigTrip/StepView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import TheBigTripView from '../views/TheBigTripView.vue'

const routes = [
  { path: '/', redirect: '/portfolio' },
  { path: '/portfolio', component: PortfolioView },
  {
    path: '/thebigtrip',
    component: TheBigTripView,
    children: [{ path: ':id', component: StepView }]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
