<template>
  <button class="fullscreen-button" @click="toggleFullscreen" title="Toggle Fullscreen">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path
        :d="
          fullscreen
            ? 'm6 6H2V8H8V2H6zm9 2V2h2V6h4V8zM8 21H6V17H2V15H8zm13-4H17v4H15V15h6z'
            : 'm4 4h4V2H2v6h2V4zm17 4V2h-6v2h4v4h2zM4 19h4v2H2v-6h2v4zm17-2v4h-6v-2h4v-4h2z'
        "
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { useTripState } from '/@/composables/useTripState'

const { fullscreen, toggleFullscreen } = useTripState()
</script>

<style scoped>
.fullscreen-button {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
}
</style>
