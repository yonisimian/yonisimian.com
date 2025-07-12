<template>
  <div class="w-full h-full bg-black flex items-center justify-center overflow-hidden">
    <SlideBlurBackground :src="src.thumbnail" />
    <video
      ref="videoRef"
      controls
      class="relative w-full h-full origin-center-center z-10 object-contain"
      :src="src.video"
    />
  </div>
</template>

<script setup lang="ts">
import { VideoURL } from '/@/types/trip'
import { ref } from 'vue'

defineProps<{
  src: VideoURL
}>()

const videoRef = ref<HTMLVideoElement | null>(null)
</script>

<style scoped></style>
