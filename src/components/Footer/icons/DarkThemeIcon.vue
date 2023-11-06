<template>
  <li class="cursor-pointer text-2xl">
    <a class="text-cyan-700 hover:text-cyan-500" :title="'Toggle Theme'" @click="toggleStars">
      <i class="i-ph-moon" />
    </a>
  </li>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const toggleStars = inject('toggleStars') as () => void
</script>

<style scoped></style>
