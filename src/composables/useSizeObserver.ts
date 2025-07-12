import { ref, onUnmounted, nextTick } from 'vue'

const targetEl = ref<Element | null>(null)
const target = ref({ width: 0, height: 0 })
let observer: ResizeObserver | null = null

const updateTargetElement = (el: Element) => {
  targetEl.value = el
  const rect = el.getBoundingClientRect()
  target.value = { width: rect.width, height: rect.height }
}

const updateTargetValue = () => {
  if (targetEl.value) {
    const rect = targetEl.value.getBoundingClientRect()
    target.value = { width: rect.width, height: rect.height }
  }
}

const setTarget = (el: Element) => {
  observer?.disconnect()
  observer = new ResizeObserver(async () => {
    await nextTick()
    updateTargetElement(el)
  })
  observer.observe(el)
}

export const useSizeObserver = () => {
  onUnmounted(() => observer?.disconnect())
  return { target, setTarget, updateTargetValue }
}
