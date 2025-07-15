<template>
  <div class="flex items-center justify-between w-full z-5">
    <div>
      <a v-if="prevStep" href="#" @click.prevent="choosePrevStep">← {{ prevStep.shortName }}</a>
    </div>
    <div>
      <a v-if="nextStep" href="#" @click.prevent="chooseNextStep">{{ nextStep.shortName }} →</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'

const { prevStep, nextStep, chooseNextStep, choosePrevStep } = useTripState()
</script>

<style scoped></style>
