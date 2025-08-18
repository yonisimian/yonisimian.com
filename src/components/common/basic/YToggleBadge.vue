<template>
  <div
    :class="[
      'glow p-1 flex justify-center items-center text-center whitespace-nowrap font-semibold sm:text-lg cursor-pointer transition-all duration-300 rounded-lg border select-none',
      active ? 'bg-cyan-500 text-white' : 'text-gray-700 dark:text-gray-300 sm:hover:shadow-md'
    ]"
    @click="toggle()"
  >
    <slot />
  </div>
</template>

<script setup lang="ts" generic="T">
defineProps<{
  active: boolean
  toggle: () => void
}>()
</script>

<style scoped>
.glow:hover {
  box-shadow: 0 0 2px #001e24;
  border-color: #00d9ff;
}

.dark .glow:hover {
  box-shadow: 0 0 8px #00d9ffaa;
}
</style>
