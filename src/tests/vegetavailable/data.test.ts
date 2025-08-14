import { data } from '/@/data/vegetavailable'
import type { Product } from '/@/types/vegetavailable'
import { Month } from '/@/utils/months'
import { expect, test } from 'vitest'

const testMonthsOrder = (products: Product[]) => {
  const testProduct = (product: Product): boolean => {
    const months = [...product.months]

    const isConsecutive = (month: Month, i: number) =>
      i === 0 || month % 12 === (months[i - 1] + 1) % 12

    const isProductValid = months.every((m, i) => isConsecutive(m, i))

    if (!isProductValid) {
      console.error(`Product "${product.name}" has invalid month range: ${months.join(', ')}`)
    }

    return isProductValid
  }
  return products.every((product) => testProduct(product))
}

test('All products have valid month ranges', () => {
  expect(testMonthsOrder(data)).toBe(true)
})
