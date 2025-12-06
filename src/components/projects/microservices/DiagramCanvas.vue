<template>
  <div ref="root" class="diagram-canvas" @pointerdown="onCanvasPointerDown">
    <svg class="edges" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          v-for="(edge, idx) in edges"
          :key="idx"
          :d="calcPath(edge)"
          stroke="#999"
          stroke-width="2"
          fill="none"
          :class="['edge-path']"
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

<style scoped>
.diagram-canvas {
  position: relative;
  flex: 1 1 auto;
  height: 70vh;
  background: linear-gradient(180deg, #ffffff 0%, #fbfbfd 100%);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  overflow: hidden;
}

.edges {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: auto;
}
.edge-path {
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
