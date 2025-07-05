<template>
  <button
    class="inline-flex text-white bg-opacity-30 border-none p-2"
    :class="{
      ' hover:bg-white hover:bg-opacity-30': !disabled,
      [buttonBgColor ?? 'bg-black']: true
    }"
    @click="onClick"
    :title
    :disabled="disabled === undefined ? false : disabled"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :fill="fill ?? 'currentColor'"
      :stroke="stroke ?? 'currentColor'"
      class="w-6 h-6"
    >
      <slot />
    </svg>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  fill?: string
  stroke?: string
  title?: string
  disabled?: boolean
  buttonBgColor?: string
  onClick?: () => void
}>()
</script>

<style scoped></style>
