<template>
  <div class="flex flex-row items-center justify-between w-full">
    <p>{{ currStep.date }}</p>
    <p>slide {{ currSlides.length ? slide + 1 : 0 }} / {{ currSlides.length }}</p>
    <p>{{ currCountry.name }}, {{ currStep.degrees }}°c</p>
  </div>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'

const { currStep, currSlides, currCountry, slide } = useTripState()
</script>
