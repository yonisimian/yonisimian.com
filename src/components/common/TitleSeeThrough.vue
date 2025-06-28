<template>
  <div class="w-full flex justify-center items-center">
    <svg width="100%" height="70px">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" :stop-color="gradientColors[0]" />
          <stop offset="15%" :stop-color="gradientColors[1]" />
          <stop offset="50%" :stop-color="gradientColors[2]" />
          <stop offset="85%" :stop-color="gradientColors[3]" />
          <stop offset="100%" :stop-color="gradientColors[4]" />
        </linearGradient>
        <mask id="text-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <text x="50%" y="50%" dy=".35em" text-anchor="middle" font-weight="bold" fill="black">
            The Big Trip
          </text>
        </mask>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)" mask="url(#text-mask)" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '/@/composables/useTheme'

const { isDark } = useTheme()

const gradientColors = computed(
  () =>
    isDark.value
      ? ['#00000000', '#0a192f', '#3386ff', '#0a192f', '#00000000'] // dark theme colors
      : ['#ffffff00', '#ff2f6c', '#3386ff', '#00ff6c', '#ffffff00'] // light theme colors
)
</script>

<style scoped></style>
