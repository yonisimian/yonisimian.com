import { writeFileSync, readdirSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { CompiletimeTrip, Continent, Country, CompiletimeStep } from '../../../../src/types/trip'
import { dirNameToName, encodeStepMedia } from './utils'

// Reads the dimensions from a lossy (VP8) WebP header, which is what generateThumbnails.py writes
const webpRatio = (path: string): number => {
  const header = readFileSync(path).subarray(0, 30)
  if (header.toString('ascii', 8, 16) !== 'WEBPVP8 ') throw new Error(`${path}: not a lossy WebP`)
  const width = header.readUInt16LE(26) & 0x3fff
  const height = header.readUInt16LE(28) & 0x3fff
  return Math.round((width / height) * 1000) / 1000
}

// Thumbnails are EXIF-rotated, so their ratio matches what is displayed
const mediaRatios = (media: string, stepMediaDir: string): number[] =>
  [...media].map((type, index) =>
    webpRatio(
      join(stepMediaDir, type === 'p' ? `${index}.small.webp` : `${index}-thumb.small.webp`)
    )
  )

const loadStepData = (step: CompiletimeStep, stepDir: string) => {
  const files = readdirSync(stepDir)
  const dataFile = files.find((file) => file.endsWith('.json'))
  if (!dataFile) {
    console.warn(`No data file found for step ${step.id} in ${stepDir}`)
    return
  }
  console.log(`Loading step data from ${dataFile} for step ${step.id}`)
  const dataPath = join(stepDir, dataFile)
  const data = JSON.parse(readFileSync(dataPath, 'utf-8'))
  // TODO: validate
  step.name = data.name
  step.shortName = data.shortName
  step.date = data.date
  step.degrees = data.degrees
}

const generateTripMetadata = async (slug: string): Promise<CompiletimeTrip> => {
  const trip: CompiletimeTrip = { continents: [] }
  const tripMediaDir = join('public', 'media', 'trips', slug)
  const tripDataDir = join('public', 'data', 'trips', slug)
  let stepCount = 1

  const continentsDirNames = readdirSync(tripMediaDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort()

  for (const continentDirName of continentsDirNames) {
    const continent: Continent<Country<CompiletimeStep>> = {
      name: dirNameToName(continentDirName),
      countries: []
    }
    trip.continents.push(continent)
    const contMediaDir = join(tripMediaDir, continentDirName)
    const contDataDir = join(tripDataDir, continentDirName)
    const countriesDirNames = readdirSync(contDataDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
      .sort()

    for (const countryDirName of countriesDirNames) {
      const country: Country<CompiletimeStep> = {
        name: dirNameToName(countryDirName),
        steps: []
      }
      continent.countries.push(country)
      const countryMediaDir = join(contMediaDir, countryDirName)
      const countryDataDir = join(contDataDir, countryDirName)
      const stepsDirNames = readdirSync(countryDataDir, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)
        .sort((a, b) => {
          const aNum = parseInt(a.split('-')[1].trim(), 10)
          const bNum = parseInt(b.split('-')[1].trim(), 10)
          return aNum - bNum
        })

      for (const stepDirName of stepsDirNames) {
        const step: CompiletimeStep = {
          id: stepCount++,
          name: '',
          shortName: '',
          date: '',
          degrees: '',
          media: '',
          ratios: []
        }
        country.steps.push(step)
        const stepDataDir = join(countryDataDir, stepDirName)
        const stepMediaDir = join(countryMediaDir, stepDirName)
        // Git drops empty dirs, so steps without media may have no media dir
        const stepFiles = (existsSync(stepMediaDir) ? readdirSync(stepMediaDir) : []).sort(
          (a, b) => {
            const aIdx = parseInt(a.match(/^(\d+)/)?.[1] ?? '0', 10)
            const bIdx = parseInt(b.match(/^(\d+)/)?.[1] ?? '0', 10)
            return aIdx - bIdx
          }
        )
        loadStepData(step, stepDataDir)
        step.media = encodeStepMedia(stepFiles)
        step.ratios = mediaRatios(step.media, stepMediaDir)
      }
    }
  }
  return trip
}

;(async () => {
  const slug = process.argv[2]
  if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
    console.error(
      'Usage: ts-node --project tsconfig.node.json src/functions/static/trip/generateLocalTrip.cts <slug>'
    )
    process.exit(1)
  }
  const trip: CompiletimeTrip = await generateTripMetadata(slug)
  const outputPath = `src/data/trips/${slug}.metadata.ts`
  const output = `// GENERATED file — do not edit manually
import { CompiletimeTrip } from '/@/types/trip'
export const initialTripData: CompiletimeTrip = ${JSON.stringify(trip)}`

  writeFileSync(outputPath, output)
  console.log(`✅ ${outputPath} generated`)
})()
