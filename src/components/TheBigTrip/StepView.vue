<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4 w-full mx-auto">
    <h2 class="text-3xl">{{ currStep.name }}</h2>
    <p class="text-lg">
      <b>{{ currCountry.name }}</b> • {{ currStep.date }} • {{ currStep.degrees }}c
    </p>
    <p v-html="currStep.description" dir="rtl" class="w-full text-justify" />
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
