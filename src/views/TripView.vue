<template>
  <div class="flex flex-col items-center justify-center mx-auto max-w-4xl">
    <TripHeader />

    <article class="flex flex-col items-center justify-center w-full gap-4">
      <!-- <DestBar :destinations="continents" :currDest="currContinent" :chooseDest="chooseContinent" /> -->
      <DestBar :destinations="countries" :currDest="currCountry" :chooseDest="chooseCountry" />
      <DestBar :destinations="steps" :dates :currDest="currStep" :chooseDest="chooseStep" />
    </article>

    <article class="flex flex-col items-center justify-center w-full gap-4 my-4">
      <StepDescription />
      <MediaCarousel />
    </article>
  </div>
</template>

<script setup lang="ts">
import { /*continents,*/ countries, steps, dates } from '/@/data/trip'
import { useTripState } from '/@/composables/useTripState'

const { currStep, currCountry, chooseStep, chooseCountry /*, currContinent, chooseContinent*/ } =
  useTripState()
</script>

<style scoped></style>
