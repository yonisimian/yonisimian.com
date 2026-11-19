import { computed } from 'vue'
import { useQueryParam } from './useQueryParam'
import { useRouter, useRoute } from 'vue-router'
import { Continent, Country, Step, Collection } from '/@/types/trip'
import { useTripData } from '/@/composables/useTripData'
import {
  decodeURIStep,
  encodeURIStep,
  getCollection,
  getContinentByStep,
  getCountryByStep,
  stepToCollection
} from '/@/functions/trip'

export const useTripState = () => {
  const tripData = useTripData()
  const { steps, countries, continents, collections } = tripData
  const route = useRoute()
  const router = useRouter()

  // ===== Route state ===== //

  const currStep = computed<Step>(() => {
    const id = route.params.id as string | undefined
    const found = id && decodeURIStep(id, steps)
    return found || steps[0]
  })

  const currStepIndex = computed<number>(() => steps.indexOf(currStep.value))
  const prevStep = computed<Step | undefined>(() => steps[currStepIndex.value - 1])
  const nextStep = computed<Step | undefined>(() => steps[currStepIndex.value + 1])
  const currCountry = computed<Country>(() => getCountryByStep(currStep.value, countries))
  const currContinent = computed<Continent>(() => getContinentByStep(currStep.value, continents))
  const activeCollection = computed<Collection>(
    () => getCollection(collection.value, collections) ?? stepToCollection(currStep.value, steps)
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

  // slug of the active curated collection, or '' when browsing a single step
  const collection = computed<string>({
    get: () => (getCollection(collectionRaw.value, collections) ? collectionRaw.value : ''),
    set: (slug: string) => {
      // batching updates to prevent race conditions
      router.push({
        query: {
          ...route.query,
          [QUERY_PARAM_FULLSCREEN]: slug ? QUERY_PARAM_FULLSCREEN_TRUE : '',
          [QUERY_PARAM_CUSTOM_SLIDES]: slug
        }
      })
    }
  })

  // ===== Navigation logic ===== //

  const chooseStep = (step: Step) => {
    router.push({
      path: `/${tripData.route}/${encodeURIStep(step)}`,
      query: {
        ...route.query,
        [QUERY_PARAM_SLIDE]: undefined
      }
    })
  }
  const chooseCountry = (country: Country) => chooseStep(country.steps[0])
  const chooseContinent = (continent: Continent) => chooseStep(continent.countries[0].steps[0])
  const choosePrevStep = () => {
    if (prevStep.value) {
      chooseStep(prevStep.value)
    }
  }

  const chooseNextStep = () => {
    if (nextStep.value) {
      chooseStep(nextStep.value)
    }
  }

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
