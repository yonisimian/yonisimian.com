export interface Trip<T = Continent> {
  continents: T[]
}
export interface Continent<C = Country> {
  name: string
  bgImage?: string
  countries: C[]
}

export interface Country<S = Step> {
  name: string
  bgImage?: string
  steps: S[]
}

export type PhotoURL = string
export type VideoURL = { thumbnail: string; video: string }
export type MediaType = PhotoURL | VideoURL

// Properties that are available via trip.metadata.ts
export interface BaseStep {
  id: number // Unique identifier for the step
  name: string // Full name of the step
  shortName: string // Short name for the step, used in DestBars
  date: string // ISO format: '2025-06-17'
  degrees: string // Temperature in degrees Celsius
}

export interface CompiletimeStep extends BaseStep {
  media: string // the i-th char represents whether the i-th media is a photo ('p') or a video ('v')
}

export interface Step extends BaseStep {
  bgImage: string // url of the background image
  media: MediaType[] // photos and videos
  description: string // HTML, lazy-loaded at runtime
}

export type CompiletimeTrip = Trip<Continent<Country<CompiletimeStep>>> // after build, before runtime processing

// 'file': each step dir has its own bg.webp; 'firstMedia': use the step's first photo/video thumbnail
export type StepBackgroundSource = 'file' | 'firstMedia'

interface StepSlide {
  step: number
  slide: number
}
export interface Collection {
  name: string
  stepslides: StepSlide[]
}

// A hand-picked collection, addressable via the `collection` query param
export interface CuratedCollection extends Collection {
  slug: string
}
