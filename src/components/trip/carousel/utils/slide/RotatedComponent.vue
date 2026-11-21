<template>
  <div
    ref="rotatorWrapper"
    class="w-full h-full flex items-center justify-center box-border"
    :style="wrapperStyle"
  >
    <div
      class="w-full h-full flex items-center justify-center"
      :style="{ transform: `rotate(${props.rot}deg)` }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  rot: number
  width: number // of the container the rotated content must fit
  height: number
}>()

const wrapperStyle = computed(() => {
  const [w, h] = props.rot % 180 !== 0 ? [props.height, props.width] : [props.width, props.height]
  return { width: `${w}px`, height: `${h}px` }
})
</script>

<style scoped></style>
