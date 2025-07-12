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
import { ref, watch } from 'vue'
import { useTripState } from '/@/composables/useTripState'

defineProps<{
  src: VideoURL
}>()

const { slide } = useTripState()

const videoRef = ref<HTMLVideoElement | null>(null)

// Pause video when slide changes
watch(slide, () => videoRef.value?.pause())
</script>

<style scoped></style>
