<template>
  <div class="w-full h-full">
    <div
      v-if="fullscreen"
      class="flex justify-center items-center min-h-[640px] w-full h-full"
      @click.prevent
    >
      <p class="text-gray-500">No media available for this step.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'

const { fullscreen } = useTripState()
</script>

<style scoped></style>
