import { createRouter, createWebHistory } from 'vue-router'
import { TripRoute, PortfolioRoute, CookbookRoute, VegetavailableRoute } from '/@/data/globals'
import { useLoading } from '/@/composables/useLoading'
import { i18n } from '/@/i18n/index'
import { DEFAULT_LANGUAGE, isSupportedLanguage } from '/@/i18n/index'

const { startLoadingSpinner, stopLoadingSpinner } = useLoading()
// const defaultTripPath = `/${TripRoute}/${encodeURIStep(steps[0])}`
const defaultTripPath = `/${TripRoute}/1-TLV`
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
    path: `/${VegetavailableRoute}`,
    component: () => import('/@/views/VegetavailaView.vue')
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
  if (to.query.lang) {
    if (isSupportedLanguage(to.query.lang)) {
      i18n.global.locale.value = to.query.lang
    } else {
      console.warn(`Unsupported language: ${to.query.lang}. Defaulting to ${DEFAULT_LANGUAGE}.`)
      i18n.global.locale.value = DEFAULT_LANGUAGE
    }
  }
  next()
})

router.afterEach((to) => {
  stopLoadingSpinner()
})
