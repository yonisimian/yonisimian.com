// Items [start, end) share one row of the given height
export interface JustifiedRow {
  start: number
  end: number
  height: number
}

// Greedy justified layout: full rows fill `width` exactly, the last row keeps `targetHeight`
export const justifyRows = (
  ratios: readonly number[],
  width: number,
  targetHeight: number,
  gap: number
): JustifiedRow[] => {
  const rows: JustifiedRow[] = []
  if (width <= 0) return rows
  const heightOf = (sum: number, count: number) => (width - gap * (count - 1)) / sum

  let start = 0
  let sum = 0
  for (let i = 0; i < ratios.length; i++) {
    sum += ratios[i]
    const height = heightOf(sum, i - start + 1)
    if (height > targetHeight) continue

    // The row is full; end it before or after item i, whichever is closer to the target
    const without = i > start ? heightOf(sum - ratios[i], i - start) : Infinity
    if (without - targetHeight < targetHeight - height) {
      rows.push({ start, end: i, height: without })
      start = i
      sum = 0
      i-- // item i starts the next row
    } else {
      rows.push({ start, end: i + 1, height })
      start = i + 1
      sum = 0
    }
  }
  if (start < ratios.length) rows.push({ start, end: ratios.length, height: targetHeight })
  return rows
}
