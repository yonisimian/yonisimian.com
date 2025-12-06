<template>
  <div
    class="absolute w-36 h-14 flex items-center justify-center select-none rounded-md shadow-md cursor-grab text-gray-900 active:cursor-grabbing"
    :class="['type-' + el.typeClass, { selected: el.id === selectedId }]"
    :style="{ transform: `translate(${el.x}px, ${el.y}px)` }"
    @pointerdown.stop.prevent="$emit('pointerdown', $event, el.id)"
    @dblclick.stop.prevent="$emit('dblclick', el.id)"
    tabindex="0"
  >
    <div class="p-1.5 text-center font-semibold text-sm">{{ el.label }}</div>
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

<style scoped>
.type-user-interface {
  background: #7cbcff;
}
.type-api-gateway {
  background: #ffd36b;
}
.type-account-service {
  background: #8be38b;
}
.type-inventory-service {
  background: #c18bff;
}
.type-order-service {
  background: #ff9aa2;
}
</style>
