<template>
  <SlideBlurBackground :src="src.thumbnail" />
  <RotatedComponent class="w-full h-full" :rot="rot">
    <video
      ref="videoRef"
      controls
      class="relative w-full h-full origin-center-center z-10 object-contain"
      :src="src.video"
    />
  </RotatedComponent>
</template>

<script setup lang="ts">
import { VideoURL } from '/@/types/trip'
import { ref } from 'vue'

defineProps<{
  src: VideoURL
  rot: number // rotation in degrees
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
</script>

<style scoped></style>
