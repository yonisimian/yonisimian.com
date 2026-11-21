import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { defineComponent, h } from 'vue'
import type { TripData } from '/@/composables/useTripData'
import { trips, tripSlugs, tripPath } from '/@/data/trips'
import {
  TripRoute,
  PortfolioRoute,
  CookbookRoute,
  VegetavailableRoute,
  PrivacyRoute
} from '/@/data/globals'
import { useLoading } from '/@/composables/useLoading'
import { DEFAULT_LANGUAGE, isSupportedLanguage } from '/@/i18n/index'
import PortfolioView from '/@/views/PortfolioView.vue'

const { startLoadingSpinner, stopLoadingSpinner } = useLoading()
const firstStepPaths = tripSlugs.map((slug) => tripPath(slug, trips[slug].firstStep))

// Each trip's data stays in its own chunk, loaded in parallel with the shared view
const tripView = (loadData: () => Promise<TripData>) => async () => {
  const [{ default: TripView }, data] = await Promise.all([
    import('/@/views/TripView.vue'),
    loadData()
  ])
  return defineComponent(() => () => h(TripView, { data }))
}

const tripRoutes: RouteRecordRaw[] = tripSlugs.flatMap((slug) => [
  { path: tripPath(slug), redirect: tripPath(slug, trips[slug].firstStep) },
  { path: tripPath(slug, ':id'), component: tripView(trips[slug].load) }
])

const legacyTripRoutes: RouteRecordRaw[] = [
  // The big trip's steps used to live directly under /trip
  {
    path: `/${TripRoute}/:id(\\d+-.*)`,
    redirect: (to) => ({ path: tripPath('world-2024', String(to.params.id)), query: to.query })
  },
  {
    path: '/iceland/:id?',
    redirect: (to) => ({
      path: tripPath('iceland-2026', to.params.id ? String(to.params.id) : undefined),
      query: to.query
    })
  },
  { path: `/${TripRoute}/:pathMatch(.*)*`, redirect: `/${TripRoute}` }
]

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: `/${PortfolioRoute}` },
  {
    path: `/${PortfolioRoute}`,
    // Landing page: bundled eagerly to save a round trip before first paint
    component: PortfolioView
  },
  {
    path: `/${TripRoute}`,
    component: () => import('/@/views/TripsView.vue')
  },
  ...tripRoutes,
  ...legacyTripRoutes,
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
    path: `/${PrivacyRoute}`,
    component: () => import('/@/views/PrivacyView.vue')
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
    // Moving between steps of a trip keeps the scroll position
    if (to.path.startsWith(`/${TripRoute}/`) && !firstStepPaths.includes(to.fullPath)) return
    return { top: 0, left: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from) => {
  // Same route record means only params/query changed, e.g. another step of the same trip
  if (to.matched[0] !== from.matched[0]) startLoadingSpinner()
  const { lang } = to.query
  if (lang && !isSupportedLanguage(lang)) {
    console.warn(`Unsupported language: ${lang}. Defaulting to ${DEFAULT_LANGUAGE}.`)
  }
})

router.afterEach(stopLoadingSpinner)
