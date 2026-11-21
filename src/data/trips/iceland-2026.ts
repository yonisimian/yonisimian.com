import { initialTripData } from './iceland-2026.metadata'
import { createTripData } from '/@/composables/useTripData'

export const iceland2026 = createTripData(initialTripData, {
  slug: 'iceland-2026',
  stepBackground: 'firstMedia',
  showCountryBar: false,
  collections: [],
  cover: { stepId: 5, slide: 8 },
  seo: {
    description: 'A showcase of my trip to Iceland, September 2026.',
    ogTitle: "Yoni's trip to Iceland, 2026",
    ogDescription:
      "Allow me to share my journey through Iceland's landscapes and the stories along the way."
  }
})
