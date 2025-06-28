// basically the state of TheBigTrip
import { computed } from 'vue'
import { useQueryParam } from './useQueryParam'
import { useRouter, useRoute } from 'vue-router'
import { Continent, Country, Step, CollectionType, Collection } from '/@/types/trip'
import { steps } from '/@/data/trip'
import {
  decodeURIStep,
  encodeURIStep,
  getCollection,
  getContinentByStep,
  getCountryByStep,
  stepToCollection
} from '/@/functions/trip'

export const useTripState = () => {
  const route = useRoute()
  const router = useRouter()

  // ===== Route state ===== //

  const currStep = computed<Step>(() => {
    const id = route.params.id as string | undefined
    const found = id && decodeURIStep(id)
    return found || steps[0]
  })
  const currStepIndex = computed<number>(() => steps.indexOf(currStep.value))
  const prevStep = computed<Step | undefined>(() => steps[currStepIndex.value - 1])
  const nextStep = computed<Step | undefined>(() => steps[currStepIndex.value + 1])
  const currCountry = computed<Country>(() => getCountryByStep(currStep.value))
  const currContinent = computed<Continent>(() => getContinentByStep(currStep.value))
  const activeCollection = computed<Collection>(
    // If a custom collection is selected, use it; otherwise, derive from the current step
    () => getCollection(collection.value) ?? stepToCollection(currStep.value)
  )
  // ===== Query string state ===== //

  const QUERY_PARAM_SLIDE = 'slide'
  const QUERY_PARAM_FULLSCREEN = 'fullscreen'
  const QUERY_PARAM_FULLSCREEN_TRUE = 'true'
  const QUERY_PARAM_CUSTOM_SLIDES = 'collection'

  const slide = useQueryParam(QUERY_PARAM_SLIDE, {
    default: 0,
    parse: (v) => parseInt(v || '0'),
    stringify: (v) => v.toString()
  })

  const fullscreenRaw = useQueryParam(QUERY_PARAM_FULLSCREEN, {
    default: '',
    parse: (v) => v || ''
  })

  // TODO: I think that fullscreen could be a composable of its own
  const fullscreen = computed<boolean>(() => fullscreenRaw.value === QUERY_PARAM_FULLSCREEN_TRUE)

  const collectionRaw = useQueryParam(QUERY_PARAM_CUSTOM_SLIDES, {
    default: '',
    parse: (v) => v || ''
  })

  const collectionValues = Object.values(CollectionType) as CollectionType[]

  const collection = computed<CollectionType>({
    get: () =>
      collectionValues.includes(collectionRaw.value as CollectionType)
        ? (collectionRaw.value as CollectionType)
        : CollectionType.None,
    set: (val: CollectionType) => {
      // batching updates to prevent race conditions
      router.push({
        query: {
          ...route.query,
          [QUERY_PARAM_FULLSCREEN]: val !== CollectionType.None ? QUERY_PARAM_FULLSCREEN_TRUE : '',
          [QUERY_PARAM_CUSTOM_SLIDES]: val
        }
      })
    }
  })

  // ===== Navigation logic ===== //

  const chooseStep = (step: Step) => {
    const newId = encodeURIStep(step)
    const segments = route.path.split('/')
    if (segments.length > 2) {
      segments[2] = newId
    } else {
      segments.push(newId)
    }
    router.push({
      path: segments.join('/'),
      query: {
        ...route.query,
        [QUERY_PARAM_SLIDE]: undefined
      }
    })
  }
  const chooseCountry = (country: Country) => chooseStep(country.steps[0])
  const chooseContinent = (continent: Continent) => chooseStep(continent.countries[0].steps[0])
  const choosePrevStep = () => currStepIndex.value > 0 && chooseStep(steps[currStepIndex.value - 1])
  const chooseNextStep = () =>
    currStepIndex.value < steps.length - 1 && chooseStep(steps[currStepIndex.value + 1])

  const openFullscreen = () => {
    if (fullscreen.value) return
    fullscreenRaw.value = QUERY_PARAM_FULLSCREEN_TRUE
  }

  // batching updates to prevent race conditions
  const closeFullscreen = () => {
    if (!fullscreen.value) return
    router.push({
      query: {
        ...route.query,
        [QUERY_PARAM_FULLSCREEN]: undefined,
        [QUERY_PARAM_CUSTOM_SLIDES]: undefined
      }
    })
  }

  const toggleFullscreen = () => {
    fullscreen.value ? closeFullscreen() : openFullscreen()
  }

  return {
    currStep,
    prevStep,
    nextStep,
    currCountry,
    currContinent,
    activeCollection, // derived from currCollection or stepToCollection
    chooseStep,
    chooseCountry,
    chooseContinent,
    choosePrevStep,
    chooseNextStep,
    slide,
    fullscreen,
    collection,
    openFullscreen,
    closeFullscreen,
    toggleFullscreen
  }
}
