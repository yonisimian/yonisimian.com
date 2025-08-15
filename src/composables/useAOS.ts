import { ref, onMounted, onUnmounted, type Ref } from 'vue'

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const callback = observedElements.get(entry.target)
      if (callback) {
        callback(entry.isIntersecting)
      }
    })
  },
  {
    threshold: 0.1,
    rootMargin: '50px'
  }
)
const observedElements = new Map<Element, (isIntersecting: boolean) => void>()

export const useAOS = (elementRef: Ref<HTMLElement | undefined>) => {
  const isVisible = ref(false)

  const handleIntersection = (isIntersecting: boolean) => {
    isVisible.value = isIntersecting
  }

  onMounted(() => {
    if (elementRef.value) {
      observedElements.set(elementRef.value, handleIntersection)
      observer.observe(elementRef.value)
    }
  })

  onUnmounted(() => {
    if (elementRef.value) {
      observer.unobserve(elementRef.value)
      observedElements.delete(elementRef.value)

      // Clean up if no more elements
      if (observedElements.size === 0) {
        observer.disconnect()
      }
    }
  })

  return { isVisible }
}
