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
        <div class="w-full">
          <h2 class="text-3xl text-center">{{ currStep.name }}</h2>
          <p class="text-lg text-center">
            <b>{{ currCountry?.name || 'Loading Country...' }}</b> • {{ currStep.date }} •
            {{ stepDegree(currStep) }}
          </p>
          <div
            v-if="currStep.description"
            v-html="currStep.description"
            dir="rtl"
            class="w-full max-w-full text-justify prose prose-ul:pr-8 prose-ol:pr-8 prose-p:mb-2 prose-p:leading-relaxed"
          />
          <div v-else class="w-full h-full text-center p-4" dir="rtl">
            <div class="animate-pulse flex flex-col items-start gap-4">
              <div class="h-8 opacity-50 bg-gray-400 rounded w-3/8"></div>
              <div class="h-6 opacity-50 bg-gray-400 rounded w-1/4"></div>
              <div class="h-4 opacity-50 bg-gray-400 rounded w-1/2"></div>
              <div class="h-4 opacity-50 bg-gray-400 rounded w-3/8"></div>
              <div class="h-8 opacity-50 bg-gray-400 rounded w-1/3"></div>
            </div>
          </div>
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
import { stepDegree } from '/@/functions/trip'

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
