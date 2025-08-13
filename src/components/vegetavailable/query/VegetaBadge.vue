<template>
  <div
    :class="[
      'p-1 lg:p-2 text-center font-semibold sm:text-lg cursor-pointer transition-all duration-300 rounded-lg border select-none',
      activeBadges.includes(badge)
        ? 'bg-cyan-500 text-white shadow-lg'
        : 'text-gray-700 dark:text-gray-300 hover:bg-cyan-100 dark:hover:bg-cyan-800 hover:shadow-md'
    ]"
    @click="toggleBadge(badge)"
  >
    <slot />
  </div>
</template>

<script setup lang="ts" generic="T">
defineProps<{
  badge: T
  activeBadges: T[]
  toggleBadge: (badge: T) => void
}>()
</script>

<style scoped></style>
