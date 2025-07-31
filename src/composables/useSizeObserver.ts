import { ref, onUnmounted } from 'vue'

const target = ref({ width: 0, height: 0 })
let observer: ResizeObserver | null = null

const updateTargetValue = (el: Element) => {
  const rect = el.getBoundingClientRect()
  target.value = { width: rect.width, height: rect.height }
}

const setTarget = (el: Element) => {
  observer?.disconnect()

  // 1. Synchronously get and set the initial size
  updateTargetValue(el)

  // 2. Then, set up the observer for future changes
  observer = new ResizeObserver(() => updateTargetValue(el))
  observer.observe(el)
}

export const useSizeObserver = () => {
  onUnmounted(() => observer?.disconnect())
  return { target, setTarget }
}
