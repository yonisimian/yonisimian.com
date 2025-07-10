<template>
  <div class="w-full h-full">
    <div
      v-if="fullscreen"
      class="flex justify-center items-center w-full h-full"
      :style="{ minHeight: carouselHeight }"
      @click.prevent
    >
      <p class="text-gray-500">No media available for this step.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTripData } from '/@/composables/useTripData'
import { useTripState } from '/@/composables/useTripState'

const { fullscreen } = useTripState()
const { carouselHeight } = useTripData()
</script>

<style scoped></style>
