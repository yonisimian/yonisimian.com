// basically the state of TheBigTrip
import { computed, ref, watch } from 'vue'
import { useQueryParam } from './useQueryParam'
import { useRouter, useRoute } from 'vue-router'
import { Continent, Country, Step, CollectionType, Collection /*, BaseStep*/ } from '/@/types/trip'
import { useTripData } from '/@/composables/useTripData'
import { encodeURIStep, getCollection } from '/@/functions/trip'

// Helper functions (assuming these exist and work with BaseStep properties)
// These functions should only rely on step.id or other BaseStep properties,
// NOT on description, media, etc., to avoid triggering unwanted fetches.
const decodeURIStep2 = (id: string, allSteps: Step[]): Step | undefined => {
  const [stepIdStr, _] = id.split('-')
  const stepId = Number(stepIdStr)
  // Find the step by its unique ID, not by array index directly
  return allSteps.find((step) => step.id === stepId)
}

// Assuming getCountryByStep and getContinentByStep work on Step objects' base properties
// You might need to pass the full trip structure here or ensure they can map based on step.id
const getCountryByStep2 = (step: Step, allCountries: Country[]): Country | undefined => {
  // This is a placeholder. In a real app, you'd find the country that contains this step.
  // E.g., allCountries.find(country => country.steps.some(s => s.id === step.id));
  // For now, let's assume you have a way to derive this from step's base properties.
  return allCountries.find((country) => country.steps.some((s) => s.id === step.id))
}

const getContinentByStep2 = (step: Step, allContinents: Continent[]): Continent | undefined => {
  // Similar to getCountryByStep, find the continent containing the country that contains this step.
  return allContinents.find((continent) =>
    continent.countries.some((country) => country.steps.some((s) => s.id === step.id))
  )
}

const stepToCollection2 = (step: Step | null): Collection => {
  if (!step) {
    console.warn('stepToCollection2 called with null step, returning default collection')
    return {
      name: 'Unknown Collection',
      stepslides: []
    }
  }
  return {
    name: step.shortName,
    stepslides: step.media.map((media, index) => ({
      step: step.id - 1,
      slide: index
    }))
  }
}

export const useTripState = () => {
  const { steps, countries, continents } = useTripData()
  const route = useRoute()
  const router = useRouter()

  // ===== Route state ===== //

  // This ref will hold the *currently active and fully loaded* Step object.
  const currStep = ref<Step | null>(null)
  const isLoadingCurrentStepDetails = ref(false)
  const currentStepDetailsError = ref<Error | null>(null)

  watch(
    () => route.params.id,
    async (newIdParam) => {
      currStep.value = null // Clear previous step
      isLoadingCurrentStepDetails.value = true
      currentStepDetailsError.value = null

      try {
        // 1. Find the proxied Step object based on the route ID
        const foundStepProxy = decodeURIStep2(newIdParam as string, steps.value) || steps.value[0]

        if (!foundStepProxy) {
          throw new Error(`Step not found for ID: ${newIdParam || 'initial'}`)
        }

        // 2. Trigger the lazy loading of this step's details
        // Accessing these properties on the proxy will initiate the fetch if not already loaded.
        // We await the result to ensure the properties are populated on `foundStepProxy`
        // before we set `currStep.value`.
        // We map to Promise.resolve because some properties might already be loaded (not a Promise).
        await Promise.all(
          [foundStepProxy.description, foundStepProxy.media, foundStepProxy.bgImage].map((p) =>
            p instanceof Promise ? p : Promise.resolve(p)
          )
        )

        // 3. Set the `currStep` ref to the now-populated proxy object.
        // Since `foundStepProxy` is reactive and its properties were updated by the await above,
        // any component using `currStep.value.description` will automatically update.
        currStep.value = foundStepProxy
      } catch (error: any) {
        currentStepDetailsError.value = error
        console.error('Failed to load current step details:', error)
      } finally {
        isLoadingCurrentStepDetails.value = false
      }
    },
    { immediate: true } // Run this watch immediately on component mount
  )

  // ===== Dependent computed properties =====
  // These computed properties now correctly depend on `currStep.value`,
  // which will be a fully loaded Step object once the watch effect resolves.
  // They will react when `currStep.value` changes.

  const currStepIndex = computed<number>(() => {
    if (!currStep.value) return -1
    return steps.value.indexOf(currStep.value)
  })

  const prevStep = computed<Step | undefined>(() => {
    if (currStepIndex.value <= 0) return undefined
    return steps.value[currStepIndex.value - 1]
  })

  const nextStep = computed<Step | undefined>(() => {
    if (currStepIndex.value === -1 || currStepIndex.value >= steps.value.length - 1)
      return undefined
    return steps.value[currStepIndex.value + 1]
  })

  const currCountry = computed<Country | undefined>(() => {
    if (!currStep.value) return undefined
    return getCountryByStep2(currStep.value, countries.value)
  })

  const currContinent = computed<Continent | undefined>(() => {
    if (!currStep.value) return undefined
    return getContinentByStep2(currStep.value, continents.value)
  })

  // const currStepDetails = computed<BaseStep>(() => {
  //   if (!currStep.value)
  //     return {
  //       id: -1,
  //       name: '',
  //       shortName: '',
  //       date: '',
  //       degrees: '',
  //       bgImage: undefined
  //     }
  //   return {
  //     id: currStep.value.id,
  //     name: currStep.value.name,
  //     shortName: currStep.value.shortName,
  //     date: currStep.value.date,
  //     degrees: currStep.value.degrees,
  //     bgImage: currStep.value.bgImage
  //   }
  // })

  const activeCollection = computed<Collection>(
    () => getCollection(collection.value) ?? stepToCollection2(currStep.value)
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
    toggleFullscreen,
    isLoadingCurrentStepDetails,
    currentStepDetailsError,
    currStepIndex
    // currStepDetails
  }
}
