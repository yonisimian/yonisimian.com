<template>
  <NotebookBackground
    @touchStart="onTouchStart"
    @touchEnd="onTouchEnd"
    @mouseDown="onMouseDown"
    @mouseUp="onMouseUp"
    @wheel="onWheel"
  >
    <div class="flex flex-col items-center justify-center gap-1 w-full">
      <h2 class="text-3xl text-center">{{ currStep.name }}</h2>
      <p class="text-lg text-center">
        <b>{{ currCountry.name }}</b> • {{ currStep.date }} • {{ currStep.degrees }}°c
      </p>
      <div
        v-html="currStep.description"
        dir="rtl"
        class="w-full max-w-full text-justify prose prose-ul:pr-8 prose-ol:pr-8 prose-p:mb-2 prose-p:leading-relaxed"
      />
      <StepNavigationButtons class="mt-2" />
    </div>
  </NotebookBackground>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTripState } from '/@/composables/useTripState'

const { currStep, currCountry, choosePrevStep, chooseNextStep } = useTripState()

const startX = ref(0)

const minSwipeDistance = 50 // px

const onTouchStart = (e: TouchEvent) => (startX.value = e.changedTouches[0].screenX)
const onTouchEnd = (e: TouchEvent) => handleSwipe(e.changedTouches[0].screenX)
const onMouseDown = (e: MouseEvent) => (startX.value = e.screenX)
const onMouseUp = (e: MouseEvent) => handleSwipe(e.screenX)
const swipeStep = (dx: number) => (dx < 0 ? chooseNextStep() : dx > 0 && choosePrevStep())

const handleSwipe = (endX: number) => {
  const deltaX = endX - startX.value
  if (Math.abs(deltaX) < minSwipeDistance) return
  swipeStep(deltaX)
}

const onWheel = (e: WheelEvent) => {
  if (e.deltaY !== 0) return // Ignore vertical scroll
  e.preventDefault() // Prevent default scrolling behavior
  swipeStep(e.deltaX)
}
</script>

<style scoped></style>
