<template>
  <div class="flex items-center justify-between w-full mt-4">
    <div @click="choosePrevStep" class="hover:text-cyan-600 hover:cursor-pointer">
      <span v-if="prevStep">← {{ prevStep.shortName }}</span>
    </div>
    <div @click="chooseNextStep" class="hover:text-cyan-600 hover:cursor-pointer">
      <span v-if="nextStep"> {{ nextStep.shortName }} → </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'

const { prevStep, nextStep, chooseNextStep, choosePrevStep } = useTripState()
</script>

<style scoped></style>
