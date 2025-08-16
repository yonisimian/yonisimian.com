<template>
  <div
    class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10 pointer-events-none"
    :style="{
      background: isDark
        ? 'linear-gradient(to bottom, #00b3ff88, #00000000)'
        : 'linear-gradient(to bottom, #9ee1fe99, #00000000)'
    }"
  />
</template>

<script setup lang="ts">
import { useTheme } from '/@/composables'

const { isDark } = useTheme()
</script>
