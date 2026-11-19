<template>
  <div class="w-full h-full">
    <div
      v-if="fullscreen"
      class="flex justify-center items-center w-full h-full"
      :style="{ minHeight: CAROUSEL_HEIGHT }"
      @click.prevent
    >
      <p class="text-gray-500">No media available for this step.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'
import { CAROUSEL_HEIGHT } from '/@/functions/trip'

const { fullscreen } = useTripState()
</script>

<style scoped></style>
