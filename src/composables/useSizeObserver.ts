import { ref, onUnmounted } from 'vue'

const target = ref({ width: 0, height: 0 })
let observer: ResizeObserver | null = null

const updateTargetElement = (el: Element) => {
  const rect = el.getBoundingClientRect()
  target.value = { width: rect.width, height: rect.height }
}

const setTarget = (el: Element) => {
  observer?.disconnect()
  observer = new ResizeObserver(() => updateTargetElement(el))
  observer.observe(el)
}

export const useSizeObserver = () => {
  onUnmounted(() => observer?.disconnect())
  return { target, setTarget }
}
