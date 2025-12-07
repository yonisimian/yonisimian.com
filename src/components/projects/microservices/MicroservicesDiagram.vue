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
        @elementDblclick="deleteElement"
        @canvasPointerdown="onCanvasPointerDown"
        :setCanvasRef="setCanvasRef"
      />
    </div>

    <ConsolePanel :messages="consoleMessages" />
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
const consoleMessages = ref<string[]>([])
const loadBalancingEnabled = ref(false)

let canvasEl: HTMLElement | null = null

let dragging = false
let dragId: number | null = null
let dragOffset = { dx: 0, dy: 0 }

function makeLabel(type: NodeType) {
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

function updateLoadBalancing(enabled: boolean) {
  loadBalancingEnabled.value = enabled
  calculateLoads()
  generateConsoleMessages()
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

  if (loadBalancingEnabled.value) {
    // Load balancing: distribute load evenly across all services of the same type
    const accountServices = elements.value.filter((el) => el.type === 'Account Service')
    const inventoryServices = elements.value.filter((el) => el.type === 'Inventory Service')
    const orderServices = elements.value.filter((el) => el.type === 'Order Service')

    const accountLoadPerService =
      accountServices.length > 0 ? (users.length * 40) / accountServices.length : 0
    const inventoryLoadPerService =
      inventoryServices.length > 0 ? (users.length * 30) / inventoryServices.length : 0
    const orderLoadPerService =
      orderServices.length > 0 ? (users.length * 20) / orderServices.length : 0

    // Assign evenly distributed load to each service
    accountServices.forEach((s) => {
      s.load = Math.min(accountLoadPerService, 100)
    })
    inventoryServices.forEach((s) => {
      s.load = Math.min(inventoryLoadPerService, 100)
    })
    orderServices.forEach((s) => {
      s.load = Math.min(orderLoadPerService, 100)
    })
  } else {
    // Original behavior: randomly assign to each service type (if instances exist)
    for (const _ of users) {
      const accountServices = elements.value.filter((el) => el.type === 'Account Service')
      const inventoryServices = elements.value.filter((el) => el.type === 'Inventory Service')
      const orderServices = elements.value.filter((el) => el.type === 'Order Service')

      if (accountServices.length > 0) {
        const target = accountServices[Math.floor(Math.random() * accountServices.length)]
        const newLoad = (target.load ?? 0) + getLoadPercentForType('Account Service')
        target.load = Math.min(newLoad, 100)
      }
      if (inventoryServices.length > 0) {
        const target = inventoryServices[Math.floor(Math.random() * inventoryServices.length)]
        const newLoad = (target.load ?? 0) + getLoadPercentForType('Inventory Service')
        target.load = Math.min(newLoad, 100)
      }
      if (orderServices.length > 0) {
        const target = orderServices[Math.floor(Math.random() * orderServices.length)]
        const newLoad = (target.load ?? 0) + getLoadPercentForType('Order Service')
        target.load = Math.min(newLoad, 100)
      }
    }
  }
}

function generateConsoleMessages() {
  consoleMessages.value = []

  const users = elements.value.filter((el) => el.type === 'User Interface')
  const accountServices = elements.value.filter((el) => el.type === 'Account Service')
  const inventoryServices = elements.value.filter((el) => el.type === 'Inventory Service')
  const orderServices = elements.value.filter((el) => el.type === 'Order Service')

  // Check for overloaded services (would exceed 100%)
  if (accountServices.some((s) => (s.load ?? 0) >= 100) && users.length > 0) {
    consoleMessages.value.push(
      "There's too much load on the account services, please add a new instance!"
    )
  }
  if (inventoryServices.some((s) => (s.load ?? 0) >= 100) && users.length > 0) {
    consoleMessages.value.push(
      "There's too much load on the inventory services, please add a new instance!"
    )
  }
  if (orderServices.some((s) => (s.load ?? 0) >= 100) && users.length > 0) {
    consoleMessages.value.push(
      "There's too much load on the order services, please add a new instance!"
    )
  }

  // Check for missing services (users with no access to a service type)
  if (users.length > 0 && accountServices.length === 0) {
    consoleMessages.value.push(`There are ${users.length} users with no account service at all!`)
  }
  if (users.length > 0 && inventoryServices.length === 0) {
    consoleMessages.value.push(`There are ${users.length} users with no inventory service at all!`)
  }
  if (users.length > 0 && orderServices.length === 0) {
    consoleMessages.value.push(`There are ${users.length} users with no order service at all!`)
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
    label: makeLabel(type),
    x: 120 + elements.value.length * 20,
    y: 80 + elements.value.length * 20,
    typeClass: typeClassFor(type),
    load: type === 'User Interface' ? undefined : 0
  }
  elements.value.push(el)
  selectedId.value = id
  inferEdges()
  calculateLoads()
  generateConsoleMessages()
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
  generateConsoleMessages()
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
  generateConsoleMessages()
}

function clearAll() {
  elements.value = [apiGatewayElement]
  selectedId.value = null
  edges.value = []
  calculateLoads()
  generateConsoleMessages()
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
generateConsoleMessages() // initial console messages
</script>

<style scoped></style>
