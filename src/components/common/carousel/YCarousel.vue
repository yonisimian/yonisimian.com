<template>
  <div class="carousel-container" :style="{ height }">
    <div
      class="carousel-track"
      :style="trackStyles"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @mousedown="handleMouseStart"
      @mousemove="handleMouseMove"
      @mouseup="handleMouseEnd"
      @mouseleave="handleMouseEnd"
      @wheel="handleWheel"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="carousel-slide"
        :style="slideStyles"
        @click.capture="handleSlideClick"
      >
        <slot
          name="slide"
          :item="item"
          :index="index"
          :isActive="index === currentSlide"
        />
      </div>
    </div>

    <slot name="navigation" :prev="prevSlide" :next="nextSlide" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface Props {
  modelValue?: number
  items: any[]
  itemsToShow?: number
  height?: string
  transition?: number
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  itemsToShow: 1,
  height: 'auto',
  transition: 300
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const currentSlide = ref(props.modelValue)
const isDragging = ref(false)
const justFinishedDragging = ref(false)
const startX = ref(0)
const currentX = ref(0)
const dragOffset = ref(0)
const dragDistance = ref(0)

// Computed styles
const trackStyles = computed(() => {
  const slideWidth = 100 / props.itemsToShow
  const centerOffset = (props.itemsToShow - 1) / 2
  const translateX =
    -(currentSlide.value - centerOffset) * slideWidth + (dragOffset.value / window.innerWidth) * 100

  return {
    transform: `translateX(${translateX}%)`,
    transition: isDragging.value ? 'none' : `transform ${props.transition}ms ease`,
    display: 'flex'
  }
})

const slideStyles = computed(() => ({
  width: `${100 / props.itemsToShow}%`,
  flexShrink: 0
}))

// Navigation methods
const nextSlide = () => {
  if (currentSlide.value < props.items.length - 1) currentSlide.value++
}

const prevSlide = () => {
  if (currentSlide.value > 0) currentSlide.value--
}

// Touch/Mouse handling
const handleStart = (clientX: number) => {
  isDragging.value = true
  justFinishedDragging.value = false
  startX.value = clientX
  currentX.value = clientX
  dragDistance.value = 0
}

const handleMove = (clientX: number) => {
  if (!isDragging.value) return
  currentX.value = clientX
  dragOffset.value = currentX.value - startX.value
  dragDistance.value = Math.abs(dragOffset.value)
}

const handleEnd = () => {
  if (!isDragging.value) return

  const threshold = 10 // Minimum drag distance to be considered a drag
  justFinishedDragging.value = dragDistance.value > threshold

  const swipeThreshold = window.innerWidth * 0.1 // 10% of screen width

  if (Math.abs(dragOffset.value) > swipeThreshold) {
    if (dragOffset.value > 0) {
      prevSlide()
    } else {
      nextSlide()
    }
  }

  isDragging.value = false
  dragOffset.value = 0

  // Reset justFinishedDragging after a short delay to allow click handlers to check it
  setTimeout(() => {
    justFinishedDragging.value = false
  }, 100)
}

// Event handlers
// Pinches and pans of a natively zoomed page belong to the browser, not to slide swiping
const isNativeGesture = (e: TouchEvent) =>
  e.touches.length > 1 || (window.visualViewport?.scale ?? 1) > 1.01

const handleTouchStart = (e: TouchEvent) => {
  if (isNativeGesture(e)) return
  handleStart(e.touches[0].clientX)
}

const handleTouchMove = (e: TouchEvent) => {
  if (isNativeGesture(e)) {
    isDragging.value = false
    dragOffset.value = 0
    return
  }
  e.preventDefault()
  handleMove(e.touches[0].clientX)
}

const handleTouchEnd = () => {
  handleEnd()
}

const handleMouseStart = (e: MouseEvent) => {
  e.preventDefault()
  handleStart(e.clientX)
}

const handleMouseMove = (e: MouseEvent) => {
  handleMove(e.clientX)
}

const handleMouseEnd = () => {
  handleEnd()
}

const handleWheel = (e: WheelEvent) => {
  e.preventDefault()

  if (e.deltaY > 0) {
    nextSlide()
  } else {
    prevSlide()
  }
}

const handleSlideClick = (e: Event) => {
  if (justFinishedDragging.value || isDragging.value) {
    e.preventDefault()
    e.stopPropagation()
  }
}

// Watchers
watch(
  () => props.modelValue,
  (newValue) => {
    currentSlide.value = newValue
  }
)

watch(currentSlide, (newValue) => {
  emit('update:modelValue', newValue)
})
</script>

<style scoped>
.carousel-container {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  width: 100%;
  height: 100%;
  user-select: none;
}

.carousel-slide {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
