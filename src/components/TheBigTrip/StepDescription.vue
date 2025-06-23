<template>
  <div class="notebook-bg flex flex-col items-center justify-center gap-1 w-full">
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

<style scoped>
.notebook-bg {
  color: rgb(95, 44, 15);
  background: repeating-linear-gradient(to bottom, #ddd, #ddd 28px, #ccc 29px, #ddd 30px);
  padding: 1.5rem 5.5rem 1.5rem 2.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  position: relative;
}

.notebook-bg::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0.69in;
  width: 2px;
  height: 100%;
  background: #e11d48;
  z-index: 1;
  border-radius: 1px;
  opacity: 0.1;
}
</style>
