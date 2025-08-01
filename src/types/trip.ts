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

export interface RawStep extends BaseStep {
  description: string
  bgImage?: number | string // index of the background image in the media array, or url of an external image. undefined means no background image
  media: MediaType[] // photos and videos
}

export interface CompiletimeStep extends BaseStep {
  media: string // the i-th char represents whether the i-th media is a photo ('p') or a video ('v')
}

export interface RuntimeStep extends BaseStep {
  bgImage: string // url of the background image
  media: MediaType[] // photos and videos
  description: string // HTML, lazy-loaded at runtime
}

export type Step = RuntimeStep

export type RawTrip = Trip<Continent<Country<RawStep>>> // before any processing

export type CompiletimeTrip = Trip<Continent<Country<CompiletimeStep>>> // after build, before runtime processing

export type RuntimeTrip = Trip<Continent<Country<RuntimeStep>>> // after runtime processing (RuntimeTrip === Trip)

export enum CollectionType {
  None = '',
  Highlights = 'highlights',
  Music = 'music',
  People = 'people'
}

export interface StepSlide {
  step: number
  slide: number
}
export interface Collection {
  name: string
  stepslides: StepSlide[]
}
