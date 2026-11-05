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

  await mutateFn(arr[startIndex])

  for (let left = startIndex - 1, right = startIndex + 1; left >= 0 || right < n; left--, right++) {
    if (left >= 0) mutateFn(arr[left])
    if (right < n) mutateFn(arr[right])
  }
}
