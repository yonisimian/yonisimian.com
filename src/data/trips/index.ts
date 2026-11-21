import type { TripData } from '/@/composables/useTripData'
import { TripRoute } from '/@/data/globals'

// Kept apart from the trip data so the router and footer don't pull it into the main bundle
interface TripEntry {
  title: string
  firstStep: string
  load: () => Promise<TripData>
}

// Chronological order
export const trips = {
  'world-2024': {
    title: 'The Big Trip',
    firstStep: '1-TLV',
    load: () => import('./world-2024').then((m) => m.world2024)
  },
  'iceland-2026': {
    title: 'Iceland 2026',
    firstStep: '1-Ramla',
    load: () => import('./iceland-2026').then((m) => m.iceland2026)
  }
} satisfies Record<string, TripEntry>

export type TripSlug = keyof typeof trips

export const tripSlugs = Object.keys(trips) as TripSlug[]

export const tripPath = (slug: TripSlug, step?: string) =>
  `/${TripRoute}/${slug}${step ? `/${step}` : ''}`
