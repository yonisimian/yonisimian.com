<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4 w-full mx-auto">
    <h2 class="text-3xl">{{ step.name }}</h2>
    <p class="text-lg">
      <b>{{ country.name }}</b> • {{ step.date }} • {{ step.degrees }}c
    </p>
    <p v-html="step.description" dir="rtl" class="w-full text-justify" />
    <MediaCarousel :step />
    <!-- prev and next step buttons with arrow -->
    <div class="flex items-center justify-between w-full mt-4">
      <span @click="$emit('prevStep')" class="hover:text-cyan-600 hover:cursor-pointer">
        ← {{ getPrevStep(step)?.name }}
      </span>
      <span @click="$emit('nextStep')" class="hover:text-cyan-600 hover:cursor-pointer">
        {{ getNextStep(step)?.name }} →
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Country, Step } from '/@/types/trip'
import { getPrevStep, getNextStep } from '/@/data/trip'
defineProps<{
  country: Country
  step: Step
}>()
</script>
