<template>
  <div class="grid grid-cols-3 items-center w-full">
    <p class="text-left">{{ step.date }}</p>
    <p class="text-center">slide {{ slidesCount ? slide + 1 : 0 }} / {{ slidesCount }}</p>
    <p class="text-right">{{ step.shortName }}, {{ getCountryByStep(step).name }}</p>
  </div>
</template>

<script setup lang="ts">
import { getCountryByStep } from '/@/data/trip'
import { Step } from '/@/types/trip'

defineProps<{
  slidesCount: number
  slide: number
  step: Step
}>()
</script>
