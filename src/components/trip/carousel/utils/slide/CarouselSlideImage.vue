<template>
  <div class="w-full h-full bg-black flex items-center justify-center overflow-hidden">
    <SlideBlurBackground :src />
    <ResponsiveImage
      :src="src"
      fetchpriority="high"
      :alt="`Image from trip slide ${slide}`"
      class="relative z-10"
      imgClass="w-full h-full object-contain"
      :class="{ 'cursor-pointer': !fullscreen }"
      @click="!disabled && openFullscreen()"
    />
  </div>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'
import { PhotoURL } from '/@/types/trip'

const { slide, fullscreen, openFullscreen } = useTripState()

defineProps<{
  src: PhotoURL
  disabled?: boolean
}>()
</script>

<style scoped></style>
