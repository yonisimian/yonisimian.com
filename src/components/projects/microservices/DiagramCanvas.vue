<template>
  <div
    ref="root"
    class="relative flex-1 h-[70vh] border border-gray-400/20 rounded-lg overflow-hidden bg-blue-gray-900/5 backdrop-filter backdrop-blur-[4px]"
    @pointerdown="onCanvasPointerDown"
  >
    <svg
      class="absolute left-0 top-0 w-full h-full pointer-events-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          v-for="(edge, idx) in edges"
          :key="idx"
          :d="calcPath(edge)"
          stroke="#999"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>

    <DiagramNode
      v-for="el in elements"
      :key="el.id"
      :el="el"
      :selectedId="selectedId"
      @pointerdown="(ev, id) => $emit('element-pointerdown', ev, id)"
      @dblclick="(id) => $emit('element-dblclick', id)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import type { DiagramElement, DiagramEdge } from './types'
import { element_width, element_height } from './data'

const props = defineProps<{
  elements: DiagramElement[]
  selectedId: number | null
  setCanvasRef: (el: HTMLElement | null) => void
  edges?: DiagramEdge[]
}>()

const emit = defineEmits<{
  (e: 'element-pointerdown', ev: PointerEvent, id: number): void
  (e: 'element-dblclick', id: number): void
  (e: 'canvas-pointerdown'): void
}>()

const root = ref<HTMLElement | null>(null)

// Use computed to reactively track edges changes
const edges = computed(() => props.edges ?? [])

function calcPath(edge: { a: number; b: number }) {
  const a = props.elements.find((e) => e.id === edge.a)
  const b = props.elements.find((e) => e.id === edge.b)
  if (!a || !b) return ''
  const x1 = a.x + element_width / 2
  const y1 = a.y + element_height / 2
  const x2 = b.x + element_width / 2
  const y2 = b.y + element_height / 2

  const xm = (x1 + x2) / 2
  // orthogonal polyline with horizontal/vertical segments
  return `M ${x1} ${y1} L ${xm} ${y1} L ${xm} ${y2} L ${x2} ${y2}`
}

onMounted(() => {
  props.setCanvasRef?.(root.value)
})

onBeforeUnmount(() => {
  props.setCanvasRef?.(null)
})

function onCanvasPointerDown(ev: PointerEvent) {
  emit('canvas-pointerdown')
}
</script>
