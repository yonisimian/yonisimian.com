import { ref } from 'vue'

const isKonamiActivated = ref(false)

const konamiCode = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
  'KeyA'
]

let currentSequence: string[] = new Array(konamiCode.length).fill('')

type KonamiCallback = () => void
const callbacks: Set<KonamiCallback> = new Set()

const handleKeydown = (event: KeyboardEvent) => {
  currentSequence.shift()
  currentSequence.push(event.code)

  const matches = currentSequence.every((key, index) => key === konamiCode[index])
  if (matches) {
    isKonamiActivated.value = true
    callbacks.forEach((callback) => callback())
  }
}

const addKonamiCallback = (callback: KonamiCallback): void => {
  callbacks.add(callback)
}

const removeKonamiCallback = (callback: KonamiCallback): void => {
  callbacks.delete(callback)
}

const clearKonamiCallbacks = (): void => {
  callbacks.clear()
}

window.addEventListener('keydown', handleKeydown)

export const useKonami = () => {
  return {
    isKonamiActivated,
    addKonamiCallback,
    removeKonamiCallback,
    clearKonamiCallbacks
  }
}
