// basically the state of TheBigTrip
import { computed } from 'vue'
import { useQueryParam } from './useQueryParam'
import { useRouter, useRoute } from 'vue-router'
import { Continent, Country, Step } from '/@/types/trip'
import {
  decodeURIStep,
  encodeURIStep,
  getContinentByStep,
  getCountryByStep,
  steps
} from '/@/data/trip'

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
  const prevStep = computed<Step | undefined>(() =>
    currStepIndex.value > 0 ? steps[currStepIndex.value - 1] : undefined
  )
  const nextStep = computed<Step | undefined>(() =>
    currStepIndex.value < steps.length - 1 ? steps[currStepIndex.value + 1] : undefined
  )
  const currCountry = computed<Country>(() => getCountryByStep(currStep.value))
  const currContinent = computed<Continent>(() => getContinentByStep(currStep.value))

  // ===== Navigation logic ===== //

  const chooseStep = (step: Step) => {
    const newId = encodeURIStep(step)
    if (route.params.id !== newId) {
      router.push(`/thebigtrip/${newId}`)
    }
  }
  const chooseCountry = (country: Country) => chooseStep(country.steps[0])
  const chooseContinent = (continent: Continent) => chooseStep(continent.countries[0].steps[0])
  const choosePrevStep = () => currStepIndex.value > 0 && chooseStep(steps[currStepIndex.value - 1])
  const chooseNextStep = () =>
    currStepIndex.value < steps.length - 1 && chooseStep(steps[currStepIndex.value + 1])

  // ===== Query string state ===== //

  const slide = useQueryParam('slide', {
    default: 0,
    parse: (v) => parseInt(v || '0'),
    stringify: (v) => v.toString()
  })

  const fullscreenRaw = useQueryParam('fullscreen', {
    default: '',
    parse: (v) => v || ''
  })

  // Clean boolean wrapper for fullscreen
  const fullscreen = computed<boolean>({
    get: () => fullscreenRaw.value === 'true',
    set: (val: boolean) => {
      fullscreenRaw.value = val ? 'true' : ''
    }
  })

  return {
    currStep,
    prevStep,
    nextStep,
    currCountry,
    currContinent,
    chooseStep,
    chooseCountry,
    chooseContinent,
    choosePrevStep,
    chooseNextStep,
    slide,
    fullscreen
  }
}
