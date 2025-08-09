<template>
  <main>
    <h2 class="text-2xl font-bold text-gray-700 my-6 text-center">
      Showing
      <span class="text-green-600">{{ productsForSelectedMonth.length }}</span>
      products
    </h2>

    <div
      v-if="productsForSelectedMonth.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
    >
      <VegetaMonthCard v-for="product in productsForSelectedMonth" :key="product.name" :product />
    </div>
    <div v-else class="text-center py-12">
      <span class="i-ph-plant-duotone text-6xl text-gray-400 mb-4 inline-block" />
      <p class="text-gray-500">No specific products found for {{ activeMonths }}.</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { data } from '/@/data/vegetavailable'
import { useVegetaState } from '/@/composables/useVegetaState'

const { activeMonths, activeTypes, activeSearch } = useVegetaState()

const productsForSelectedMonth = computed(() =>
  data
    .filter((p) => activeMonths.value.every((month) => p.months.includes(month)))
    .filter((p) => (activeTypes.value.length > 0 ? activeTypes.value.includes(p.type) : true))
    .filter((p) =>
      activeSearch.value ? p.name.toLowerCase().includes(activeSearch.value.toLowerCase()) : true
    )
)
</script>

<style scoped></style>
