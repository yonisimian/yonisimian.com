import { Ref, ref } from 'vue'

export interface ReachOutComposition {
  reachOut: (dest: HTMLElement) => void
  animate: Ref<boolean>
}

let animate = ref(false)

export function useReachOutAnimation(): ReachOutComposition {
  const reachOut = (dest: HTMLElement) => {
    setTimeout(() => {
      animate.value = true
      setTimeout(() => {
        animate.value = false
      }, 2000)
    }, 1000)
    dest.scrollIntoView({ behavior: 'smooth' })
  }

  return { reachOut, animate }
}
