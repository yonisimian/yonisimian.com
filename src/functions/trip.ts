import {
  type Step,
  type Country,
  type Continent,
  type MediaType,
  CollectionType,
  Collection
} from '/@/types/trip'

import { steps, countries, continents, highlights, music, people } from '/@/data/trip'

export const getCountryByStep = (step: Step): Country =>
  countries.find((country) => country.steps.some((s) => s.id === step.id)) || {
    name: 'Unknown Country',
    steps: []
  }

export const getContinentByStep = (step: Step): Continent =>
  continents.find((continent) =>
    continent.countries.some((country) => country.steps.some((s) => s.id === step.id))
  ) || {
    name: 'Unknown Continent',
    bgImage: '',
    countries: []
  }

// Formats a long date string like "January 1, 2025" to "1-1-2025"
export const formatDate = (longDateString: string): string => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const match = longDateString.match(/^([A-Za-z]+) (\d{1,2}), (\d{4})$/)
  if (!match) return longDateString
  const month = months.indexOf(match[1]) + 1
  const day = parseInt(match[2], 10)
  const year = match[3]
  return `${day}-${month}-${year}`
}

export const encodeURIStep = (step: Step) => `${step.id}-${encodeURIComponent(step.shortName)}`

export const decodeURIStep = (id: string) => {
  const [stepId, _] = id.split('-')
  return steps.find((step) => step.id === Number(stepId))
}

export const isImage = (media: MediaType): boolean => typeof media === 'string'

export const getCollection = (type: CollectionType): Collection | undefined => {
  if (type === CollectionType.Highlights) return highlights
  if (type === CollectionType.Music) return music
  if (type === CollectionType.People) return people
  return undefined
}

export const stepToCollection = (step: Step): Collection => {
  return {
    name: step.name,
    stepslides: step.media.map((_, slide) => ({ step, slide }))
  }
}

export const collectionToMediaArray = (collection: Collection): MediaType[] => {
  return collection.stepslides.map(({ step, slide }) => step.media[slide])
}
