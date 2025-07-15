<template>
  <Slide class="w-full h-full bg-black flex items-center justify-center overflow-hidden">
    <CarouselInfo v-if="fullscreen" class="absolute top-0 px-2 z-20" />
    <div ref="slideContentRef" class="w-full h-full flex items-center justify-center box-border">
      <RotatedComponent class="w-full h-full" :rot="rotation">
        <CarouselSlideImage v-if="isImage(url)" :src="url as PhotoURL" :rot="rotation" />
        <CarouselSlideVideo v-else :src="url as VideoURL" />
      </RotatedComponent>
    </div>
    <CarouselSlideToolbar
      class="absolute mx-auto z-20 bottom-8 sm:bottom-4"
      :rotateLeft
      :rotateRight
    />
    <StepNavigationButtons v-if="fullscreen && !collection" class="absolute bottom-1 px-2 z-20" />
  </Slide>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Slide } from 'vue3-carousel'
import { isImage } from '/@/functions/trip'
import { MediaType, PhotoURL, VideoURL } from '/@/types/trip'
import { watch, ref, onMounted } from 'vue'
import { useTripState } from '/@/composables/useTripState'
import { useSizeObserver } from '/@/composables/useSizeObserver'

defineProps<{
  url: MediaType
}>()

const { slide, activeCollection, collection, fullscreen } = useTripState()
const { setTarget, updateTargetValue } = useSizeObserver()

const rotation = ref(0)
const slideContentRef = ref<HTMLDivElement | null>(null)
const rotateLeft = () => (rotation.value = (rotation.value - 90 + 360) % 360)
const rotateRight = () => (rotation.value = (rotation.value + 90) % 360)

// Reset rotation when slide changes
watch([slide, activeCollection], () => {
  rotation.value = 0
  updateTargetValue() // a bit of a hack for RotatedComponent to update its size
})

// Set target for size observer, used for rotations
onMounted(() => {
  if (slideContentRef.value) setTarget(slideContentRef.value)
})
</script>

<style scoped></style>
