export enum Month {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

export const months: Month[] = Object.values(Month).filter((value) => typeof value === 'number')

export const monthSorter = (a: Month, b: Month): number => {
  return a - b
}
