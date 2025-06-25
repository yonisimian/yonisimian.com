<template>
  <CarouselFullscreenWrapper>
    <CarouselTitle v-if="fullscreen">{{ title }}</CarouselTitle>
    <CarouselInfo v-if="fullscreen" :slidesCount="slides.length" :slide :step class="py-2" />
    <div v-if="slides.length" class="flex flex-col items-center justify-center w-full">
      <CarouselGallery class="w-full" :slides />
      <CarouselThumbnail v-if="!fullscreen" />
    </div>
    <CarouselEmpty v-else />
    <StepNavigationButtons v-if="fullscreen && !collection" class="mt-2" />
  </CarouselFullscreenWrapper>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { computed, watch } from 'vue'
import { useTripState } from '/@/composables/useTripState'

const { currStep, currCollection, slide, fullscreen, collection } = useTripState()

const slides = computed(
  () =>
    currCollection.value?.stepslides.map((ss) => ss.step.media[ss.slide]) || currStep.value.media
)

const step = computed(() => currCollection.value?.stepslides[slide.value].step ?? currStep.value)

const title = computed(() => currCollection.value?.name ?? currStep.value.name)

// reset slide when step changes or entering custom slides mode
watch([() => currStep.value, () => collection.value], () => (slide.value = 0))
</script>

<style scoped></style>
