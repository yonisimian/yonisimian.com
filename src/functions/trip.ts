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
  if (type === CollectionType.Highlights) return useTripData().highlights
  if (type === CollectionType.Music) return useTripData().music
  if (type === CollectionType.People) return useTripData().people
  return undefined
}

export const isImage = (media: MediaType): boolean => typeof media === 'string'

export const stepToIndex = (step: Step): number => {
  return useTripData().steps.findIndex((s) => s.id === step.id)
}

export const stepToCollection = (step: Step): Collection => {
  return {
    name: step.name,
    stepslides: step.media.map((_, slide) => {
      return { step: stepToIndex(step), slide }
    })
  }
}

export const collectionToMediaArray = (collection: Collection): MediaType[] => {
  return collection.stepslides.map(({ step, slide }) => useTripData().steps[step].media[slide])
}

export const stepDegree = (step: Step): string => `${step.degrees}°c`

//////// formatters ////////

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

const fetchStepDescription = async (trip: Trip, step: Step): Promise<string> => {
  const continent = trip.continents.find((continent) =>
    continent.countries.some((country) => country.steps.some((s) => s.id === step.id))
  )
  const country = continent?.countries.find((country) =>
    country.steps.some((s) => s.id === step.id)
  )
  if (!continent || !country) {
    console.error(`Continent or country not found for step ID ${step.id}`)
    return `<p style="color: red; text-align: center;">Failed to load description (Continent or country not found).</p>`
  }
  const continentIndex = trip.continents.indexOf(continent)
  const countryIndex = trip.continents.flatMap((c) => c.countries).findIndex((c) => c === country)
  if (continentIndex === undefined || countryIndex === undefined) {
    console.error(`Continent or country not found for step ID ${step.id}`)
    return `<p style="color: red; text-align: center;">Failed to load description (Continent or country not found).</p>`
  }

  const descriptionUrl = joinPath(
    'data',
    'trip',
    contDirName(continentIndex, continent),
    countryDirName(countryIndex, country),
    stepDirName(step),
    'description.html'
  )

  try {
    const htmlResponse = await fetch(descriptionUrl)

    if (!htmlResponse.ok) {
      const errorText = await htmlResponse.text()
      console.error(
        `[LazyLoad] Failed to fetch HTML description for step ID ${step.id}. Status: ${
          htmlResponse.status
        } ${htmlResponse.statusText}. Response preview: ${errorText.substring(0, 200)}...`
      )
      return `<p style="color: red; text-align: center;">Failed to load description (Error: ${htmlResponse.status} ${htmlResponse.statusText}).</p>`
    } else {
      return await htmlResponse.text()
    }
  } catch (error: any) {
    console.error(`[LazyLoad] Network error fetching description for step ID ${step.id}:`, error)
    return `<p style="color: red; text-align: center;">Network error loading description: ${error.message}</p>`
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
