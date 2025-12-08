<template>
  <div class="flex flex-col gap-3">
    <div class="flex gap-3">
      <ServiceRegistry
        @create="create"
        @resetState="resetState"
        @deleteSelected="deleteSelected"
        @clearAll="clearAll"
        @updateLoadBalancing="updateLoadBalancing"
        :selectedId="selectedId"
        :loadBalancingEnabled="loadBalancingEnabled"
      />

      <DiagramCanvas
        :elements="elements"
        :edges="edges"
        :selectedId="selectedId"
        @elementPointerdown="onElementPointerDown"
        @elementDblclick="(id: number) => system.deleteNode(id)"
        @canvasPointerdown="onCanvasPointerDown"
        :setCanvasRef="setCanvasRef"
      />
    </div>

    <ConsolePanel :messages="consoleMessages" />
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount, computed } from 'vue'
import type { NodeType } from './types'
import { element_height, element_width } from './data'
import { MicroservicesSystem } from './MicroservicesSystem'
import ServiceRegistry from './ServiceRegistry.vue'
import DiagramCanvas from './DiagramCanvas.vue'
import ConsolePanel from './ConsolePanel.vue'

// Wrap system in a reactive ref so Vue tracks changes to its properties
const system = ref(new MicroservicesSystem())

// Access state through the reactive system ref
const elements = computed(() => system.value.getElements())
const edges = computed(() => system.value.getEdges())
const consoleMessages = computed(() => system.value.getConsoleMessages())
const loadBalancingEnabled = computed(() => system.value.isLoadBalancingEnabled())

const selectedId = ref<number | null>(null)

let canvasEl: HTMLElement | null = null
let dragging = false
let dragId: number | null = null
let dragOffset = { dx: 0, dy: 0 }

function create(type: NodeType) {
  system.value.addNode(type)
}

function deleteSelected() {
  if (selectedId.value != null) {
    system.value.deleteNode(selectedId.value)
    selectedId.value = null
  }
}

function resetState() {
  system.value.resetState()
  selectedId.value = null
}

function clearAll() {
  system.value.clearAll()
  selectedId.value = null
}

function updateLoadBalancing(enabled: boolean) {
  system.value.setLoadBalancingEnabled(enabled)
}

function setCanvasRef(el: HTMLElement | null) {
  canvasEl = el
}

function onElementPointerDown(ev: PointerEvent, elId: number) {
  if (!canvasEl) return
  const rect = canvasEl.getBoundingClientRect()
  dragging = true
  dragId = elId
  selectedId.value = elId
  const el = elements.value.find((e) => e.id === elId)
  if (!el) return
  dragOffset.dx = ev.clientX - el.x - rect.left
  dragOffset.dy = ev.clientY - el.y - rect.top
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
}

function onPointerMove(ev: PointerEvent) {
  if (!dragging || dragId === null || !canvasEl) return
  const rect = canvasEl.getBoundingClientRect()
  const el = elements.value.find((e) => e.id === dragId)
  if (!el) return
  let nx = ev.clientX - rect.left - dragOffset.dx
  let ny = ev.clientY - rect.top - dragOffset.dy
  nx = Math.max(0, Math.min(nx, rect.width - element_width))
  ny = Math.max(0, Math.min(ny, rect.height - element_height))

  if (ev.shiftKey) {
    el.x = Math.round(nx / 50) * 50
    el.y = Math.round(ny / 50) * 50
  } else {
    el.x = Math.round(nx)
    el.y = Math.round(ny)
  }
}

function onPointerUp() {
  dragging = false
  dragId = null
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
}

function onCanvasPointerDown() {
  selectedId.value = null
}

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
})
</script>

<style scoped></style>
