import { useQueryParam } from './useQueryParam'
import { Month, months, ProductType } from '/@/types/vegetavailable'
// import { getCurrentMonth } from '../functions/vegetavailable'

export const useVegetaState = () => {
  const QUERY_PARAM_MONTHS = 'months'
  const QUERY_PARAM_TYPE = 'type'
  const QUERY_PARAM_SEARCH = 'search'

  const activeMonths = useQueryParam<Month[]>(QUERY_PARAM_MONTHS, {
    default: [],
    parse: (value) => {
      if (!value) return []
      return value.split(',').filter((m) => months.includes(m as Month)) as Month[]
    },
    stringify: (value) => {
      if (!value || value.length === 0) return ''
      return value.join(',')
    }
  })

  const activeTypes = useQueryParam<ProductType[]>(QUERY_PARAM_TYPE, {
    default: [],
    parse: (value) => {
      if (!value) return []
      return value
        .split(',')
        .filter((t) => Object.values(ProductType).includes(t as ProductType)) as ProductType[]
    },
    stringify: (value) => {
      if (!value || value.length === 0) return ''
      return value.join(',')
    }
  })

  const activeSearch = useQueryParam(QUERY_PARAM_SEARCH, {
    default: ''
  })

  const toggleMonth = (month: Month) => {
    const newMonths = activeMonths.value.includes(month)
      ? activeMonths.value.filter((m) => m !== month)
      : [...activeMonths.value, month]
    activeMonths.value = newMonths
  }

  const toggleType = (type: ProductType) => {
    const newTypes = activeTypes.value.includes(type)
      ? activeTypes.value.filter((t) => t !== type)
      : [...activeTypes.value, type]
    activeTypes.value = newTypes
  }

  const updateSearch = (search: string) => {
    activeSearch.value = search
  }

  return {
    activeMonths,
    activeTypes,
    activeSearch,
    toggleMonth,
    toggleType,
    updateSearch
  }
}
