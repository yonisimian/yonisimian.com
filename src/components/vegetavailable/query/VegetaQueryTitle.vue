<template>
  <h2 class="text-2xl font-bold my-6 text-center opacity-90">
    {{ $t('veg.queryTitle.showing') }}
    <span class="text-cyan-500">{{ products.length }}</span>
    {{ products.length === 1 ? $t('veg.queryTitle.product') : $t('veg.queryTitle.products') }}
    <span v-if="activeTypes.length">
      {{ $t('veg.queryTitle.of') }}
      {{
        activeTypes.length == 1
          ? $t('veg.queryTitle.type')
          : activeTypes.length > 1 && activeTypes.length < productTypeValues.length
          ? $t('veg.queryTitle.types')
          : ''
      }}
      <span class="text-cyan-500">
        {{
          activeTypes.length !== productTypeValues.length
            ? activeTypes
                .sort()
                .map((product) => $t(`veg.productType.${productTypeValues.indexOf(product)}`))
                .join(', ')
                .toLowerCase()
                .concat(' ')
            : $t('veg.queryTitle.allTypes')
        }}
      </span>
    </span>
    <span v-if="activeMonths.length">
      {{
        products.length == 1
          ? $t('veg.queryTitle.thatAreAvailable')
          : $t('veg.queryTitle.thatAreAvailablePlural')
      }}
      {{ activeMonths.length < months.length ? $t('veg.queryTitle.on') : ''
      }}<span class="text-cyan-500">
        {{
          activeMonths.length < months.length
            ? `${activeMonths
                .sort(monthSorter)
                .map((month) => $t(`months.${months.indexOf(month)}`))
                .join(', ')}`
            : $t('veg.queryTitle.allYear')
        }}
      </span>
    </span>
    <span v-if="activeSearch">
      {{}}
      {{ $t('veg.queryTitle.with') }}
      <span class="text-cyan-500">{{ activeSearch }}</span>
      {{ $t('veg.queryTitle.inTheName') }}
    </span>
  </h2>
</template>

<script setup lang="ts">
import { useVegetaState } from '/@/composables/useVegetaState'
import { Product, productTypeValues } from '/@/types/vegetavailable'
import { months, monthSorter } from '/@/utils/months'

const { activeMonths, activeTypes, activeSearch } = useVegetaState()

defineProps<{
  products: Product[]
}>()
</script>

<style scoped></style>
