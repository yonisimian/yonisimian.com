<template>
  <!-- Outer div for "click anywhere to close fullscreen" -->
  <div
    class="w-full h-full flex items-center justify-center"
    :class="{
      'fixed z-10 inset-0 bg-black text-light-900 bg-opacity-80 backdrop-blur-[2px]': fullscreen
    }"
    @click.self="closeFullscreen"
  >
    <!-- Inner div for sizing the actual content -->
    <div
      class="flex flex-col items-center justify-center select-none w-full"
      :class="{
        'max-w-5xl max-h-[90vh] gap-1 overflow-hidden': fullscreen
      }"
      @click.self="closeFullscreen"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'

const { fullscreen, closeFullscreen } = useTripState()
</script>

<style scoped></style>
