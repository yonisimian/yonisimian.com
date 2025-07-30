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
  name: string
  shortName: string // Short name for the step, used in DestBars
  date: string // ISO format: '2025-06-17'
  degrees: string // Temperature in degrees Celsius
  bgImage?: number | string // index of the background image in the media array, or url of an external image. undefined means no background image
  media: MediaType[] // photos and videos
}

// Properties that will be lazy-loaded at runtime
export interface StepDetails {
  description: string // HTML
}

// The full Step interface (combines base and details)
// When initially constructed, StepDetails properties will be undefined/empty.
export interface Step extends BaseStep, StepDetails {}

export type BaseTripData = Trip<Continent<Country<BaseStep>>>

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
