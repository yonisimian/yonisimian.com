<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4 w-full mx-auto">
    <h2 class="text-3xl">{{ currStep.name }}</h2>
    <p class="text-lg">
      <b>{{ currCountry.name }}</b> • {{ currStep.date }} • {{ currStep.degrees }}c
    </p>
    <div
      v-html="currStep.description"
      dir="rtl"
      class="w-full max-w-full text-justify prose prose-ul:pr-8 prose-ol:pr-8 prose-p:mb-2 prose-p:leading-relaxed"
    />
    <MediaCarousel />
    <!-- prev and next step buttons with arrows -->
    <div class="flex items-center justify-between w-full mt-4">
      <span @click="choosePrevStep" class="hover:text-cyan-600 hover:cursor-pointer">
        ← {{ prevStep?.name }}
      </span>
      <span @click="chooseNextStep" class="hover:text-cyan-600 hover:cursor-pointer">
        {{ nextStep?.name }} →
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'

const { currStep, prevStep, nextStep, currCountry, chooseNextStep, choosePrevStep } = useTripState()
</script>
