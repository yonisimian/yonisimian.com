<template>
  <!-- Outer div for "click anywhere to close fullscreen" -->
  <div
    class="w-full h-full flex items-center justify-center"
    :class="{
      'fixed z-10 inset-0 bg-black text-light-900 bg-opacity-80 backdrop-blur-[2px]': fullscreen
    }"
    @mousedown.self="closeFullscreen"
    @touchstart.self="closeFullscreen"
  >
    <!-- Inner div for sizing the actual content -->
    <div
      class="flex flex-col items-center justify-center select-none w-full"
      :style="{ height: fullscreen ? '100dvh' : carouselHeight }"
      @mousedown.self="closeFullscreen"
      @touchstart.self="closeFullscreen"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useTripState } from '/@/composables/useTripState'
import { useFreezeScroll } from '/@/composables/useFreezeScroll'
import { useTripData } from '/@/composables/useTripData'

const { fullscreen, closeFullscreen } = useTripState()
const { carouselHeight } = useTripData()

const { freezeScroll, unfreezeScroll } = useFreezeScroll()

watch(fullscreen, (val) => (val ? freezeScroll() : unfreezeScroll()))
</script>

<style scoped></style>
