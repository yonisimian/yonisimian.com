<template>
  <div class="flex flex-col items-center justify-center gap-1 w-full">
    <h2 class="text-3xl">{{ currStep.name }}</h2>
    <p class="text-lg">
      <b>{{ currCountry.name }}</b> • {{ currStep.date }} • {{ currStep.degrees }}c
    </p>
    <div
      v-html="currStep.description"
      dir="rtl"
      class="w-full max-w-full text-justify prose prose-ul:pr-8 prose-ol:pr-8 prose-p:mb-2 prose-p:leading-relaxed"
    />
    <StepNavigationButtons />
  </div>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'

const { currStep, currCountry } = useTripState()
</script>

<style scoped></style>
