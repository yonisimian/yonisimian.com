<template>
  <div
    class="notebook-bg flex flex-col items-center justify-center gap-1 w-full"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    @wheel="onWheel"
  >
    <h2 class="text-3xl">{{ currStep.name }}</h2>
    <p class="text-lg">
      <b>{{ currCountry.name }}</b> • {{ currStep.date }} • {{ currStep.degrees }}°c
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
import { ref } from 'vue'
import { useTripState } from '/@/composables/useTripState'

const { currStep, currCountry, choosePrevStep, chooseNextStep } = useTripState()

const startX = ref(0)

const minSwipeDistance = 50 // px

const onTouchStart = (e: TouchEvent) => (startX.value = e.changedTouches[0].screenX)
const onTouchEnd = (e: TouchEvent) => handleSwipe(e.changedTouches[0].screenX)
const onMouseDown = (e: MouseEvent) => (startX.value = e.screenX)
const onMouseUp = (e: MouseEvent) => handleSwipe(e.screenX)

const handleSwipe = (endX: number) => {
  const deltaX = endX - startX.value
  if (Math.abs(deltaX) < minSwipeDistance) return
  if (deltaX < 0) {
    chooseNextStep()
  } else if (deltaX > 0) {
    choosePrevStep()
  }
}

const onWheel = (e: WheelEvent) => {
  if (e.deltaY !== 0) return // Ignore vertical scroll
  e.preventDefault() // Prevent default scrolling behavior
  if (e.deltaX < 0) {
    choosePrevStep()
  } else if (e.deltaX > 0) {
    chooseNextStep()
  }
}
</script>

<style scoped>
.notebook-bg {
  color: rgb(95, 44, 15);
  background: repeating-linear-gradient(to bottom, #ddd, #ddd 28px, #ccc 29px, #ddd 30px);
  padding: 1.5rem 5.5rem 1.5rem 2.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  position: relative;
  user-select: none; /* Prevent text selection during drag */
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

.dark .notebook-bg {
  color: #ded6c7;
  background: repeating-linear-gradient(
    to bottom,
    #23272e,
    #23272e 28px,
    #2d323b 29px,
    #23272e 30px
  );
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

.dark .notebook-bg::before {
  background: #852413;
  opacity: 0.25;
}
</style>
