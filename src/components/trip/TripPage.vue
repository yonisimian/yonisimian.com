<template>
  <div class="flex flex-col items-center justify-start mx-auto max-w-4xl">
    <TripHeader />

    <article class="flex flex-col items-center justify-center w-full gap-4">
      <!-- <DestBar :destinations="continents" :currDest="currContinent" :chooseDest="chooseContinent" /> -->
      <DestBar :destinations="countries" :currDest="currCountry" :chooseDest="chooseCountry" />
      <DestBar :destinations="steps" :dates :currDest="currStep" :chooseDest="chooseStep" />
    </article>

    <article class="flex flex-col items-center justify-center w-full gap-4 my-4">
      <StepDescription />
      <MediaCarousel v-if="activeCollection.stepslides.length || fullscreen" />
      <StepNavigationButtons v-if="activeCollection.stepslides.length || fullscreen" />
    </article>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { loadTripAdditionalData, useTripData } from '/@/composables/useTripData'
import { useTripState } from '/@/composables/useTripState'

const { /*continents,*/ countries, steps, dates } = useTripData()
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

onMounted(() => {
  loadTripAdditionalData(currStep.value.id)
})
</script>

<style scoped></style>
