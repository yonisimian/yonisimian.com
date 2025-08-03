<template>
  <button
    class="inline-flex text-white bg-opacity-30 border-none p-2"
    :class="{
      ' hover:bg-white hover:bg-opacity-30': !disabled,
      [buttonBgColor]: true
    }"
    @click="onClick"
    :title
    :disabled
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :fill :stroke :class="svgClass">
      <slot />
    </svg>
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    fill?: string
    stroke?: string
    title?: string
    disabled?: boolean
    buttonBgColor?: string
    svgClass?: string
    onClick?: () => void
  }>(),
  {
    fill: 'currentColor',
    stroke: 'currentColor',
    disabled: false,
    buttonBgColor: 'bg-black',
    svgClass: 'w-6 h-6'
  }
)
</script>

<style scoped></style>
