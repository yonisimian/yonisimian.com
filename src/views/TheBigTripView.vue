<template>
  <Background />
  <div class="flex flex-col items-center justify-center mx-auto max-w-5xl">
    <div class="flex flex-col items-center justify-center gap-4 p-4 w-full">
      <h1 class="text-6xl font-bold">The Big Trip</h1>
      <p class="text-lg">Explore the world through my journey</p>
      <p class="text-sm text-gray-500 -mt-3">Click on a destination to start exploring</p>
    </div>
    <DestBar :destinations="continents" :currDest="currContinent" :chooseDest="chooseContinent" />
    <DestBar :destinations="countries" :currDest="currCountry" :chooseDest="chooseCountry" />
    <DestBar :destinations="steps" :dates :currDest="currStep" :chooseDest="chooseStep" />

    <StepView
      :step="currStep"
      :country="currCountry"
      @prevStep="choosePrevStep"
      @nextStep="chooseNextStep"
    />

    <ScrollToEdge direction="up" class="fixed top-2 right-1 sm:right-2" />
    <ScrollToEdge direction="down" class="fixed bottom-2 right-1 sm:right-2 safe" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import {
  continents,
  countries,
  steps,
  getCountryByStep,
  getContinentByStep,
  encodeURIStep,
  decodeURIStep
} from '/@/data/trip'
import { useRouter } from 'vue-router'
import type { Continent, Country, Step } from '/@/types/trip'

const router = useRouter()

const currStep = ref<Step>(steps[0])
const currStepIndex = computed<number>(() => steps.findIndex((s) => s.id === currStep.value.id))
const currCountry = computed<Country>(() => getCountryByStep(currStep.value))
const currContinent = computed<Continent>(() => getContinentByStep(currStep.value))

const dates: string[] = steps.map((step) => step.date)

const setStepFromRoute = () => {
  const id = router.currentRoute.value.params.id as string | undefined
  const found = id && decodeURIStep(id)
  if (found) currStep.value = found
}

onMounted(() => {
  setStepFromRoute()
})

watch(
  () => router.currentRoute.value.params.id,
  () => {
    setStepFromRoute()
  }
)

const updateURL = () => {
  router.push(`/thebigtrip/${encodeURIStep(currStep.value)}`)
}

const chooseContinent = (continent: Continent) => {
  currStep.value = continent.countries[0].steps[0]
  updateURL()
}
const chooseCountry = (country: Country) => {
  currStep.value = country.steps[0]
  updateURL()
}
const chooseStep = (step: Step) => {
  currStep.value = step
  updateURL()
}

const choosePrevStep = () => {
  const prevIndex = currStepIndex.value - 1
  if (prevIndex >= 0) {
    chooseStep(steps[prevIndex])
  }
}

const chooseNextStep = () => {
  const nextIndex = currStepIndex.value + 1
  if (nextIndex < steps.length) {
    chooseStep(steps[nextIndex])
  }
}
</script>

<style scoped>
.safe {
  padding-right: calc(0.5 * env(safe-area-inset-bottom));
}
</style>
