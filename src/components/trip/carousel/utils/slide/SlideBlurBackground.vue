<template>
  <ResponsiveImage
    ref="imageRef"
    class="absolute inset-0"
    imgClass="w-full h-full object-cover blur-xl brightness-100 dark:brightness-40 transition-all duration-[--transition-duration] scale-110 z-0"
    :src
    mode="tiny"
    aria-hidden="true"
    fetchpriority="high"
    alt="background image"
    @click="openFullscreen"
  />
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'

const { openFullscreen } = useTripState()

defineProps<{
  src: string
}>()
</script>
