import { computed, reactive, ref, watch } from 'vue'
import type {
  Trip,
  Step,
  Collection,
  BaseStep,
  StepDetails,
  // MediaType,
  Continent,
  Country
} from '/@/types/trip'
import { useRoute } from 'vue-router'
import { contDirName, countryDirName, stepDirName } from '../functions/static/trip/utils'

// These will hold the reactive trip data
// Using `reactive` on a `null` initial value directly might warn in Vue 3.
// A common pattern is to initialize with an empty object and then `Object.assign`.
export const trip: Trip = reactive({ continents: [] }) // Initialize as an empty reactive object

const fetchStepDescription = async (step: Step, stepDetailsUrl: string) => {
  try {
    const htmlResponse = await fetch(stepDetailsUrl) // Fetch HTML fragment

    if (!htmlResponse.ok) {
      // If the HTML file is not found or has a server error
      const errorText = await htmlResponse.text() // Get the actual response body for debugging
      console.error(
        `[LazyLoad] Failed to fetch HTML description for step ID ${step.id}. Status: ${
          htmlResponse.status
        } ${htmlResponse.statusText}. Response preview: ${errorText.substring(0, 200)}...`
      )
      // Provide a user-friendly fallback description in case of fetch error
      return `<p style="color: red; text-align: center;">Failed to load description (Error: ${htmlResponse.status} ${htmlResponse.statusText}).</p>`
      // Note: We don't throw here immediately so the rest of the StepDetails can still be returned.
      // The error is logged for debugging.
    } else {
      // If successful, get the raw HTML text
      return await htmlResponse.text()
    }
  } catch (error: any) {
    // Catch network errors (e.g., server offline, CORS issues)
    console.error(`[LazyLoad] Network error fetching description for step ID ${step.id}:`, error)
    return `<p style="color: red; text-align: center;">Network error loading description: ${error.message}</p>`
  }
}

// interface PhotoManifestItem {
//   id: number
//   photo: string
// }

// interface VideoManifestItem {
//   id: number
//   thumb: string
//   video: string
// }

// type MediaManifestItem = PhotoManifestItem | VideoManifestItem

// const fetchStepMediaManifest = async (step: Step, mediaManifestUrl: string) => {
//   try {
//     const manifestResponse = await fetch(mediaManifestUrl)

//     if (!manifestResponse.ok) {
//       const errorText = await manifestResponse.text()
//       console.warn(
//         `[LazyLoad] No media manifest found or fetch failed for step ID ${step.id}. Status: ${
//           manifestResponse.status
//         } ${manifestResponse.statusText}. Response preview: ${errorText.substring(0, 200)}...`
//       )
//       // If manifest fails, mediaContent remains empty, bgImageContent remains undefined.
//     } else {
//       const manifest: MediaManifestItem[] = await manifestResponse.json()

//       // Base path for the actual media files
//       const mediaFilesBasePath = mediaManifestUrl
//         .replace('/data/', '/media/')
//         .replace('media_manifest.json', '')

//       return manifest
//         .map((item) => {
//           console.log(`[LazyLoad] Processing media item:`, item)
//           if ('photo' in item) {
//             return `${mediaFilesBasePath}${item.id}.jpg`
//           } else {
//             return {
//               thumbnail: `${mediaFilesBasePath}${item.thumb}-thumb.jpg`,
//               video: `${mediaFilesBasePath}${item.video}-video.webm`
//             }
//           }
//         })
//         .filter((item): item is MediaType => item !== null) // Filter out any null entries
//     }
//   } catch (error: any) {
//     console.error(
//       `[LazyLoad] Error fetching or parsing media manifest for step ID ${step.id}:`,
//       error
//     )
//   }
//   return []
// }

async function fetchStepDetails(
  continent: Continent,
  country: Country,
  continentIndex: number,
  countryIndex: number,
  step: Step
): Promise<StepDetails> {
  const stepDirUrl = encodeURI(
    [
      '/data',
      'trip',
      contDirName(continentIndex, continent),
      countryDirName(countryIndex, country),
      stepDirName(step)
    ].join('/')
  )

  const descriptionContent: string = await fetchStepDescription(
    step,
    stepDirUrl.concat('/description.html')
  )
  // const mediaContent: MediaType[] = await fetchStepMediaManifest(
  //   step,
  //   stepDirUrl.concat('/media_manifest.json')
  // )

  return {
    description: descriptionContent
    // media: mediaContent
  }
}

