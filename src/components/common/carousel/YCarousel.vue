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
          :currentIndex="index"
        />
      </div>
    </div>

    <slot name="navigation" :prev="prevSlide" :next="nextSlide" :currentSlide="currentSlide" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, readonly } from 'vue'

interface Props {
  modelValue?: number
  items: any[]
  itemsToShow?: number
  height?: string
  touchDrag?: boolean
  mouseDrag?: boolean
  mouseWheel?: boolean
  transition?: number
  gap?: number
  autoplay?: number
  loop?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  itemsToShow: 1,
  height: 'auto',
  touchDrag: true,
  mouseDrag: true,
  mouseWheel: true,
  transition: 300,
  gap: 0,
  autoplay: 0,
  loop: false
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
    display: 'flex',
    gap: `${props.gap}px`
  }
})

const slideStyles = computed(() => ({
  width: `${100 / props.itemsToShow}%`,
  flexShrink: 0
}))

// Navigation methods
const nextSlide = () => {
  if (currentSlide.value < props.items.length - 1) {
    currentSlide.value++
  } else if (props.loop) {
    currentSlide.value = 0
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else if (props.loop) {
    currentSlide.value = props.items.length - props.itemsToShow
  }
}

const goToSlide = (index: number) => {
  currentSlide.value = Math.max(0, Math.min(index, props.items.length - props.itemsToShow))
}

// Touch/Mouse handling
const handleStart = (clientX: number) => {
  if (!props.touchDrag && !props.mouseDrag) return
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
const handleTouchStart = (e: TouchEvent) => {
  handleStart(e.touches[0].clientX)
}

const handleTouchMove = (e: TouchEvent) => {
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
  if (!props.mouseWheel) return
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

// Autoplay
let autoplayInterval: ReturnType<typeof setInterval> | null = null

const startAutoplay = () => {
  if (props.autoplay > 0) {
    autoplayInterval = setInterval(nextSlide, props.autoplay)
  }
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
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

watch(
  () => props.autoplay,
  () => {
    stopAutoplay()
    startAutoplay()
  }
)

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})

// Expose methods for parent components
defineExpose({
  nextSlide,
  prevSlide,
  goToSlide,
  currentSlide: readonly(currentSlide)
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
