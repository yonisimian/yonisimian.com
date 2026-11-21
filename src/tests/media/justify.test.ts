import { describe, expect, it } from 'vitest'
import { justifyRows } from '/@/functions/justify'

const rowWidth = (ratios: number[], start: number, end: number, height: number, gap: number) =>
  ratios.slice(start, end).reduce((sum, ratio) => sum + ratio * height, 0) + gap * (end - start - 1)

describe('justifyRows', () => {
  it('returns no rows without items or width', () => {
    expect(justifyRows([], 1000, 200, 4)).toEqual([])
    expect(justifyRows([1, 1], 0, 200, 4)).toEqual([])
  })

  it('covers every item once, in order', () => {
    const ratios = [1.5, 0.66, 1, 1.33, 2.4, 0.75, 1.5, 1.5, 1, 0.5]
    const rows = justifyRows(ratios, 900, 200, 4)
    expect(rows[0].start).toBe(0)
    expect(rows.at(-1)!.end).toBe(ratios.length)
    rows.slice(1).forEach((row, i) => expect(row.start).toBe(rows[i].end))
  })

  it('fills the width exactly on full rows and keeps the target on the last one', () => {
    const ratios = [1.5, 0.66, 1, 1.33, 2.4, 0.75, 1.5, 1.5, 1, 0.5]
    const rows = justifyRows(ratios, 900, 200, 4)
    for (const row of rows.slice(0, -1)) {
      expect(rowWidth(ratios, row.start, row.end, row.height, 4)).toBeCloseTo(900)
    }
    expect(rows.at(-1)!.height).toBe(200)
  })

  it('ends a row where the height lands closest to the target', () => {
    // 3 squares at 300px wide: 100px tall; 2 squares would be 150px, which is closer to 140
    expect(justifyRows([1, 1, 1], 300, 140, 0)[0]).toEqual({ start: 0, end: 2, height: 150 })
    // ...but 100px is closer to 110
    expect(justifyRows([1, 1, 1], 300, 110, 0)[0]).toEqual({ start: 0, end: 3, height: 100 })
  })

  it('gives a panorama wider than the container its own shorter row', () => {
    expect(justifyRows([4, 1], 300, 100, 0)).toEqual([
      { start: 0, end: 1, height: 75 },
      { start: 1, end: 2, height: 100 }
    ])
  })
})
