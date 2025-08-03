<template>
  <div class="text-lg flex flex-row items-center justify-center gap-1.25">
    <span>
      <b>{{ country?.name || 'Loading Country...' }}</b>
    </span>
    <span>•</span>
    <span>{{ step.date }}</span>
    <span>•</span>
    <span>{{ stepDegree(step) }}</span>
  </div>
</template>

<script setup lang="ts">
import { Country, Step } from '/@/types/trip'
import { stepDegree } from '/@/functions/trip'

defineProps<{
  step: Step
  country: Country
}>()
</script>

<style scoped></style>
