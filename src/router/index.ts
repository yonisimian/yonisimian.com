import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { TripRoute, PortfolioRoute, CookbookRoute, VegetavailableRoute } from '/@/data/globals'
import { useLoading } from '/@/composables/useLoading'
import { i18n, DEFAULT_LANGUAGE, isSupportedLanguage } from '/@/i18n/index'

const { startLoadingSpinner, stopLoadingSpinner } = useLoading()
// Hardcoded to keep trip data out of the main bundle
const defaultTripPath = `/${TripRoute}/1-TLV`
const isTripRoute = (path: string) => path.startsWith(`/${TripRoute}`)
const getSegments = (path: string) => path.split('/')
const isSameSegment = (path1: string, path2: string) =>
  getSegments(path1)[1] === getSegments(path2)[1]

const routes: RouteRecordRaw[] = [
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
    path: '/projects/microservices',
    component: () => import('/@/views/MicroservicesView.vue')
  },
  {
    path: '/uta-kingdom',
    component: () => import('/@/views/UTAView.vue')
  },
  {
    path: '/dnd',
    component: () => import('/@/views/DndView.vue')
  },
  {
    path: `/${TripRoute}/:id`,
    component: () => import('/@/views/TripView.vue')
  },
  {
    path: `/${CookbookRoute}`,
    component: () => import('/@/views/CookbookView.vue'),
    // enforce Hebrew
    beforeEnter: (to) =>
      to.query.lang === 'he' || { path: to.path, query: { ...to.query, lang: 'he' } }
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
  scrollBehavior(to) {
    if (isTripRoute(to.fullPath) && to.fullPath !== defaultTripPath) return
    return { top: 0, left: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from) => {
  if (!isSameSegment(to.fullPath, from.fullPath)) startLoadingSpinner()
  const { lang } = to.query
  if (lang && !isSupportedLanguage(lang)) {
    console.warn(`Unsupported language: ${lang}. Defaulting to ${DEFAULT_LANGUAGE}.`)
  }
  i18n.global.locale.value = isSupportedLanguage(lang) ? lang : DEFAULT_LANGUAGE
})

router.afterEach(stopLoadingSpinner)
