<template>
  <main>
    <VegetaGallery :products="productsForSelectedMonth">
      <template #header>
        <h2 class="text-2xl font-bold my-6 text-center opacity-90">
          Showing
          <span class="text-cyan-500">{{ productsForSelectedMonth.length }}</span>
          products
        </h2>
      </template>
      <template #empty>
        <span class="i-ph-plant-duotone text-6xl text-gray-500 mb-4 inline-block" />
        <p class="text-gray-500">
          No specific products found for
          {{ activeMonths }}
        </p>
      </template>
    </VegetaGallery>
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
