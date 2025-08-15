<template>
  <main>
    <VegetaGallery :products="productsForSelectedMonth">
      <template #header>
        <VegetaQueryTitle :products="productsForSelectedMonth" />
      </template>
      <template #empty>
        <span class="i-ph-plant-duotone text-6xl text-gray-500 mb-4 inline-block select-none" />
        <p class="text-gray-500 select-none">{{ $t('veg.noProductFound') }}</p>
      </template>
    </VegetaGallery>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { data } from '/@/data/vegetavailable'
import { useVegetaState } from '/@/composables/useVegetaState'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const { activeMonths, activeTypes, activeSearch } = useVegetaState()

const productsForSelectedMonth = computed(() =>
  data
    .filter((p) => activeMonths.value.every((month) => p.months.includes(month)))
    .filter((p) => (activeTypes.value.length > 0 ? activeTypes.value.includes(p.type) : true))
    .filter((p) =>
      activeSearch.value
        ? t(`veg.productName.${p.title.replaceAll(' ', '').replace("'", '')}`)
            .toLowerCase()
            .includes(activeSearch.value.toLowerCase().trim())
        : true
    )
)
</script>

<style scoped></style>
