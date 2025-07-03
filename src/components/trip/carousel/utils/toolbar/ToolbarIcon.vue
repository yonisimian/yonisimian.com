<template>
  <button
    class="inline-flex text-white bg-black bg-opacity-30 hover:bg-white hover:bg-opacity-30 border-none p-2"
    @click="onClick"
    title="Toggle Fullscreen"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :fill="fill ?? 'currentColor'"
      :stroke="stroke ?? 'currentColor'"
      class="w-6 h-6"
    >
      <path :d />
      <slot />
    </svg>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  d?: string
  fill?: string
  stroke?: string
  onClick?: () => void
}>()
</script>

<style scoped></style>
