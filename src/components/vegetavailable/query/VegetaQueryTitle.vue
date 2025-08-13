<template>
  <h2 class="text-2xl font-bold my-6 text-center opacity-90">
    Showing
    <span class="text-cyan-500">{{ products.length }}</span>
    {{ products.length === 1 ? 'product' : 'products' }}
    <span v-if="activeTypes.length">
      of
      {{
        activeTypes.length == 1
          ? 'type'
          : activeTypes.length > 1 && activeTypes.length < Object.values(ProductType).length
          ? 'types'
          : ''
      }}
      <span class="text-cyan-500">
        {{
          activeTypes.length !== Object.values(ProductType).length
            ? `${activeTypes.sort().join(', ')}`
            : 'all types'
        }}
      </span>
    </span>
    <span v-if="activeMonths.length">
      that are available {{ activeMonths.length < months.length ? 'on' : '' }}
      <span class="text-cyan-500">
        {{
          activeMonths.length < months.length
            ? `${activeMonths.sort(monthSorter).join(', ')}`
            : 'all year'
        }}
      </span>
    </span>
    <span v-if="activeSearch">
      with
      <span class="text-cyan-500">{{ activeSearch }}</span>
      in the name
    </span>
  </h2>
</template>

<script setup lang="ts">
import { useVegetaState } from '/@/composables/useVegetaState'
import { Product, ProductType } from '/@/types/vegetavailable'
import { months, monthSorter } from '/@/utils/months'

const { activeMonths, activeTypes, activeSearch } = useVegetaState()

defineProps<{
  products: Product[]
}>()
</script>

<style scoped></style>
