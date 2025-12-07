<template>
  <div
    class="absolute w-36 h-14 flex items-center justify-center select-none rounded-md shadow-md cursor-grab text-gray-900 active:cursor-grabbing flex-col"
    :class="[
      el.id === selectedId ? 'ring-4 ring-blue-200/60' : '',
      el.typeClass === 'user-interface'
        ? 'bg-[#7cbcff]'
        : el.typeClass === 'api-gateway'
        ? 'bg-[#ffd36b]'
        : el.typeClass === 'account-service'
        ? 'bg-[#8be38b]'
        : el.typeClass === 'inventory-service'
        ? 'bg-[#c18bff]'
        : el.typeClass === 'order-service'
        ? 'bg-[#ff9aa2]'
        : ''
    ]"
    :style="{ transform: `translate(${el.x}px, ${el.y}px)` }"
    @pointerdown.stop.prevent="$emit('pointerdown', $event, el.id)"
    @dblclick.stop.prevent="$emit('dblclick', el.id)"
    tabindex="0"
  >
    <div class="px-2 text-center font-semibold text-sm flex-1 flex items-center justify-center">
      {{ el.label }}
    </div>
    <div v-if="el.load !== undefined" class="text-xs text-gray-700 pb-1">
      {{ el.load.toFixed(0) }}%
    </div>
  </div>
</template>

<script setup lang="ts">
import type { DiagramElement } from './types'

defineProps<{ el: DiagramElement; selectedId: number | null }>()
const emit = defineEmits<{
  (e: 'pointerdown', ev: PointerEvent, id: number): void
  (e: 'dblclick', id: number): void
}>()
</script>
