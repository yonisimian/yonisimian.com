<template>
  <div
    :class="[
      'p-1 lg:p-2 text-center font-semibold sm:text-lg cursor-pointer transition-all duration-300 rounded-full',
      activeBadges.includes(badge)
        ? 'bg-cyan-500 text-white shadow-lg'
        : 'bg-white text-gray-700 hover:bg-cyan-100 hover:shadow-md'
    ]"
    @click="toggleBadge(badge)"
  >
    {{ badge }}
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
