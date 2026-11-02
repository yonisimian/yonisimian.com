import { writeFileSync, readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import { CompiletimeTrip, Continent, Country, CompiletimeStep } from '../../../../src/types/trip'
import { contDirNameToContName, countryDirNameToCountryName, encodeStepMedia } from './utils'

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

const generateTripMetadata = async (): Promise<CompiletimeTrip> => {
  const trip: CompiletimeTrip = { continents: [] }
  const tripMediaDir = join('public', 'media', 'trip')
  const tripDataDir = join('public', 'data', 'trip')
  let stepCount = 1

  const continentsDirNames = readdirSync(tripMediaDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort()

  for (const continentDirName of continentsDirNames) {
    const continent: Continent<Country<CompiletimeStep>> = {
      name: contDirNameToContName(continentDirName),
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
        name: countryDirNameToCountryName(countryDirName),
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
          media: ''
        }
        country.steps.push(step)
        const stepDataDir = join(countryDataDir, stepDirName)
        const stepMediaDir = join(countryMediaDir, stepDirName)
        const stepFiles = readdirSync(stepMediaDir).sort((a, b) => {
          const aIdx = parseInt(a.match(/^(\d+)/)?.[1] ?? '0', 10)
          const bIdx = parseInt(b.match(/^(\d+)/)?.[1] ?? '0', 10)
          return aIdx - bIdx
        })
        loadStepData(step, stepDataDir)
        step.media = encodeStepMedia(stepFiles)
      }
    }
  }
  return trip
}

;(async () => {
  const trip: CompiletimeTrip = await generateTripMetadata()
  const outputPath = 'src/data/trip.metadata.ts'
  const output = `// GENERATED file — do not edit manually
import { CompiletimeTrip } from '/@/types/trip'
export const initialTripData: CompiletimeTrip = ${JSON.stringify(trip)}`

  writeFileSync(outputPath, output)
  console.log(`✅ ${outputPath} generated`)
})()
