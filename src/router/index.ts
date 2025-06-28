import { createRouter, createWebHistory } from 'vue-router'
import { steps } from '/@/data/trip'
import { encodeURIStep } from '/@/functions/trip'
import { TripRoute, PortfolioRoute, CookbookRoute } from '/@/data/globals'
import { startLoadingSpinner, stopLoadingSpinner } from '/@/data/loading'

const defaultTripPath = `/${TripRoute}/${encodeURIStep(steps[0])}`
const isTripRoute = (path: string) => path.startsWith(`/${TripRoute}`)
const getSegments = (path: string) => path.split('/')
const isSameSegment = (path1: string, path2: string) =>
  getSegments(path1)[1] === getSegments(path2)[1]

const routes = [
  { path: '/', redirect: `/${PortfolioRoute}` },
  {
    path: `/${PortfolioRoute}`,
    component: () => import('/@/views/PortfolioView.vue')
  },
  {
    path: `/${TripRoute}`,
    redirect: () => defaultTripPath
  },
  {
    path: `/${TripRoute}/:id`,
    component: () => import('/@/views/TripView.vue')
  },
  {
    path: `/${CookbookRoute}`,
    component: () => import('/@/views/CookbookView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (isTripRoute(to.fullPath) && to.fullPath !== defaultTripPath) return
    return { top: 0, left: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  if (!isSameSegment(to.fullPath, from.fullPath)) startLoadingSpinner()
  next()
})

router.afterEach((to) => {
  stopLoadingSpinner()

  if (to.path.startsWith(`/${PortfolioRoute}`)) {
    document.title = 'Yehonatan Simian - Portfolio'
  } else if (to.path.startsWith(`/${TripRoute}`)) {
    document.title = 'Yehonatan Simian - The Big Trip'
  } else if (to.path.startsWith(`/${CookbookRoute}`)) {
    document.title = "Yehonatan Simian - Micha's Cookbook"
  } else {
    document.title = 'Yehonatan Simian'
  }
})
