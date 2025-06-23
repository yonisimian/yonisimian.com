<template>
  <Background />
  <div class="flex flex-col items-center justify-center mx-auto max-w-5xl">
    <TheTitle />

    <DestBar :destinations="continents" :currDest="currContinent" :chooseDest="chooseContinent" />
    <DestBar :destinations="countries" :currDest="currCountry" :chooseDest="chooseCountry" />
    <DestBar :destinations="steps" :dates :currDest="currStep" :chooseDest="chooseStep" />

    <StepView :step="currStep" :country="currCountry" />

    <ScrollToEdge direction="up" class="fixed top-2 right-1 sm:right-2" />
    <ScrollToEdge direction="down" class="fixed bottom-2 right-1 sm:right-2 safe" />
  </div>
</template>

<script setup lang="ts">
import { continents, countries, steps, dates } from '/@/data/trip'
import { useTripState } from '/@/composables/useTripState'

const { currStep, currCountry, currContinent, chooseStep, chooseCountry, chooseContinent } =
  useTripState()
</script>

<style scoped>
.safe {
  padding-right: calc(0.5 * env(safe-area-inset-bottom));
}
</style>
