<template>
  <div class="w-full h-full bg-black flex items-center justify-center overflow-hidden">
    <SlideBlurBackground :src />
    <PanzoomedComponent class="w-full h-full" :fullscreen>
      <ResponsiveImage
        ref="imageRef"
        :src="src"
        mode="full"
        fetchpriority="high"
        :alt="`Image from trip slide ${slide}`"
        imgClass="w-full h-full origin-center-center z-10 object-contain"
        @click="hangleImageClick"
      />
    </PanzoomedComponent>
  </div>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'
import { PhotoURL } from '/@/types/trip'
import { watch, ref } from 'vue'
import { usePanzoom } from '/@/composables/usePanzoom'

const { slide, activeCollection, fullscreen, openFullscreen } = useTripState()

defineProps<{
  src: PhotoURL
  rot: number // rotation in degrees
}>()

const imageRef = ref<HTMLImageElement | null>(null)

const { pan, zoom, isDragging, toggleZoom } = usePanzoom()

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
    console.log('about to call toggleZoom')
    toggleZoom()
  } else {
    openFullscreen()
  }
  // openFullscreen()
}

watch([slide, activeCollection], () => {
  pan.value = { x: 0, y: 0 }
  zoom.value = false
})

// peset pan when zoom changes
watch(zoom, () => {
  pan.value = { x: 0, y: 0 }
})
</script>

<style scoped></style>