// Internal state to manage loading for each proxied Step object
interface StepProxyInternalState {
  _isDetailsLoaded: boolean
  _isDetailsLoading: boolean
  _detailsLoadPromise: Promise<void> | null
  _detailsError: Error | null
}

export function createLazyLoadedStepProxy(
  continent: Continent,
  country: Country,
  continentIndex: number,
  countryIndex: number,
  initialStepData: BaseStep
): Step {
  // `internalState` keeps track of the loading status for THIS specific step's details.
  // It's reactive so Vue can pick up changes to loading flags.
  const internalState: StepProxyInternalState = reactive({
    _isDetailsLoaded: false,
    _isDetailsLoading: false,
    _detailsLoadPromise: null,
    _detailsError: null
  })

  // `actualStep` is the underlying object that the proxy wraps.
  // It's reactive so Vue components using it update when properties change.
  // Initialize with base data and placeholder for lazy-loaded properties.
  const actualStep: Step = reactive({
    ...initialStepData,
    description: '' // Will be set after loading
    // media: [] // Will be set after loading
  })

  const proxyHandler: ProxyHandler<Step> = {
    get(target, prop, receiver) {
      // 1. If accessing a 'base' property (always available) or an internal proxy state property
      if (
        [
          'id',
          'name',
          'shortName',
          'date',
          'degrees',
          '_isDetailsLoaded',
          '_isDetailsLoading',
          '_detailsError'
        ].includes(prop as string)
      ) {
        // We handle internal state properties by returning them directly from `internalState`
        // if they are requested (useful for debugging or displaying loading status).
        if (prop === '_isDetailsLoaded') return internalState._isDetailsLoaded
        if (prop === '_isDetailsLoading') return internalState._isDetailsLoading
        if (prop === '_detailsError') return internalState._detailsError
        // For actual Step properties, reflect from the target
        return Reflect.get(target, prop, receiver)
      }

      // 2. If accessing a lazy-loaded property (description, media)
      if (['description' /*, 'media'*/].includes(prop as string)) {
        // If details are already loaded, return the value immediately
        if (internalState._isDetailsLoaded) {
          return Reflect.get(target, prop, receiver)
        }

        // If a fetch for details is already in progress, return the existing promise
        if (internalState._detailsLoadPromise) {
          // Return a promise that resolves to the specific property's value
          // once the details are loaded. This forces the consumer to `await`.
          return internalState._detailsLoadPromise.then(() => Reflect.get(target, prop, receiver))
        }

        // If not loaded and not loading, initiate the fetch
        internalState._isDetailsLoading = true
        internalState._detailsError = null

        const loadPromise = fetchStepDetails(
          continent,
          country,
          continentIndex,
          countryIndex,
          actualStep
        )
          .then((details) => {
            // Assign fetched details to the actualStep object
            Object.assign(actualStep, details)
            internalState._isDetailsLoaded = true
          })
          .catch((error) => {
            console.error(`[LazyLoad] Error loading details for step ID ${actualStep.id}:`, error)
            internalState._detailsError = error
            // Optionally, revert the properties to empty/undefined on error
            actualStep.description = ''
            actualStep.media = []
            throw error // Re-throw to propagate the error
          })
          .finally(() => {
            internalState._isDetailsLoading = false
            internalState._detailsLoadPromise = null // Clear the promise reference
          })

        // Store the promise so subsequent accesses use the same one
        internalState._detailsLoadPromise = loadPromise

        // Return a promise that resolves to the specific property's value
        // after the loadPromise completes. This forces the consumer to `await`.
        return loadPromise.then(() => Reflect.get(target, prop, receiver))
      }

      // 3. For any other properties not explicitly handled, just reflect
      return Reflect.get(target, prop, receiver)
    }

    // Allow setting properties is unnecessary as for the trip is static.
    // set(target, prop, value, receiver) {
    //   return Reflect.set(target, prop, value, receiver)
    // }
  }

  // Return the Proxy wrapping the reactive `actualStep` object
  return new Proxy(actualStep, proxyHandler) as Step
}

