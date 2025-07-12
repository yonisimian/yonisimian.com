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
import { computed, ref } from 'vue'
import type { Ref } from 'vue'
import { useSizeObserver } from '/@/composables/useSizeObserver'

const props = defineProps<{
  rot: number
}>()

const { target } = useSizeObserver()

const rotatorWrapper: Ref<HTMLDivElement | null> = ref(null)

const wrapperStyle = computed(() => {
  const { width, height } = target.value
  const [w, h] = props.rot % 180 !== 0 ? [height, width] : [width, height]
  return { width: `${w}px`, height: `${h}px` }
})
</script>

<style scoped></style>
