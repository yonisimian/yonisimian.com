import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'fs'
import { join } from 'path'
import { CompiletimeTrip, Continent, Country, CompiletimeStep } from '../../../../src/types/trip'

interface PolarMedia {
  order: number
  type: number
  path: string
  cdn_path?: string | null
  large_thumbnail_path?: string
}

interface PolarStep {
  id: number
  name: string
  display_name?: string
  start_time: string
  location?: {
    country?: string
    country_code?: string
    locality?: string
  } | null
  weather_temperature?: number | null
  description?: string | null
  media?: PolarMedia[]
}

interface PolarTrip {
  name: string
  timezone_id?: string
  steps: PolarStep[]
}

interface Download {
  url: string
  path: string
}

const continentByCountryCode: Record<string, string> = {
  AT: 'Europe',
  CH: 'Europe',
  IS: 'Europe',
  IL: 'Asia'
}

const escapeHtml = (text: string) =>
  text.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }
    return entities[character]
  })

const descriptionToHtml = (description: string) =>
  description
    .trim()
    .split(/\n\s*\n/)
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, '<br>')}</p>`)
    .join('\n')

const safeName = (name: string) =>
  name
    .replace(/[<>:"/\\|?*\x00-\x1f]/g, '-')
    .replace(/\s+/g, ' ')
    .trim()

const downloadFile = async ({ url, path }: Download) => {
  if (!/^https:\/\//.test(url)) throw new Error(`Unsupported download URL: ${url}`)
  if (existsSync(path) && statSync(path).size > 0) return

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status} ${response.statusText}`)
  }
  mkdirSync(join(path, '..'), { recursive: true })
  writeFileSync(path, Buffer.from(await response.arrayBuffer()))
}

const runDownloads = async (downloads: Download[]) => {
  const failures: string[] = []
  let completed = 0
  let nextIndex = 0

  const worker = async () => {
    while (nextIndex < downloads.length) {
      const download = downloads[nextIndex++]
      try {
        await downloadFile(download)
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error)
        failures.push(message)
        console.error(message)
      }

      completed++
      if (completed % 20 === 0 || completed === downloads.length) {
        console.log(`Downloaded ${completed}/${downloads.length} assets`)
      }
    }
  }

  await Promise.all(Array.from({ length: 8 }, worker))
  if (failures.length) {
    throw new Error(`Failed to download ${failures.length} of ${downloads.length} assets`)
  }
}

