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
  steps: Step[]
}

export type PhotoURL = string
export type VideoURL = { thumbnail: string; video: string }
export type MediaType = PhotoURL | VideoURL

export interface Step {
  id: number // Unique identifier for the step
  name: string
  shortName: string // Short name for the step, used in DestBars
  date: string // ISO format: '2025-06-17'
  degrees: string // Temperature in degrees Celsius
  description: string // HTML
  media: MediaType[] // photos and videos
  bgImage?: string // URL to the step's background image
}

export enum CollectionType {
  None = '',
  Highlights = 'highlights',
  Music = 'music',
  People = 'people'
}

export interface StepSlide {
  step: Step
  slide: number
}
export interface Collection {
  name: string
  stepslides: StepSlide[]
}
