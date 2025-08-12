<template>
  <span class="inline-block text-xs px-2 py-1 rounded-full duration-1000" :class="badgeClass">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  color: string
}>()

const badgeClass = computed(
  () =>
    `bg-${props.color}-100 dark:bg-transparent text-${props.color}-800 dark:text-${props.color}-400 border border-${props.color}-100 dark:border-${props.color}-400`
)
</script>

<style scoped></style>
