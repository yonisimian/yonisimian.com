<template>
  <div
    ref="slideRef"
    class="w-full h-full bg-black flex items-center justify-center overflow-hidden"
  >
    <SlideBlurBackground :src="src.thumbnail" />
    <video ref="videoRef" controls :class="mediaClass" :src="src.video" :style="mediaStyle" />
  </div>
</template>

<script setup lang="ts">
import { carouselHeight } from '/@/data/trip'
import { VideoURL } from '/@/types/trip'
import { ref, computed } from 'vue'

const props = defineProps<{
  src: VideoURL
  rot: number // rotation in degrees
}>()

const slideRef = ref<HTMLElement | null>(null)
const videoRef = ref<HTMLVideoElement | null>(null)

const mediaClass = computed(() => `relative w-full h-full origin-center-center z-10 object-contain`)
const mediaStyle = computed(() => ({
  transform: `rotate(${props.rot}deg)`,
  ...((props.rot === 90 || props.rot === 270) && { width: carouselHeight, height: '56rem' })
}))
</script>

<style scoped></style>
