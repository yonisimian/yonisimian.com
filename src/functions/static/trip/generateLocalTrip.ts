import { writeFileSync, readdirSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'
import {
  Trip,
  /*MediaType,*/ Continent,
  Country,
  Step,
  MediaType
} from '../../../../src/types/trip'
import { contDirNameToContName, countryDirNameToCountryName } from './utils'
import sharp from 'sharp'

const createStepMediaManifest = (step: Step, stepMediaDir: string, stepDataDir: string) => {
  const files = readdirSync(stepMediaDir)

  const map = new Map<string, { photo?: string; thumb?: string; video?: string }>()

  for (const file of files) {
    const match = file.match(/^(\d+)(-thumb|-video)?\.(\w+)$/)
    if (!match) {
      console.warn(`Skipping file with unexpected format: ${file} in ${stepMediaDir}`)
      continue
    }
    const [_, idx, typ] = match
    const key = `${idx}`
    const entry = map.get(key) ?? {}
    const full = join(stepMediaDir, file).replace('public\\', '\\').replace(/\\/g, '/')
    const encoded = encodeURI(full)
    if (typ === '-thumb') entry.thumb = encoded
    else if (typ === '-video') entry.video = encoded
    else entry.photo = encoded
    map.set(key, entry)
  }

  // add the media to the step
  const newMedia: MediaType[] = []
  for (const e of map.values()) {
    if (e.video && e.thumb) newMedia.push({ thumbnail: e.thumb, video: e.video })
    else if (e.photo) newMedia.push(e.photo)
  }
  step.media = newMedia

  // Create a manifest file
  const manifest = Array.from(map.entries()).map(([key, value]) => ({
    id: parseInt(key, 10),
    photo: value.photo,
    thumb: value.thumb,
    video: value.video
  }))

  if (step.id < 3) {
    const manifestPath = join(stepDataDir, 'media_manifest.json')
    writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8')
    console.log(`✅ Created media manifest for step ${step.id} at ${manifestPath}`)
  }
}

const loadStepBgMedia = async (step: Step, stepMediaDir: string) => {
  if (typeof step.bgImage !== 'number') return

  const inputImagePath = join(stepMediaDir, `${step.bgImage}.jpg`) // bgImage represents an image
  const inputThumbPath = join(stepMediaDir, `${step.bgImage}-thumb.jpg`) // bgImage represents a video
  const outputPath = join(stepMediaDir, 'bg.webp')

  const resizeAndSaveImage = async (inputPath: string) => {
    await sharp(inputPath).resize(150, 100).toFormat('webp').toFile(outputPath)
    step.bgImage = encodeURI(outputPath.replace('public\\', '\\').replace(/\\/g, '/'))
  }

  if (existsSync(inputImagePath)) {
    await resizeAndSaveImage(inputImagePath)
  } else if (existsSync(inputThumbPath)) {
    await resizeAndSaveImage(inputThumbPath)
  }
}

const loadStepData = (step: Step, stepDir: string) => {
  const files = readdirSync(stepDir)
  const dataFile = files.find((file) => file.endsWith('.json'))
  if (!dataFile) {
    console.warn(`No data file found for step ${step.id} in ${stepDir}`)
    return
  }
  const dataPath = join(stepDir, dataFile)
  const data = JSON.parse(readFileSync(dataPath, 'utf-8'))
  // TODO: validate
  step.name = data.name
  step.shortName = data.shortName
  step.date = data.date
  step.degrees = data.degrees
  // step.description = data.description
  step.bgImage =
    typeof data.bgImage === 'string'
      ? encodeURI(data.bgImage.replace('public\\', '\\').replace(/\\/g, '/'))
      : data.bgImage
}

const generateTripMetadata = async (): Promise<Trip> => {
  const trip: Trip = { continents: [] }
  const tripMediaDir = join('public', 'media', 'trip')
  const tripDataDir = join('public', 'data', 'trip')
  let stepCount = 1

  const continentsDirNames = readdirSync(tripMediaDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort()

  for (const continentDirName of continentsDirNames) {
    const continent: Continent = { name: contDirNameToContName(continentDirName), countries: [] }
    trip.continents.push(continent)
    const contMediaDir = join(tripMediaDir, continentDirName)
    const contDataDir = join(tripDataDir, continentDirName)
    const files = readdirSync(contMediaDir)
    if (files.includes('flag.jpg')) {
      continent.bgImage = encodeURI(
        join(contMediaDir, 'flag.jpg').replace('public\\', '\\').replace(/\\/g, '/')
      )
    }

    const countriesDirNames = readdirSync(contMediaDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
      .sort()

    for (const countryDirName of countriesDirNames) {
      const country: Country = { name: countryDirNameToCountryName(countryDirName), steps: [] }
      continent.countries.push(country)
      const countryMediaDir = join(contMediaDir, countryDirName)
      const countryDataDir = join(contDataDir, countryDirName)
      const files = readdirSync(countryMediaDir)
      if (files.includes('flag.jpg')) {
        country.bgImage = encodeURI(
          join(countryMediaDir, 'flag.jpg').replace('public\\', '\\').replace(/\\/g, '/')
        )
      }

      const stepsDirNames = readdirSync(countryMediaDir, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name)
        .sort()

      for (const stepDirName of stepsDirNames) {
        const step: Step = {
          id: stepCount++,
          name: '',
          shortName: '',
          date: '',
          degrees: '',
          description: '',
          media: []
        }
        country.steps.push(step)
        const stepDataDir = join(countryDataDir, stepDirName)
        const stepMediaDir = join(countryMediaDir, stepDirName)
        loadStepData(step, stepDataDir)
        await loadStepBgMedia(step, stepMediaDir)
        createStepMediaManifest(step, stepMediaDir, stepDataDir)
      }
    }
  }
  return trip
}

;(async () => {
  const trip: Trip = await generateTripMetadata()
  const outputPath = 'src/data/trip.metadata.ts'
  const output = `// GENERATED file — do not edit manually
import { Trip } from '/@/types/trip'
export const trip: Trip = ${JSON.stringify(trip)}`

  writeFileSync(outputPath, output)
  console.log(`✅ ${outputPath} generated`)
})()
