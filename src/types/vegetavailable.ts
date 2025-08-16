import { Month } from '/@/utils/months'
export interface Product {
  title: string
  type: ProductType
  months: Month[]
  image: string
}

export enum ProductType {
  Vegetable,
  Fruit,
  Herb,
  Nut,
  Legume
}

export const productTypeValues = Object.values(ProductType).filter(
  (value) => typeof value === 'number'
) as ProductType[]
