import { inject, provide, reactive, ref, type InjectionKey, type Ref } from 'vue'
import type {
  CompiletimeTrip,
  Continent,
  Country,
  CuratedCollection,
  MediaType,
  Step,
  StepBackgroundSource,
  Trip
} from '/@/types/trip'
import { decodeTrip } from '/@/functions/static/trip/utils'
import { lazyLoadDescriptions } from '/@/functions/trip'

export interface TripConfig {
  title: string
  route: string // URL segment the trip is served under
  contentDir: string // directory name under both public/data and public/media
  stepBackground: StepBackgroundSource
  showCountryBar: boolean // multi-country trips get a country bar above the step bar
  collections: CuratedCollection[]
}

export interface TripData extends Omit<TripConfig, 'stepBackground'> {
  isTripLoaded: Ref<boolean>
  trip: Trip
  continents: Continent[]
  countries: Country[]
  steps: Step[]
  dates: string[]
  allMedia: MediaType[]
}

export const createTripData = (
  metadata: CompiletimeTrip,
  { stepBackground, ...config }: TripConfig
): TripData => {
  const trip = reactive(decodeTrip(metadata, config.contentDir, stepBackground))
  const continents = trip.continents
  const countries = continents.flatMap((continent) => continent.countries)
  const steps = countries.flatMap((country) => country.steps)
  return {
    ...config,
    isTripLoaded: ref(false),
    trip,
    continents,
    countries,
    steps,
    dates: steps.map((step) => step.date),
    allMedia: steps.flatMap((step) => step.media)
  }
}

const tripDataKey: InjectionKey<TripData> = Symbol('tripData')

export const provideTripData = (data: TripData) => provide(tripDataKey, data)

export const useTripData = (): TripData => {
  const data = inject(tripDataKey)
  if (!data) throw new Error('useTripData() requires an ancestor to call provideTripData()')
  return data
}

export const loadTrip = async (data: TripData, stepId?: string) => {
  if (data.isTripLoaded.value) return
  const stepIndex = data.steps.findIndex((step) => step.id === Number(stepId?.split('-')[0]))
  await lazyLoadDescriptions(data.trip, Math.max(stepIndex, 0), data.contentDir)
  data.isTripLoaded.value = true
}
