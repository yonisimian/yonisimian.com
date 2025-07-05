<template>
  <div
    ref="slideRef"
    class="w-full h-full bg-black flex items-center justify-center overflow-hidden"
    :class="
      fullscreen
        ? zoom
          ? 'cursor-grab active:cursor-grabbing'
          : 'cursor-zoom-in'
        : 'cursor-pointer'
    "
  >
    <SlideBlurBackground :src />
    <img
      ref="imageRef"
      :class="mediaClass"
      :src
      @click="hangleImageClick"
      @mousedown="handlePanStart"
      @mousemove="handlePanMove"
      @touchstart="handlePanStart"
      @touchmove="handlePanMove"
      :style="mediaStyle"
      draggable="false"
    />
  </div>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'
import { carouselHeight } from '/@/data/trip'
import { PhotoURL } from '/@/types/trip'
import { watch, ref, computed, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { usePanzoom } from '/@/composables/usePanzoom'

const { slide, activeCollection, fullscreen, openFullscreen } = useTripState()

const props = defineProps<{
  src: PhotoURL
  rot?: number // rotation in degrees
}>()

const slideRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLImageElement | null>(null)

const getSizes = () => {
  const image = imageRef.value
  // const container = slideRef.value?.$el as HTMLElement
  if (!image) return { iw: 0, ih: 0, cw: 0, ch: 0 }
  const rect = image.getBoundingClientRect()
  const iw = rect.width
  const ih = rect.height
  const cw = image.clientWidth
  const ch = image.clientHeight
  return { iw, ih, cw, ch }
}

const { pan, onPanStart, onPanMove, isDragging, setClampFn, zoom, toggleZoom, ZOOM_FACTOR } =
  usePanzoom()

// Update clamp function whenever zoom/rotation changes
watch(
  () => [zoom.value, props.rot],
  async () => {
    await nextTick()
    setClampFn(() => {
      const { iw, ih /*, cw, ch*/ } = getSizes()
      // TODO: use cw and ch to calculate maxX and maxY properly
      const maxX = Math.max(0, iw / ZOOM_FACTOR)
      const maxY = Math.max(0, ih / ZOOM_FACTOR)
      return { maxX, maxY }
    })
  }
)

watch(fullscreen, (isFullscreen) => {
  if (!isFullscreen) {
    zoom.value = false
    pan.value = { x: 0, y: 0 }
  }
})

const hangleImageClick = (e: MouseEvent | TouchEvent) => {
  if (isDragging.value) {
    e.stopPropagation()
  }
  if (fullscreen.value && !isDragging.value) {
    toggleZoom()
  } else {
    openFullscreen()
  }
}

const handlePanStart = (e: MouseEvent | TouchEvent) => zoom.value && onPanStart(e)
const handlePanMove = (e: MouseEvent | TouchEvent) =>
  zoom.value && (e.stopPropagation(), onPanMove(e))

const mediaClass = computed(() => `relative w-full h-full origin-center-center z-10 object-contain`)
const mediaStyle = computed(() => {
  const rotate = `rotate(${props.rot}deg)`
  const translate = `translate(${pan.value.x}px, ${pan.value.y}px)`
  const scale = zoom.value ? `scale(${ZOOM_FACTOR})` : 'scale(1)'

  // swap width/height to fill container
  return {
    transform: `${translate} ${rotate} ${scale}`,
    ...((props.rot === 90 || props.rot === 270) && { width: carouselHeight, height: '56rem' })
  }
})

watch([slide, activeCollection], () => {
  pan.value = { x: 0, y: 0 }
  zoom.value = false
})

// peset pan when zoom changes
watch(zoom, () => {
  pan.value = { x: 0, y: 0 }
})

// Optional: prevent scrolling on touch when zoomed
onMounted(() => {
  const preventScroll = (e: TouchEvent) => {
    if (zoom.value) e.preventDefault()
  }
  window.addEventListener('touchmove', preventScroll, { passive: false })
  onBeforeUnmount(() => {
    window.removeEventListener('touchmove', preventScroll)
  })
})
</script>

<style scoped></style>
