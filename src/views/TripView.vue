<template>
  <div class="flex flex-col items-center justify-start mx-auto max-w-4xl">
    <TripHeader />

    <article class="flex flex-col items-center justify-center w-full gap-4">
      <!-- <DestBar :destinations="continents" :currDest="currContinent" :chooseDest="chooseContinent" /> -->
      <DestBar
        :destinations="countries"
        :currDest="currCountry ?? defaultCountry"
        :chooseDest="chooseCountry"
      />
      <DestBar
        :destinations="steps"
        :dates
        :currDest="currStep ?? defaultStep"
        :chooseDest="chooseStep"
      />
    </article>

    <article class="flex flex-col items-center justify-center w-full gap-4 my-4">
      <StepDescription />
      <MediaCarousel v-if="activeCollection.stepslides.length || fullscreen" />
      <StepNavigationButtons v-if="activeCollection.stepslides.length || fullscreen" />
    </article>
  </div>
</template>

<script setup lang="ts">
import { useTripData } from '/@/composables/useTripData'
import { useTripState } from '/@/composables/useTripState'

// TODO: delete those below
const defaultCountry = {
  name: 'unknown',
  steps: []
}

const defaultStep = {
  name: 'unknown',
  date: 'unknown',
  degrees: '0',
  description: '',
  media: [],
  shortName: 'unknown',
  id: -1 // Assuming -1 is a placeholder for an unknown step
}

const {
  activeCollection,
  fullscreen,
  currStep,
  currCountry,
  chooseStep,
  chooseCountry
  //currContinent
  // chooseContinent
} = useTripState()
const { /*continents,*/ countries, steps, dates } = useTripData()
</script>

<style scoped></style>
