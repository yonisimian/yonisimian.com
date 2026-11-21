import { inject, provide, reactive, ref, type InjectionKey, type Ref } from 'vue'
import type {
  CompiletimeTrip,
  Continent,
  Country,
  CuratedCollection,
  PhotoURL,
  Step,
  StepBackgroundSource,
  Trip
} from '/@/types/trip'
import type { MediaItem } from '/@/types/media'
import { decodeTrip } from '/@/functions/static/trip/utils'
import { lazyLoadDescriptions, toMediaItem } from '/@/functions/trip'
import { mediaUrl } from '/@/functions/media'
import { trips, type TripSlug } from '/@/data/trips'

export interface TripConfig {
  slug: TripSlug // URL segment and directory name under public/data and the media root
  stepBackground: StepBackgroundSource
  showCountryBar: boolean // multi-country trips get a country bar above the step bar
  collections: CuratedCollection[]
  cover: { stepId: number; slide: number } // a photo; used for link previews and the trips index
  seo: {
    description: string
    ogTitle: string
    ogDescription: string
  }
}

export interface TripData extends Omit<TripConfig, 'stepBackground' | 'cover'> {
  title: string
  cover: PhotoURL
  isTripLoaded: Ref<boolean>
  trip: Trip
  continents: Continent[]
  countries: Country[]
  steps: Step[]
  dates: string[]
  allMedia: MediaItem[]
}

export const createTripData = (
  metadata: CompiletimeTrip,
  { stepBackground, cover, ...config }: TripConfig
): TripData => {
  const trip = reactive(decodeTrip(metadata, mediaUrl('trips', config.slug), stepBackground))
  const continents = trip.continents
  const countries = continents.flatMap((continent) => continent.countries)
  const steps = countries.flatMap((country) => country.steps)
  const unmeasured = steps.find((step) => step.ratios.length !== step.media.length)
  if (unmeasured)
    throw new Error(
      `${config.slug}: step ${unmeasured.id} has no media ratios; run generate-local-trip`
    )
  const coverMedia = steps.find((step) => step.id === cover.stepId)?.media[cover.slide]
  if (typeof coverMedia !== 'string')
    throw new Error(
      `${config.slug}: cover at step ${cover.stepId}, slide ${cover.slide} is not a photo`
    )
  return {
    ...config,
    title: trips[config.slug].title,
    cover: coverMedia,
    isTripLoaded: ref(false),
    trip,
    continents,
    countries,
    steps,
    dates: steps.map((step) => step.date),
    allMedia: steps.flatMap((step) =>
      step.media.map((media, i) => toMediaItem(media, step.ratios[i], step.name))
    )
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
  await lazyLoadDescriptions(data.trip, Math.max(stepIndex, 0), `trips/${data.slug}`)
  data.isTripLoaded.value = true
}
