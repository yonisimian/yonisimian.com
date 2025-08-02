import { joinPath } from '../..'
import {
  BaseStep,
  CompiletimeStep,
  CompiletimeTrip,
  Continent,
  Country,
  Trip
} from '../../../../src/types/trip'

export const contDirName = <T extends BaseStep>(
  index: number,
  cont: Continent<Country<T>>
): string => `${index.toString().padStart(2, '0')} - ${cont.name}`

export const countryDirName = <T extends BaseStep>(index: number, country: Country<T>): string =>
  `${index.toString().padStart(2, '0')} - ${country.name}`

export const stepDirName = <T extends BaseStep>(step: T): string => `step-${step.id}`

export const contDirNameToContName = (contDirName: string): string => {
  return contDirName.slice(5) // Remove 'XX - ' prefix
}

export const countryDirNameToCountryName = (countryDirName: string): string => {
  return countryDirName.slice(5) // Remove 'XX - ' prefix
}

export const encodeStepMedia = (stepFiles: string[]) => {
  let media = ''

  for (const file of stepFiles) {
    const match = file.match(/^(\d+)(-thumb|-video)?\.(\w+)$/)
    if (!match) {
      continue
    }
    const [_, _idx, typ] = match
    if (typ === '-video') media += 'v' // video
    else if (typ === '-thumb') /*already added video */ continue
    else media += 'p' // photo
  }

  return media
}

export const decodeStepMedia = (media: string, stepDirPath: string) => {
  return [...media].map((letter, index) =>
    letter === 'p'
      ? `${stepDirPath}/${index}.jpg`
      : {
          thumbnail: `${stepDirPath}/${index}-thumb.jpg`,
          video: `${stepDirPath}/${index}-video.webm`
        }
  )
}

export const decodeTrip = (trip: CompiletimeTrip): Trip => {
  const getCountryDir = (
    continentIndex: number,
    continent: Continent<Country<CompiletimeStep>>,
    country: Country<CompiletimeStep>
  ) => {
    const countryIndex = trip.continents.flatMap((c) => c.countries).findIndex((c) => c === country)
    return joinPath(
      'media',
      'trip',
      contDirName(continentIndex, continent),
      countryDirName(countryIndex, country)
    )
  }
  return {
    continents: trip.continents.map((cont, contIndex) => ({
      ...cont,
      // bgImage: encodeURI(...)
      countries: cont.countries.map((country) => ({
        ...country,
        bgImage: `${getCountryDir(contIndex, cont, country)}/flag.webp`,
        steps: country.steps.map((step) => {
          const stepDirPath = `${getCountryDir(contIndex, cont, country)}/${stepDirName(step)}`
          return {
            ...step,
            description: '',
            bgImage: `${stepDirPath}/bg.webp`,
            media: decodeStepMedia(step.media, stepDirPath)
          }
        })
      }))
    }))
  }
}
