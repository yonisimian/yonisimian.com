// File: src/composables/usePanzoom.ts
// Important: note that panning functionality is global, however zomming is per component.
// Is that smart? idk. Is that correct? Time will tell.

import { ref } from 'vue'

const DRAG_THRESHOLD = 0 // pixels
const ZOOM_FACTOR = 3 // Zoom scale factor

const pan = ref({ x: 0, y: 0 })
const panStart = ref({ x: 0, y: 0 })
const panOffset = ref({ x: 0, y: 0 })
const isPanning = ref(false)
const isDragging = ref(false)

let clampFn: (() => { maxX: number; maxY: number }) | null = null

const getEventPosition = (e: MouseEvent | TouchEvent) => {
  if ('touches' in e && e.touches.length > 0) {
    const t = e.touches[0]
    return { x: t.clientX, y: t.clientY }
  } else if ('changedTouches' in e && e.changedTouches.length > 0) {
    const t = e.changedTouches[0]
    return { x: t.clientX, y: t.clientY }
  } else {
    return { x: (e as MouseEvent).clientX, y: (e as MouseEvent).clientY }
  }
}

const onPanStart = (e: MouseEvent | TouchEvent) => {
  isPanning.value = true
  isDragging.value = false
  const pos = getEventPosition(e)
  panStart.value = { ...pos }
  panOffset.value = { ...pan.value }
  if (e instanceof MouseEvent) e.preventDefault()
}

const onPanMove = (e: MouseEvent | TouchEvent) => {
  if (!isPanning.value) return
  const pos = getEventPosition(e)
  const deltaX = pos.x - panStart.value.x
  const deltaY = pos.y - panStart.value.y
  if (Math.abs(deltaX) > DRAG_THRESHOLD || Math.abs(deltaY) > DRAG_THRESHOLD) {
    isDragging.value = true
  }

  let x = panOffset.value.x + deltaX
  let y = panOffset.value.y + deltaY

  if (clampFn) {
    const { maxX, maxY } = clampFn()
    x = Math.max(-maxX, Math.min(x, maxX))
    y = Math.max(-maxY, Math.min(y, maxY))
  }

  pan.value = { x, y }
}

const onPanEnd = () => {
  isPanning.value = false
  // Don't reset isDragging immediately; the component may want to react to it first
  setTimeout(() => {
    isDragging.value = false
  }, 0)
}

const resetPanning = () => {
  pan.value = { x: 0, y: 0 }
  panStart.value = { x: 0, y: 0 }
  panOffset.value = { x: 0, y: 0 }
  isPanning.value = false
  isDragging.value = false
  clampFn = null
}

let listenersAdded = false

export const addGlobalListeners = () => {
  if (listenersAdded) return
  window.addEventListener('mousemove', onPanMove)
  window.addEventListener('mouseup', onPanEnd)
  window.addEventListener('touchmove', onPanMove, { passive: false })
  window.addEventListener('touchend', onPanEnd)
  listenersAdded = true
}

export const removeGlobalListeners = () => {
  window.removeEventListener('mousemove', onPanMove)
  window.removeEventListener('mouseup', onPanEnd)
  window.removeEventListener('touchmove', onPanMove)
  window.removeEventListener('touchend', onPanEnd)
  listenersAdded = false
}

export function usePanzoom() {
  addGlobalListeners()
  const zoom = ref(false)
  const toggleZoom = () => (zoom.value = !zoom.value)

  return {
    // pan stuff
    pan,
    isDragging,
    isPanning,
    onPanStart,
    onPanMove,
    onPanEnd,
    resetPanning,
    setClampFn: (fn: typeof clampFn) => (clampFn = fn),

    // zoom stuff
    zoom,
    toggleZoom,
    ZOOM_FACTOR
  }
}
