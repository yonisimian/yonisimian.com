export interface Trip {
  continents: Continent[]
}

export interface Continent {
  name: string
  bgImage?: string // URL to the continent's flag image
  countries: Country[]
}

export interface Country {
  name: string
  bgImage?: string // URL to the country's flag image
  steps: Step[] // TODO: use BaseStep[] somehow
}

export type PhotoURL = string
export type VideoURL = { thumbnail: string; video: string }
export type MediaType = PhotoURL | VideoURL

// Properties that are always available for a Step object
export interface BaseStep {
  id: number // Unique identifier for the step
  name: string
  shortName: string // Short name for the step, used in DestBars
  date: string // ISO format: '2025-06-17'
  degrees: string // Temperature in degrees Celsius
  bgImage?: number | string // index of the background image in the media array, or url of an external image. undefined means no background image
  media: MediaType[] // photos and videos
}

// Properties that will be lazy-loaded for a Step
export interface StepDetails {
  description: string // HTML
}

// The full Step interface (combines base and details)
// When initially constructed, StepDetails properties will be undefined/empty.
export interface Step extends BaseStep, StepDetails {}

export interface Step {
  id: number // Unique identifier for the step
  name: string
  shortName: string // Short name for the step, used in DestBars
  date: string // ISO format: '2025-06-17'
  degrees: string // Temperature in degrees Celsius
  description: string // HTML
  media: MediaType[] // photos and videos
  bgImage?: number | string // index of the background image in the media array, or url of an external image. undefined means no background image
}

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
