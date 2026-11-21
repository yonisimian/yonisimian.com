import { describe, expect, it } from 'vitest'
import { trips } from '/@/data/trips'
import { world2024 } from '/@/data/trips/world-2024'
import { iceland2026 } from '/@/data/trips/iceland-2026'
import { encodeURIStep } from '/@/functions/trip'

describe('trips registry', () => {
  it.each(Object.entries(trips))('%s matches its data', async (slug, { firstStep, load }) => {
    const data = await load()
    expect(data.slug).toBe(slug)
    expect(encodeURIStep(data.steps[0])).toBe(firstStep)
  })
})

describe('trip cover', () => {
  it('resolves to the configured step photo', () => {
    expect(world2024.cover).toBe(
      '/media/trips/world-2024/01%20-%20America/04%20-%20Hawaii/step-45/2.jpg'
    )
    expect(iceland2026.cover).toBe(
      '/media/trips/iceland-2026/01%20-%20Europe/02%20-%20Iceland/step-5/8.jpg'
    )
  })
})
