<template>
  <div
    ref="elementRef"
    class="transition-all duration-1000 ease-in-out will-change-auto"
    :class="
      isVisible
        ? 'opacity-100 scale-100 translate-y-0 blur-0'
        : 'opacity-0 scale-90 translate-y-4 blur-sm'
    "
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useElementVisibility } from '@vueuse/core'

const elementRef = useTemplateRef<HTMLElement>('elementRef')
const isVisible = useElementVisibility(elementRef, { threshold: 0.1, rootMargin: '50px' })
</script>
