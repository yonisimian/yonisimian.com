import type { Collection, MediaType } from '/@/types/trip'
import { decodeTrip } from '/@/functions/static/trip/utils'
import { initialTripData } from '/@/data/iceland-trip.metadata'
import { reactive, ref } from 'vue'
import { IcelandTripRoute } from '/@/data/globals'
import { provideTripData } from './useTripData'
import type { TripData } from './tripDataContext'

const trip = reactive(decodeTrip(initialTripData, `trip-${IcelandTripRoute}`, true))
const continents = trip.continents
const countries = continents.flatMap((continent) => continent.countries)
const steps = countries.flatMap((country) => country.steps)
const dates = steps.map((step) => step.date)
const noCollection: Collection = { name: '', stepslides: [] }
const allMedia: MediaType[] = steps.flatMap((step) => step.media)
const isTripLoaded = ref(false)

const tripData: TripData = {
  isTripLoaded,
  trip,
  continents,
  countries,
  steps,
  dates,
  highlights: noCollection,
  music: noCollection,
  people: noCollection,
  allMedia,
  carouselHeight: '65vh',
  route: IcelandTripRoute,
  dataRoot: `trip-${IcelandTripRoute}`,
  title: 'Iceland 2026'
}

export const useIcelandTripData = () => {
  provideTripData(tripData)
  return tripData
}
