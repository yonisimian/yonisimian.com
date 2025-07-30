import {
  type Step,
  type Country,
  type Continent,
  type MediaType,
  CollectionType,
  Collection
} from '/@/types/trip'

import { useTripData } from '/@/composables/useTripData'

const { steps, countries, continents } = useTripData()

const highlights: Collection = {
  name: 'Highlights',
  stepslides: [
    { step: 10, slide: 3 }, // hakone
    { step: 13, slide: 0 }, // ibaraki
    { step: 15, slide: 1 }, // hiragana
    { step: 16, slide: 6 }, // universal
    { step: 19, slide: 4 }, // beautiful screensaver
    { step: 22, slide: 3 }, // kobe orchestra
    { step: 22, slide: 11 }, // note to Akiko
    { step: 24, slide: 9 }, // Otsu l'chaim
    { step: 26, slide: 3 }, // Otsu music (TODO)
    { step: 28, slide: 0 }, // snow monkeys
    { step: 28, slide: 5 }, // more monkeys
    { step: 30, slide: 2 }, // buddah
    { step: 34, slide: 2 }, // slappin'
    { step: 36, slide: 0 }, // making ramen
    { step: 37, slide: 1 }, // rocky <3
    { step: 39, slide: 4 }, // bird
    { step: 40, slide: 6 }, // moanalua
    { step: 41, slide: 2 }, // nephews
    { step: 44, slide: 2 }, // hawaii omg
    { step: 47, slide: 6 }, // hillel
    { step: 49, slide: 0 }, // lionel
    { step: 52, slide: 8 }, // his world
    { step: 54, slide: 14 }, // back to the future
    { step: 55, slide: 7 }, // princeton sunset
    { step: 59, slide: 9 }, // funny grandma
    { step: 66, slide: 4 }, // amsterdam jam
    { step: 70, slide: 6 }, // oye como va
    { step: 75, slide: 3 }, // nuremberg
    { step: 76, slide: 7 }, // jesus
    { step: 78, slide: 3 }, // strauss dinner
    { step: 79, slide: 3 }, // traffic lights beer
    { step: 80, slide: 3 }, // israeli beers
    { step: 81, slide: 10 }, // under the bridge
    { step: 82, slide: 5 }, // beer festival
    { step: 83, slide: 6 }, // brewery
    { step: 84, slide: 1 } // peleg
  ]
}

const music: Collection = {
  name: 'Live Music',
  stepslides: [
    { step: 16, slide: 7 }, // universal
    { step: 17, slide: 0 }, // jam after universal
    { step: 22, slide: 2 }, // kobe orchestra
    { step: 22, slide: 3 }, // kobe orchestra 2
    { step: 24, slide: 5 }, // otsu jam
    { step: 24, slide: 6 }, // otsu jam
    { step: 24, slide: 7 }, // otsu jam
    { step: 25, slide: 11 }, // otsu jam #2
    { step: 25, slide: 12 }, // otsu jam #2
    { step: 26, slide: 3 }, // otsu jam #3
    { step: 26, slide: 4 }, // otsu jam #3
    { step: 26, slide: 5 }, // otsu jam #3
    { step: 34, slide: 2 }, // bass shop jam
    { step: 37, slide: 0 }, // rocky
    { step: 37, slide: 1 }, // rocky
    { step: 37, slide: 2 }, // rocky
    { step: 37, slide: 3 }, // rocky
    { step: 37, slide: 4 }, // rocky
    { step: 41, slide: 0 }, // kaneohe
    { step: 46, slide: 3 }, // venice beach evening
    { step: 47, slide: 0 }, // venice beach day
    { step: 52, slide: 3 }, // sonic symphony
    { step: 52, slide: 4 }, // sonic symphony
    { step: 52, slide: 5 }, // sonic symphony
    { step: 52, slide: 6 }, // sonic symphony
    { step: 52, slide: 7 }, // sonic symphony
    { step: 52, slide: 8 }, // sonic symphony
    { step: 52, slide: 9 }, // sonic symphony
    { step: 52, slide: 10 }, // sonic symphony
    { step: 52, slide: 11 }, // sonic symphony
    { step: 53, slide: 7 }, // new york jazz
    { step: 62, slide: 0 }, // john
    { step: 62, slide: 1 }, // john
    { step: 62, slide: 2 }, // john
    { step: 66, slide: 4 }, // amsterdam jam
    { step: 67, slide: 13 }, // rijksmuseum
    { step: 70, slide: 3 }, // utrecht
    { step: 70, slide: 4 }, // utrecht
    { step: 70, slide: 5 }, // utrecht
    { step: 70, slide: 6 }, // utrecht
    { step: 70, slide: 7 }, // utrecht
    { step: 70, slide: 8 }, // utrecht
    { step: 75, slide: 0 }, // nuremberg
    { step: 75, slide: 1 }, // nuremberg
    { step: 75, slide: 3 }, // nuremberg
    { step: 77, slide: 8 }, // vienna museum
    { step: 78, slide: 1 }, // strauss
    { step: 78, slide: 2 }, // strauss
    { step: 78, slide: 3 }, // strauss
    { step: 78, slide: 4 }, // strauss
    { step: 78, slide: 5 }, // strauss
    { step: 78, slide: 6 }, // strauss
    { step: 78, slide: 7 }, // strauss
    { step: 78, slide: 8 }, // strauss
    { step: 78, slide: 9 }, // strauss
    { step: 78, slide: 10 }, // strauss
    { step: 78, slide: 11 }, // strauss
    { step: 81, slide: 8 }, // prague
    { step: 81, slide: 9 }, // prague
    { step: 81, slide: 10 }, // prague
    { step: 83, slide: 5 }, // prague brewery
    { step: 83, slide: 6 } // prague brewery
  ]
}

