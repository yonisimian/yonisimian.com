import type { InjectionKey, Ref } from 'vue'
import type {
  Collection,
  Continent,
  Country,
  MediaType,
  Step,
  Trip
} from '/@/types/trip'

export interface TripData {
  isTripLoaded: Ref<boolean>
  trip: Trip
  continents: Continent[]
  countries: Country[]
  steps: Step[]
  dates: string[]
  highlights: Collection
  music: Collection
  people: Collection
  allMedia: MediaType[]
  carouselHeight: string
  route: string
  dataRoot: string
  title: string
}

export const tripDataKey: InjectionKey<TripData> = Symbol('tripData')
