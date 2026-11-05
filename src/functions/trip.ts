import {
  type Step,
  type Country,
  type Continent,
  type MediaType,
  CollectionType,
  Collection,
  Trip
} from '/@/types/trip'

import { useTripData } from '/@/composables/useTripData'
import { joinPath, waveFetchData } from '.'
import { contDirName, countryDirName, stepDirName } from './static/trip/utils'
import { Month } from '/@/utils/months'

//////// getters ////////

export const getCountryByStep = (step: Step): Country =>
  useTripData().countries.find((country) => country.steps.some((s) => s.id === step.id)) || {
    name: 'Unknown Country',
    steps: []
  }

export const getContinentByStep = (step: Step): Continent =>
  useTripData().continents.find((continent) =>
    continent.countries.some((country) => country.steps.some((s) => s.id === step.id))
  ) || {
    name: 'Unknown Continent',
    bgImage: '',
    countries: []
  }

export const getCollection = (type: CollectionType): Collection | undefined => {
  const { highlights, music, people } = useTripData()
  const collections: Partial<Record<CollectionType, Collection>> = {
    [CollectionType.Highlights]: highlights,
    [CollectionType.Music]: music,
    [CollectionType.People]: people
  }
  return collections[type]
}

export const isImage = (media: MediaType): boolean => typeof media === 'string'

export const stepToIndex = (step: Step): number => {
  return useTripData().steps.findIndex((s) => s.id === step.id)
}

export const stepToCollection = (step: Step): Collection => {
  const stepIndex = stepToIndex(step)
  return {
    name: step.name,
    stepslides: step.media.map((_, slide) => ({ step: stepIndex, slide }))
  }
}

export const collectionToMediaArray = (collection: Collection): MediaType[] => {
  return collection.stepslides.map(({ step, slide }) => useTripData().steps[step].media[slide])
}

export const stepDegree = (step: Step): string => `${step.degrees}°c`

//////// formatters ////////

// Formats a long date string like "January 1, 2025" to "1-1-2025"
export const formatDate = (longDateString: string): string => {
  const match = longDateString.match(/^([A-Za-z]+) (\d{1,2}), (\d{4})$/)
  const month = match && Month[match[1] as keyof typeof Month]
  if (!match || !month) return longDateString
  return `${parseInt(match[2], 10)}-${month}-${match[3]}`
}

export const encodeURIStep = (step: Step) => `${step.id}-${encodeURIComponent(step.shortName)}`

export const decodeURIStep = (id: string) => {
  const [stepId, _] = id.split('-')
  return useTripData().steps.find((step) => step.id === Number(stepId))
}

//////// generateRandomDescription ////////

const descriptions = [
  'stepping out of the hotel',
  'listening to my favorite RHCP song',
  'thinking about Marty McFly\'s performance of "Johnny B. Goode"',
  "thinking about how baby oil isn't actually made of babies",
  'trying to imagine Sisyphus happy',
  "cleaning dead plankton from my shoes' soles",
  'signing a contract with the devil',
  'trying to remember the name of that one actor who played in that one movie',
  'wondering if I left the stove on',
  "practicing my best 'I'm not a tourist' face",
  'writing her off for the tenth time today',
  'dreaming of silver screen quotation',
  'thinking whether it makes more sense to say "chellos" or "celli" to a non-musician person',
  'wondering if I should have taken that left turn at Albuquerque',
  'trying to remember where I parked my car',
  'finishing my morning crying routine',
  'wondering if I should have taken the road which bent in the undergrowth',
  'becoming comfortably numb',
  'giving someone a quick short, sharp shock',
  'kicking around on a piece of ground',
  'losing blood in a bathroom stall',
  'sharing a lonely view with some birds',
  "hearing some's voice through a photograph",
  'asking in uncertain voice "what should I do"',
  'miming the song, hoping that it all works out right',
  'letting it flood on down and over me sweetly',
  'leaving spoor to mark my passage',
  'running around at the speed of sound',
  "feeling life movin' through my mind",
  'hanging on the edge of tomorrow',
  'carrying on as if nothing really matters',
  'heading to Malibu to make some noise',
  'looking for that deep kick',
  "kicking down the doors that I don't understand",
  'making my days a breeze',
  'sitting backstage in a dress',
  'drawing another breath',
  'flipping through empty pages that I thought I wrote on'
]

export const generateRandomDescription = () => {
  const randomIndex = Math.floor(Math.random() * descriptions.length)
  return descriptions[randomIndex]
}

//////// fetchers ////////

const errorHtml = (message: string) => `<p style="color: red; text-align: center;">${message}</p>`

const fetchStepDescription = async (trip: Trip, step: Step): Promise<string> => {
  const hasStep = (country: Country) => country.steps.some((s) => s.id === step.id)
  const countries = trip.continents.flatMap((c) => c.countries)
  const continentIndex = trip.continents.findIndex((c) => c.countries.some(hasStep))
  const countryIndex = countries.findIndex(hasStep)
  if (continentIndex === -1 || countryIndex === -1) {
    console.error(`Continent or country not found for step ID ${step.id}`)
    return errorHtml('Failed to load description (Continent or country not found).')
  }

  const descriptionUrl = joinPath(
    'data',
    'trip',
    contDirName(continentIndex, trip.continents[continentIndex]),
    countryDirName(countryIndex, countries[countryIndex]),
    stepDirName(step),
    'description.html'
  )

  try {
    const htmlResponse = await fetch(descriptionUrl)
    if (htmlResponse.ok) return await htmlResponse.text()

    const { status, statusText } = htmlResponse
    const errorText = await htmlResponse.text()
    console.error(
      `[LazyLoad] Failed to fetch HTML description for step ID ${step.id}. Status: ${status} ${statusText}. Response preview: ${errorText.substring(0, 200)}...`
    )
    return errorHtml(`Failed to load description (Error: ${status} ${statusText}).`)
  } catch (error: any) {
    console.error(`[LazyLoad] Network error fetching description for step ID ${step.id}:`, error)
    return errorHtml(`Network error loading description: ${error.message}`)
  }
}

export const lazyLoadDescriptions = async (trip: Trip, initialIndexToFetch: number) => {
  const steps = trip.continents.flatMap((continent) =>
    continent.countries.flatMap((country) => country.steps)
  )
  await waveFetchData(steps, initialIndexToFetch, async (step) => {
    const description = await fetchStepDescription(trip, step)
    step.description = description
  })
}
