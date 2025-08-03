<template>
  <h2 class="text-3xl">{{ step.name }}</h2>
</template>

<script setup lang="ts">
import { Step } from '/@/types/trip'

defineProps<{
  step: Step
}>()
</script>

<style scoped></style>
