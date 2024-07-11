<template>
  <button :class="btnClass" @click="handleClick">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class="h-6 w-6 m-auto"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" :d="d"></path>
    </svg>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  direction: 'up' | 'down'
  bounce?: boolean
  handleClick?: () => void
}>()

const d = props.direction === 'up' ? 'M19 14 l-7-7 l-7 7' : 'M19 14l-7 7 l-7-7'
const btnClass = props.bounce ? 'animate-bounce' : ''
</script>
