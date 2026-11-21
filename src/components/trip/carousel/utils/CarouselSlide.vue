<template>
  <div class="relative w-full h-full bg-black flex items-center justify-center overflow-hidden">
    <CarouselInfo v-if="fullscreen" class="absolute top-0 px-2 z-20" />
    <div ref="slideContentRef" class="w-full h-full flex items-center justify-center box-border">
      <RotatedComponent class="w-full h-full" :rot="rotation" :width :height>
        <CarouselSlideImage v-if="isImage(url)" :src="url as PhotoURL" />
        <CarouselSlideVideo v-else :src="url as VideoURL" />
      </RotatedComponent>
    </div>
    <CarouselSlideToolbar
      class="absolute mx-auto z-20 bottom-8 sm:bottom-4"
      :rotateLeft
      :rotateRight
    />
    <StepNavigationButtons v-if="fullscreen && !collection" class="absolute bottom-1 px-2 z-20" />
  </div>
</template>

<script setup lang="ts">
import { isImage } from '/@/functions/trip'
import { MediaType, PhotoURL, VideoURL } from '/@/types/trip'
import { watch, ref, useTemplateRef } from 'vue'
import { useElementSize } from '@vueuse/core'
import { useTripState } from '/@/composables/useTripState'

defineProps<{
  url: MediaType
}>()

const { slide, activeCollection, collection, fullscreen } = useTripState()

const rotation = ref(0)
const slideContentRef = useTemplateRef<HTMLDivElement>('slideContentRef')
const { width, height } = useElementSize(slideContentRef)
const rotateLeft = () => (rotation.value = (rotation.value - 90 + 360) % 360)
const rotateRight = () => (rotation.value = (rotation.value + 90) % 360)

// Reset rotation when slide changes
watch([slide, activeCollection], () => {
  rotation.value = 0
})
</script>

<style scoped></style>
