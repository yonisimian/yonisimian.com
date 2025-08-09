export type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export interface Product {
  name: string
  type: ProductType
  months: Month[]
  image: string
}

export interface ProductsByMonth {
  month: Month
  products: Product[]
}

export enum ProductType {
  Vegetable = 'Vegetable',
  Fruit = 'Fruit',
  Herb = 'Herb',
  Nut = 'Nut',
  Legume = 'Legume'
}

// TODO: move consts somewhere else?

export const months: Month[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const monthOrder: Record<Month, number> = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12
}