const people: Collection = {
  name: 'People',
  stepslides: [
    { step: 6, slide: 0 }, // yoni
    { step: 9, slide: 0 }, // jason
    { step: 10, slide: 6 }, // hakone dudes
    { step: 11, slide: 0 }, // hakone other dudes
    { step: 22, slide: 5 }, // she never told me her name
    { step: 24, slide: 5 }, // otsu jam
    { step: 28, slide: 5 }, // monkey
    { step: 30, slide: 0 }, // taki
    { step: 32, slide: 3 }, // graphy dudes
    { step: 34, slide: 6 }, // graphy dudes 2
    { step: 37, slide: 0 }, // rocky
    { step: 38, slide: 0 }, // arriving in hawaii
    { step: 39, slide: 7 }, // diamond head
    { step: 39, slide: 8 }, // diamond head 2
    { step: 40, slide: 0 }, // moanalua
    { step: 40, slide: 6 }, // moanalua 2
    { step: 42, slide: 0 }, // kidush
    { step: 43, slide: 3 }, // barak
    { step: 44, slide: 11 }, // michal and kids
    { step: 49, slide: 1 }, // lionel
    { step: 50, slide: 1 }, // newark bus dude
    { step: 51, slide: 3 }, // jack, lauren & sean
    { step: 54, slide: 14 }, // back-to-the-future girl
    { step: 56, slide: 5 }, // evan & anya
    { step: 57, slide: 0 }, // evan & tzipi
    { step: 58, slide: 2 }, // allen
    { step: 59, slide: 1 }, // evan
    { step: 59, slide: 9 }, // grandma
    { step: 62, slide: 1 }, // john
    { step: 64, slide: 0 }, // evan & me
    { step: 64, slide: 5 }, // bunch of jews
    { step: 64, slide: 6 }, // bunch of jews 2
    { step: 68, slide: 1 }, // lera & guy
    { step: 71, slide: 0 }, // mike
    { step: 73, slide: 5 }, // rudolf
    { step: 75, slide: 2 }, // hussners
    { step: 80, slide: 1 }, // prague dudes
    { step: 81, slide: 0 }, // dad with clock
    { step: 82, slide: 4 }, // beer festival dudes
    { step: 83, slide: 2 }, // me & dad
    { step: 84, slide: 0 } // family
  ]
}

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

export const stepToIndex = (step: Step): number => {
  return steps.findIndex((s) => s.id === step.id)
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
  return collection.stepslides.map(({ step, slide }) => steps[step].media[slide])
}

// /**
//  * Defines a reference to a specific media item within a step.
//  */
// export interface MediaReference {
//   stepId: number // The ID of the step the media belongs to
//   mediaIndex: number // The index of the media item within that step's media array
// }

// /**
//  * Maps a collection's slides to an array of media references.
//  * This function is synchronous and does NOT fetch the actual media content.
//  * The actual media content (MediaType) is expected to be lazy-loaded
//  * and accessed from `currStepDetails.value.media` when the relevant step is active.
//  *
//  * @param collection The collection object containing steps and slide indices.
//  * @returns An array of MediaReference objects, indicating which media item belongs to each slide.
//  */
// export const collectionToMediaReferences = (collection: Collection): MediaReference[] => {
//   return collection.stepslides.map(({ step: stepId, slide: mediaIndex }) => ({
//     stepId: stepId,
//     mediaIndex: mediaIndex
//   }))
// }
