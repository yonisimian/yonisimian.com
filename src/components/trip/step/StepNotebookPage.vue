<template>
  <NotebookBackground
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
    @mouseDown="onMouseDown"
    @mouseUp="onMouseUp"
    @wheel="onWheel"
  >
    <template #page>
      <div class="relative flex flex-col items-center justify-center gap-1 w-full select-none">
        <NotebookTitle :step="currStep" />
        <NotebookSubtitle :step="currStep" :country="currCountry" />
        <NotebookDescription :description="currStep.description" />
      </div>
      <StepNavigationButtons v-if="currStep" class="mt-8 h-0" />
    </template>
    <template #margin>
      <div class="flex justify-center items-center">
        <ToolbarShare
          class="inline-flex rounded-full overflow-hidden mx-auto my-2.5"
          :shareText="`Check out my visit to ${activeCollection.name}`!"
        />
      </div>
    </template>
  </NotebookBackground>
</template>

<script setup lang="ts">
import NotebookDescription from './utils/NotebookDescription.vue'
import { useTripState } from '/@/composables/useTripState'

const { currStep, currCountry, activeCollection, choosePrevStep, chooseNextStep } = useTripState()

let startX = 0

const minSwipeDistance = 50 // px

const onTouchStart = (e: TouchEvent) => (startX = e.changedTouches[0].screenX)
const onTouchEnd = (e: TouchEvent) => handleSwipe(e.changedTouches[0].screenX)
const onMouseDown = (e: MouseEvent) => (startX = e.screenX)
const onMouseUp = (e: MouseEvent) => handleSwipe(e.screenX)

const swipeStep = (dx: number) => (dx < 0 ? chooseNextStep() : dx > 0 && choosePrevStep())

const handleSwipe = (endX: number) => {
  const deltaX = endX - startX
  if (Math.abs(deltaX) < minSwipeDistance) return
  swipeStep(deltaX)
}

const onWheel = (e: WheelEvent) => {
  if (e.deltaY !== 0) return // Ignore vertical scroll
  e.preventDefault() // Prevent scrolling the site itself
  swipeStep(e.deltaX)
}
</script>

<style scoped></style>
