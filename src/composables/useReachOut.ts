import { ref } from 'vue'

const animate = ref(false)

const reachOut = (dest: HTMLElement) => {
  setTimeout(() => {
    animate.value = true
    setTimeout(() => {
      animate.value = false
    }, 2000)
  }, 1000)
  dest.scrollIntoView({ behavior: 'smooth' })
}

export const useReachOutAnimation = () => {
  return { reachOut, animate }
}