export const loadTripData = async () => {
  if (trip.continents.length > 0) return // Trip data already loaded

  // Dynamically import the build-time generated metadata
  // Your build script for `trip.metadata.ts` should output:
  // export const tripData: Trip = { continents: [...] }; // `steps` here are `BaseStep[]`
  // export const countryStepsCounts: Map<number, number> = new Map(...);
  const { trip: initialTripData } = await import('/@/data/trip.metadata')

  // Now, iterate through the initial trip data and wrap each step in a proxy
  let continentIndex = 0
  let countryIndex = 0
  initialTripData.continents.forEach((continent) => {
    continent.countries.forEach((country) => {
      // Each `country.steps` from `initialTripData` now contains `BaseStep` objects.
      // We map these to `Step` objects wrapped in our lazy-loading proxy.
      country.steps = country.steps.map((baseStep) => {
        // Ensure baseStep is typed as BaseStep for clarity
        return createLazyLoadedStepProxy(
          continent,
          country,
          continentIndex,
          countryIndex,
          baseStep as BaseStep
        )
      })
      countryIndex++
    })
    continentIndex++
  })

  // Assign the processed trip data (with proxied steps) to the reactive `trip` object
  Object.assign(trip, initialTripData)
  console.log('Trip data loaded and steps proxied for lazy detail loading.')
}

export const useTripData = () => {
  if (!trip) {
    throw new Error('Trip data not loaded. Call loadTripData() first.')
  }

  const continents = computed(() => trip.continents)
  const countries = computed(() => continents.value.flatMap((continent) => continent.countries))
  const steps = computed(() => countries.value.flatMap((country) => country.steps))
  const dates = computed(() => steps.value.map((step) => step.date))

  // --- Logic for the currently displayed step (e.g., from route) ---
  const route = useRoute()
  const currentStep = ref<Step | null>(null)
  const isLoadingCurrentStepDetails = ref(false)
  const currentStepDetailsError = ref<Error | null>(null)

  watch(
    () => route.params.id, // Watch for changes in the route ID
    async (newId) => {
      currentStep.value = null // Reset current step when ID changes
      isLoadingCurrentStepDetails.value = true
      currentStepDetailsError.value = null

      try {
        const stepId = newId ? Number((newId as string).split('-')[0]) : 0 // Extract numeric ID from route param

        // Find the specific step object (which is a proxy)
        const foundStep = steps.value.find((s) => s.id === stepId)

        if (foundStep) {
          // *** THE CRUCIAL PART FOR LAZY LOADING DETAILS ***
          // Accessing `foundStep.description` (or `foundStep.media`)
          // will trigger the proxy's `get` trap.
          // If the details are not yet loaded, the proxy will return a Promise.
          // We must `await` this promise if we want to use the *actual value* immediately.

          // Trigger the load for description and media.
          // We await them to ensure they are available before setting currentStep.value.
          // Using Promise.all is good if you need multiple lazy properties before proceeding.
          await Promise.all(
            [foundStep.description, foundStep.media].map((p) => {
              // Filter out non-promises, as some might already be loaded
              return p instanceof Promise ? p : Promise.resolve(p)
            })
          )

          currentStep.value = foundStep // Assign the fully loaded (or now loading) step object
          // Its reactive properties will update when the awaits resolve.
        } else {
          throw new Error(`Step with ID ${stepId} not found.`)
        }
      } catch (error: any) {
        currentStepDetailsError.value = error
        console.error('Failed to load current step details:', error)
      } finally {
        isLoadingCurrentStepDetails.value = false
      }
    },
    { immediate: true } // Run immediately on component mount/initial route
  )

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

  const carouselHeight = '65vh' // I hate this hack, but my css skills ain't that great

  return {
    trip,
    continents,
    countries,
    steps,
    dates,
    highlights,
    music,
    people,
    carouselHeight,
    currentStep, // Reactive ref for the currently selected step (details loaded)
    isLoadingCurrentStepDetails, // Reactive flag for current step's detail loading
    currentStepDetailsError // Reactive ref for errors during current step detail loading
  }
}