const main = async () => {
  const [inputPath, slug] = process.argv.slice(2)
  if (!inputPath || !slug || !/^[a-z0-9-]+$/.test(slug)) {
    throw new Error(
      'Usage: ts-node --project tsconfig.node.json src/functions/static/trip/importPolarstepsTrip.cts <trip.json> <slug>'
    )
  }

  const trip = JSON.parse(readFileSync(inputPath, 'utf-8')) as PolarTrip
  if (!Array.isArray(trip.steps) || trip.steps.length === 0) {
    throw new Error(`No steps found in ${inputPath}`)
  }

  const dataRoot = join('public', 'data', 'trips', slug)
  const mediaRoot = join('public', 'media', 'trips', slug)
  const downloads: Download[] = []
  const continents: Continent<Country<CompiletimeStep>>[] = []
  const countryByName = new Map<string, Country<CompiletimeStep>>()
  let lastCountryCode = ''
  let lastCountryName = ''
  let stepCount = 0
  let countryCount = 0

  for (const polarStep of trip.steps) {
    const name = polarStep.display_name || polarStep.name
    let countryCode = polarStep.location?.country_code || lastCountryCode
    const countryName = polarStep.location?.country || lastCountryName
    if (!continentByCountryCode[countryCode] && countryName === lastCountryName) {
      countryCode = lastCountryCode
    }
    const continentName = continentByCountryCode[countryCode]
    if (!continentName || !countryName) {
      throw new Error(`Missing country/continent for step "${name}" (${countryCode || 'unknown'})`)
    }

    lastCountryCode = countryCode
    lastCountryName = countryName
    const lastContinent = continents[continents.length - 1]
    let continent = lastContinent?.name === continentName ? lastContinent : undefined
    if (!continent) {
      continent = { name: continentName, countries: [] }
      continents.push(continent)
    }

    const countryKey = `${continents.length - 1}:${countryCode}:${countryName}`
    let country = countryByName.get(countryKey)
    if (!country) {
      country = { name: countryName, steps: [] }
      countryByName.set(countryKey, country)
      continent.countries.push(country)
      countryCount++
    }

    const id = ++stepCount
    const step: CompiletimeStep = {
      id,
      name,
      shortName: polarStep.location?.locality || name,
      date: new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC'
      }).format(new Date(polarStep.start_time)),
      degrees:
        typeof polarStep.weather_temperature === 'number'
          ? String(Math.round(polarStep.weather_temperature))
          : '',
      media: '',
      ratios: []
    }
    country.steps.push(step)

    const continentIndex = continents.length - 1
    const countryIndex = countryCount - 1
    const continentDir = `${String(continentIndex).padStart(2, '0')} - ${continentName}`
    const countryDir = `${String(countryIndex).padStart(2, '0')} - ${safeName(countryName)}`
    const stepDir = `step-${id}`
    const dataStepDir = join(dataRoot, continentDir, countryDir, stepDir)
    const mediaStepDir = join(mediaRoot, continentDir, countryDir, stepDir)
    mkdirSync(dataStepDir, { recursive: true })
    mkdirSync(mediaStepDir, { recursive: true })

    const localMedia = [...(polarStep.media || [])].sort((a, b) => a.order - b.order)
    for (let index = 0; index < localMedia.length; index++) {
      const media = localMedia[index]
      if (media.type === 0) {
        step.media += 'p'
        const filename = `${index}.jpg`
        downloads.push({
          url: media.large_thumbnail_path || media.path,
          path: join(mediaStepDir, filename)
        })
      } else if (media.type === 1) {
        step.media += 'v'
        const filename = `${index}-video.webm`
        if (!media.large_thumbnail_path) {
          throw new Error(`Missing video thumbnail for "${name}" media ${index}`)
        }
        downloads.push({ url: media.cdn_path || media.path, path: join(mediaStepDir, filename) })
        downloads.push({
          url: media.large_thumbnail_path,
          path: join(mediaStepDir, `${index}-thumb.jpg`)
        })
      } else {
        throw new Error(`Unsupported media type ${media.type} in step "${name}"`)
      }
    }

    writeFileSync(
      join(dataStepDir, `${id} - ${safeName(name)}.json`),
      JSON.stringify(
        {
          id,
          name,
          shortName: step.shortName,
          date: step.date,
          degrees: step.degrees,
          bgImage: 0
        },
        null,
        2
      )
    )
    writeFileSync(
      join(dataStepDir, 'description.html'),
      descriptionToHtml(polarStep.description || ''),
      'utf-8'
    )
  }

  for (const [continentIndex, continent] of continents.entries()) {
    const continentDir = `${String(continentIndex).padStart(2, '0')} - ${continent.name}`
    for (const [countryIndex, country] of countryByName.entries()) {
      const [countryContinentIndex] = countryIndex.split(':')
      if (Number(countryContinentIndex) !== continentIndex) continue
      const globalCountryIndex = [...countryByName.keys()].indexOf(countryIndex)
      const countryDir = `${String(globalCountryIndex).padStart(2, '0')} - ${safeName(country.name)}`
      const countryCode = countryIndex.split(':')[1].toLowerCase()
      downloads.push({
        url: `https://flagcdn.com/w320/${countryCode}.webp`,
        path: join(mediaRoot, continentDir, countryDir, 'flag.webp')
      })
    }
  }

  await runDownloads(downloads)

  const metadataPath = join('src', 'data', 'trips', `${slug}.metadata.ts`)
  const output = `// GENERATED file — do not edit manually
import { CompiletimeTrip } from '/@/types/trip'
export const initialTripData: CompiletimeTrip = ${JSON.stringify({ continents } satisfies CompiletimeTrip)}`
  writeFileSync(metadataPath, output)
  console.log(`Imported ${trip.name}: ${stepCount} steps, ${downloads.length} assets`)
  console.log(`✅ ${metadataPath} generated`)
  console.log(`Next: pnpm generate-thumbnails && pnpm generate-local-trip ${slug}`)
}

main().catch((error: unknown) => {
  console.error(error)
  process.exitCode = 1
})
