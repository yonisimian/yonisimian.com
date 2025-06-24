<template>
  <!-- Outer div for "click anywhere to close fullscreen" -->
  <div
    class="flex items-center justify-center fixed z-10 inset-0 bg-black bg-opacity-80 backdrop-blur-[2px]"
    @click.self="closeFullscreen"
  >
    <!-- Inner div for sizing the actual content -->
    <div
      class="w-5xl bg-black flex flex-col items-center justify-center overflow-hidden select-none"
      @click.self="closeFullscreen"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'

const { closeFullscreen } = useTripState()
</script>

<style scoped></style>
