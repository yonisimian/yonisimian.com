import { Continent, Country, Step } from '../../../../src/types/trip'

export const contDirName = (index: number, cont: Continent): string =>
  `${index.toString().padStart(2, '0')} - ${cont.name}`

export const countryDirName = (index: number, country: Country): string =>
  `${index.toString().padStart(2, '0')} - ${country.name}`

export const stepDirName = (step: Step): string => `step-${step.id}`

export const contDirNameToContName = (contDirName: string): string => {
  return contDirName.slice(5) // Remove 'XX - ' prefix
}

export const countryDirNameToCountryName = (countryDirName: string): string => {
  return countryDirName.slice(5) // Remove 'XX - ' prefix
}
