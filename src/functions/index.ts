export const joinPath = (...args: string[]): string => {
  return '/' + encodeURI(args.join('/'))
}

/**
 * Fetches step data in a wave-like manner, starting from the given index and expanding outwards.
 * This allows for efficient lazy-loading of step data without overwhelming the network.
 */
export const waveFetchData = async <T>(
  arr: T[],
  startIndex: number,
  mutateFn: (item: T) => Promise<void>
) => {
  const n = arr.length

  if (startIndex < 0 || startIndex >= n) {
    console.error(`startIndex ${startIndex} is out of bounds ${n}.`)
    return
  }

  const initiatedIndices = new Set()

  const initiateMutation = async (index: number) => {
    if (index >= 0 && index < n && !initiatedIndices.has(index)) {
      await mutateFn(arr[index])
      initiatedIndices.add(index)
    }
  }

  // DO AWAIT for the starting index
  await initiateMutation(startIndex)

  // Expand left and right simultaneously
  let left = startIndex - 1
  let right = startIndex + 1

  while (left >= 0 || right < n) {
    if (left >= 0) {
      initiateMutation(left--)
    }
    if (right < n) {
      initiateMutation(right++)
    }
  }
}
