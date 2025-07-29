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
        <div v-if="isLoadingCurrentStepDetails" class="text-center p-8">
          <p class="text-xl text-gray-600">Loading step details...</p>
          <div class="animate-pulse flex flex-col items-center gap-4 mt-4">
            <div class="h-8 bg-gray-300 rounded w-3/4"></div>
            <div class="h-6 bg-gray-300 rounded w-1/2"></div>
            <div class="h-4 bg-gray-300 rounded w-full"></div>
            <div class="h-4 bg-gray-300 rounded w-5/6"></div>
            <div class="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
        </div>

        <div v-else-if="currentStepDetailsError" class="text-center p-8 text-red-600">
          <p class="text-xl">Error loading step details!</p>
          <p>{{ currentStepDetailsError.message }}</p>
          <p class="text-sm text-gray-500">Please try refreshing the page.</p>
        </div>

        <div v-else-if="currStep" class="w-full">
          <h2 class="text-3xl text-center">{{ currStep.name }}</h2>
          <p class="text-lg text-center">
            <b>{{ currCountry?.name || 'Loading Country...' }}</b> • {{ currStep.date }} •
            {{ currStep.degrees }}°c
          </p>
          <div
            v-if="currStep.description"
            v-html="currStep.description"
            dir="rtl"
            class="w-full max-w-full text-justify prose prose-ul:pr-8 prose-ol:pr-8 prose-p:mb-2 prose-p:leading-relaxed"
          />
          <div
            v-else
            class="w-full max-w-full text-justify prose prose-ul:pr-8 prose-ol:pr-8 prose-p:mb-2 prose-p:leading-relaxed"
          >
            <p class="text-center text-gray-500">Description not available.</p>
          </div>
        </div>

        <div v-else class="text-center p-8">
          <p class="text-xl text-gray-600">Waiting for trip data...</p>
        </div>
      </div>
      <StepNavigationButtons v-if="currStep" class="mt-8 h-0" />
    </template>
    <template #margin>
      <div class="flex justify-end items-center">
        <ToolbarShare
          class="absolute top-3.2 right-3.2 inline-flex rounded-full overflow-hidden"
          :shareText="`Check out my visit to ${activeCollection?.name || 'the collection'}`!"
        />
      </div>
    </template>
  </NotebookBackground>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'
// Import other components if they are not globally registered
// import NotebookBackground from './NotebookBackground.vue'
// import StepNavigationButtons from './StepNavigationButtons.vue'
// import ToolbarShare from './ToolbarShare.vue'

const {
  currStep,
  currCountry,
  activeCollection, // Assuming activeCollection is also provided by useTripState or another hook
  isLoadingCurrentStepDetails, // NEW: Import this flag
  currentStepDetailsError, // NEW: Import this flag
  choosePrevStep,
  chooseNextStep
} = useTripState()

let startX = 0

const minSwipeDistance = 50 // px

const onTouchStart = (e: TouchEvent) => (startX = e.changedTouches[0].screenX)
const onTouchEnd = (e: TouchEvent) => handleSwipe(e.changedTouches[0].screenX)
const onMouseDown = (e: MouseEvent) => (startX = e.screenX)
const onMouseUp = (e: MouseEvent) => handleSwipe(e.screenX)

// The swipeStep function correctly calls chooseNextStep/choosePrevStep
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
