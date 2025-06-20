<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4 w-full mx-auto">
    <h2 class="text-3xl">{{ step.name }}</h2>
    <p class="text-lg">
      <b>{{ country.name }}</b> • {{ step.date }} • {{ step.degrees }}c
    </p>
    <p v-html="step.description" dir="rtl" class="w-full text-justify" />
    <MediaCarousel :step />
  </div>
</template>

<script setup lang="ts">
import { Country, Step } from '/@/types/trip'
defineProps<{
  country: Country
  step: Step
}>()
</script>
