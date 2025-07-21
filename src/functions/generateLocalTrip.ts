import { writeFileSync, readdirSync } from 'fs'
import { join } from 'path'
import { Trip, MediaType } from '../../src/types/trip'
import { trip as originalTrip } from '../../src/data/trip'

export const loadTripWithLocalMedia = (): Trip => {
  const trip: Trip = structuredClone(originalTrip)
  const tripDir = join('public', 'media', 'trip')
  let continentCnt = 0
  let countryCnt = 1

  for (const cont of trip.continents) {
    const contDir = join(tripDir, `${continentCnt++}-${cont.name}`)
    const files = readdirSync(contDir)
    if (files.includes('flag.jpg')) {
      cont.bgImage = join(contDir, 'flag.jpg').replace('public\\', '\\').replace(/\\/g, '/')
    }

    for (const country of cont.countries) {
      const countryDir = join(contDir, `country-${countryCnt++}`)
      const files = readdirSync(countryDir)
      if (files.includes('flag.jpg')) {
        country.bgImage = join(countryDir, 'flag.jpg').replace('public\\', '\\').replace(/\\/g, '/')
      }

      for (const step of country.steps) {
        const stepDir = join(countryDir, `step-${step.id}`)
        const files = readdirSync(stepDir)

        const map = new Map<string, { photo?: string; thumb?: string; video?: string }>()

        for (const file of files) {
          const match = file.match(/^(\d+)(-thumb|-video)?\.(\w+)$/)
          if (!match) continue
          const [_, idx, typ] = match
          const key = `${idx}`
          const entry = map.get(key) ?? {}
          const full = join(stepDir, file).replace('public\\', '\\').replace(/\\/g, '/')
          if (typ === '-thumb') entry.thumb = full
          else if (typ === '-video') entry.video = full
          else entry.photo = full
          map.set(key, entry)
        }

        const newMedia: MediaType[] = []
        for (const e of map.values()) {
          if (e.video && e.thumb) newMedia.push({ thumbnail: e.thumb, video: e.video })
          else if (e.photo) newMedia.push(e.photo)
        }
        step.media = newMedia
      }
    }
  }
  return trip
}

const trip: Trip = loadTripWithLocalMedia()
const outputPath = 'src/data/trip.local.ts'
const output = `// GENERATED file — do not edit manually
import { Trip } from '/@/types/trip'
export const trip: Trip = ${JSON.stringify(trip)}`
writeFileSync(outputPath, output)
console.log(`✅ ${outputPath} generated`)
