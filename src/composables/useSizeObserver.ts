import { ref, onUnmounted } from 'vue'

const target = ref({ width: 0, height: 0 })
let observer: ResizeObserver | null = null
let observedEl: Element | null = null

const updateTargetValue = (el: Element) => {
  const rect = el.getBoundingClientRect()
  target.value = { width: rect.width, height: rect.height }
}

const setTarget = (el: Element) => {
  observer?.disconnect()
  observedEl = el

  // 1. Synchronously get and set the initial size
  updateTargetValue(el)

  // 2. Then, set up the observer for future changes
  observer = new ResizeObserver(() => updateTargetValue(el))
  observer.observe(el)
}

export const useSizeObserver = () => {
  let ownEl: Element | null = null
  // Only the component that owns the observed element may disconnect it
  onUnmounted(() => {
    if (ownEl && ownEl === observedEl) {
      observer?.disconnect()
      observedEl = null
    }
  })
  return {
    target,
    setTarget: (el: Element) => {
      ownEl = el
      setTarget(el)
    }
  }
}
