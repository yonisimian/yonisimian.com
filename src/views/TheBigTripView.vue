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
import { computed } from 'vue'
import {
  continents,
  countries,
  steps,
  dates,
  getCountryByStep,
  getContinentByStep,
  encodeURIStep,
  decodeURIStep
} from '/@/data/trip'
import { useRouter } from 'vue-router'
import type { Continent, Country, Step } from '/@/types/trip'

const router = useRouter()

const currStep = computed<Step>(() => {
  const id = router.currentRoute.value.params.id as string | undefined
  const found = id && decodeURIStep(id)
  return found || steps[0]
})
const currStepIndex = computed<number>(() => steps.indexOf(currStep.value))
const currCountry = computed<Country>(() => getCountryByStep(currStep.value))
const currContinent = computed<Continent>(() => getContinentByStep(currStep.value))

const chooseStep = (step: Step) => {
  const newId = encodeURIStep(step)
  if (router.currentRoute.value.params.id !== newId) {
    router.push(`/thebigtrip/${newId}`)
  }
}
const chooseCountry = (country: Country) => chooseStep(country.steps[0])
const chooseContinent = (continent: Continent) => chooseStep(continent.countries[0].steps[0])
const choosePrevStep = () => currStepIndex.value > 0 && chooseStep(steps[currStepIndex.value - 1])
const chooseNextStep = () =>
  currStepIndex.value < steps.length - 1 && chooseStep(steps[currStepIndex.value + 1])
</script>

<style scoped>
.safe {
  padding-right: calc(0.5 * env(safe-area-inset-bottom));
}
</style>
