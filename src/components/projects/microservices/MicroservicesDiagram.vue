<template>
  <div class="flex gap-3 items-stretch">
    <ServiceRegistry
      @create="create"
      @resetState="resetState"
      @deleteSelected="deleteSelected"
      @clearAll="clearAll"
      :selectedId="selectedId"
    />

    <DiagramCanvas
      :elements="elements"
      :edges="edges"
      :selectedId="selectedId"
      @elementPointerdown="onElementPointerDown"
      @elementDblclick="deleteElement"
      @canvasPointerdown="onCanvasPointerDown"
      :setCanvasRef="setCanvasRef"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import type { DiagramElement, NodeType, DiagramEdge } from './types'
import { apiGatewayElement, element_height, element_width, initialElements } from './data'

const elements = ref<DiagramElement[]>(initialElements.map((el) => ({ ...el })))
const nextId = ref(elements.value.length)
const selectedId = ref<number | null>(null)
const edges = ref<DiagramEdge[]>([])

let canvasEl: HTMLElement | null = null

let dragging = false
let dragId: number | null = null
let dragOffset = { dx: 0, dy: 0 }

function makeLabel(type: NodeType, id: number) {
  if (type === 'Account Service') return `Account Service + DB`
  if (type === 'Inventory Service') return `Inventory Service + DB`
  if (type === 'Order Service') return `Order Service + DB`
  return `${type}`
}

function typeClassFor(type: NodeType) {
  return type.toLowerCase().replace(/\s+/g, '-')
}

function getLoadPercentForType(type: NodeType): number {
  if (type === 'Account Service') return 40
  if (type === 'Inventory Service') return 30
  if (type === 'Order Service') return 20
  return 0
}

function calculateLoads() {
  // Reset all service loads to 0
  for (const el of elements.value) {
    if (el.type !== 'User Interface' && el.type !== 'API Gateway') {
      el.load = 0
    }
  }

  // Count users (UI nodes)
  const users = elements.value.filter((el) => el.type === 'User Interface')

  // For each user, distribute load to service instances randomly
  for (const _ of users) {
    // Get service instances by type
    const accountServices = elements.value.filter((el) => el.type === 'Account Service')
    const inventoryServices = elements.value.filter((el) => el.type === 'Inventory Service')
    const orderServices = elements.value.filter((el) => el.type === 'Order Service')

    // Randomly assign to each service type (if instances exist)
    if (accountServices.length > 0) {
      const target = accountServices[Math.floor(Math.random() * accountServices.length)]
      target.load = (target.load ?? 0) + getLoadPercentForType('Account Service')
    }
    if (inventoryServices.length > 0) {
      const target = inventoryServices[Math.floor(Math.random() * inventoryServices.length)]
      target.load = (target.load ?? 0) + getLoadPercentForType('Inventory Service')
    }
    if (orderServices.length > 0) {
      const target = orderServices[Math.floor(Math.random() * orderServices.length)]
      target.load = (target.load ?? 0) + getLoadPercentForType('Order Service')
    }
  }
}

function create(type: NodeType) {
  if (type === 'API Gateway') {
    // gateway always exists and cannot be deleted or duplicated
    selectedId.value = apiGatewayElement.id
    return
  }
  const id = nextId.value++
  const el: DiagramElement = {
    id,
    type,
    label: makeLabel(type, id),
    x: 120 + elements.value.length * 20,
    y: 80 + elements.value.length * 20,
    typeClass: typeClassFor(type),
    load: type === 'User Interface' ? undefined : 0
  }
  elements.value.push(el)
  selectedId.value = id
  inferEdges()
  calculateLoads()
}

function inferEdges() {
  // all non-gateway nodes should be connected to the gateway
  for (const el of elements.value.filter((e) => e.type !== 'API Gateway')) {
    const edgeExists = edges.value.some(
      (ed) =>
        (ed.a === apiGatewayElement.id && ed.b === el.id) ||
        (ed.a === el.id && ed.b === apiGatewayElement.id)
    )
    if (!edgeExists) {
      edges.value.push({ a: apiGatewayElement.id, b: el.id })
    }
  }
}

function findElement(id: number) {
  return elements.value.find((e) => e.id === id) || null
}

function deleteElement(id: number) {
  if (id === apiGatewayElement.id) return // cannot delete API Gateway
  elements.value = elements.value.filter((e) => e.id !== id)
  if (selectedId.value === id) selectedId.value = null
  edges.value = edges.value.filter((ed) => ed.a !== id && ed.b !== id)
  calculateLoads()
}

function deleteSelected() {
  if (selectedId.value != null) deleteElement(selectedId.value)
}

function resetState() {
  elements.value = initialElements.map((el) => ({ ...el })) // deep copy
  selectedId.value = null
  edges.value = []
  inferEdges()
  calculateLoads()
}

function clearAll() {
  elements.value = [apiGatewayElement]
  selectedId.value = null
  edges.value = []
  calculateLoads()
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
  const el = findElement(elId)!
  dragOffset.dx = ev.clientX - el.x - rect.left
  dragOffset.dy = ev.clientY - el.y - rect.top
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
}

function onPointerMove(ev: PointerEvent) {
  if (!dragging || dragId === null || !canvasEl) return
  const rect = canvasEl.getBoundingClientRect()
  const el = findElement(dragId)
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

inferEdges() // initial edge inference
calculateLoads() // initial load calculation
</script>

<style scoped></style>
