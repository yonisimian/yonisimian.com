<template>
  <button @click="toggleDark()" class="text-cyan-700 hover:text-cyan-500" title="Toggle Theme">
    <i i="dark:ph-sun ph-moon" />
  </button>
</template>

<script setup lang="ts">
import { useTheme } from '/@/composables'

const { toggleDark } = useTheme()
</script>

<style scoped></style>
