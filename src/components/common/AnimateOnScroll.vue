<template>
  <div
    ref="elementRef"
    class="transition-all duration-1000 ease-out will-change-auto"
    :class="
      isVisible
        ? 'opacity-100 scale-100 translate-y-0 blur-0'
        : 'opacity-0 scale-75 translate-y-5 blur-sm'
    "
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAOS } from '/@/composables/useAOS'

const elementRef = ref<HTMLElement>()
const { isVisible } = useAOS(elementRef)
</script>
