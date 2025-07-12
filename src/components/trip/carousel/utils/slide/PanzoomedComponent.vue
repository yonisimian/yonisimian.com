<template>
  <div
    ref="panzoomWrapper"
    class="w-full h-full flex items-center justify-center overflow-hidden"
    :class="wrapperClass"
    @mousedown="handlePanStart"
    @mousemove="handlePanMove"
    @touchstart="handlePanStart"
    @touchmove="handlePanMove"
    :style="mediaStyle"
    draggable="false"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { usePanzoom } from '/@/composables/usePanzoom'

const props = defineProps<{
  fullscreen?: boolean
}>()

const panzoomWrapper = ref<HTMLElement | null>(null)
const { pan, onPanStart, onPanMove, setClampFn, zoom, ZOOM_FACTOR } = usePanzoom()

const getSizes = () => {
  const el = panzoomWrapper.value
  if (!el) return { iw: 0, ih: 0, cw: 0, ch: 0 }
  const rect = el.getBoundingClientRect()
  return { iw: rect.width, ih: rect.height, cw: el.clientWidth, ch: el.clientHeight }
}

// Update clamp function whenever zoom changes
watch(
  () => zoom.value,
  async () => {
    await nextTick()
    setClampFn(() => {
      const { iw, ih } = getSizes()
      const maxX = Math.max(0, iw / ZOOM_FACTOR)
      const maxY = Math.max(0, ih / ZOOM_FACTOR)
      return { maxX, maxY }
    })
  }
)

const handlePanStart = (e: MouseEvent | TouchEvent) => zoom.value && onPanStart(e)
const handlePanMove = (e: MouseEvent | TouchEvent) => {
  if (zoom.value) {
    e.stopPropagation()
    onPanMove(e)
  }
}

const mediaStyle = computed(() => {
  const translate = `translate(${pan.value.x}px, ${pan.value.y}px)`
  const scale = zoom.value ? `scale(${ZOOM_FACTOR})` : 'scale(1)'
  return {
    transform: `${translate} ${scale}`
  }
})

const wrapperClass = computed(() =>
  props.fullscreen
    ? zoom.value
      ? 'cursor-grab active:cursor-grabbing'
      : 'cursor-zoom-in'
    : 'cursor-pointer'
)

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
