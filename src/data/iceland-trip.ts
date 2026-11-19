import { initialTripData } from '/@/data/iceland-trip.metadata'
import { IcelandTripRoute } from '/@/data/globals'
import { createTripData } from '/@/composables/useTripData'

export const icelandTrip = createTripData(initialTripData, {
  title: 'Iceland 2026',
  route: IcelandTripRoute,
  contentDir: `trip-${IcelandTripRoute}`,
  stepBackground: 'firstMedia',
  showCountryBar: false,
  collections: []
})
