interface SecretCode {
  sequence: string[]
  callbacks: Set<() => void>
}

const SECRET_CODE_SEQUENCES = {
  konami: [
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
  ],
  iloveyou: ['KeyI', 'KeyL', 'KeyO', 'KeyV', 'KeyE', 'KeyY', 'KeyO', 'KeyU']
}

const secretCodes: Map<SecretCodeName, SecretCode> = new Map(
  Object.entries(SECRET_CODE_SEQUENCES).map(([key, sequence]) => [
    key as SecretCodeName,
    {
      sequence: sequence,
      callbacks: new Set<SecretCodeCallback>()
    }
  ])
)

const maxSequenceLength = Math.max(
  ...Array.from(secretCodes.values()).map((code) => code.sequence.length)
)
let currentSequence: string[] = new Array(maxSequenceLength).fill('')

const handleKeydown = (event: KeyboardEvent) => {
  currentSequence.shift()
  currentSequence.push(event.code)

  secretCodes.forEach((secretCode, secretKey) => {
    const { sequence, callbacks } = secretCode
    const sequenceLength = sequence.length

    const relevantSequence = currentSequence.slice(-sequenceLength)

    const matches =
      relevantSequence.length === sequenceLength &&
      relevantSequence.every((key, index) => key === sequence[index])

    if (matches) {
      callbacks.forEach((callback) => callback())
    }
  })
}

const addSecretCallback = (codeName: SecretCodeName, callback: () => void) => {
  secretCodes.get(codeName)?.callbacks.add(callback)
}

window.addEventListener('keydown', handleKeydown)

export type SecretCodeName = keyof typeof SECRET_CODE_SEQUENCES
export type SecretCodeCallback = () => void

export const useSecrets = () => {
  return {
    addSecretCallback
  }
}
