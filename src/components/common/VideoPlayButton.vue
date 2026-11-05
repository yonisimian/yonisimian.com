<template>
  <button class="bg-black/15">
    <svg
      v-if="!isPlaying"
      xmlns="http://www.w3.org/2000/svg"
      class="h-12 w-12 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.25"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.66z"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="h-12 w-12 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.5"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M10 9v6m4-6v6" />
    </svg>
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  isPlaying: boolean
}>()
</script>

<style scoped></style>
