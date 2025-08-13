import { Month } from '/@/utils/months'
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

// TODO: make it numbers just like in months.ts
export enum ProductType {
  Vegetable = 'Vegetable',
  Fruit = 'Fruit',
  Herb = 'Herb',
  Nut = 'Nut',
  Legume = 'Legume'
}
