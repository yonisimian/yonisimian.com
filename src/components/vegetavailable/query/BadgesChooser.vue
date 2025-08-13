<template>
  <div class="w-full grid grid-cols-3 sm:grid-cols-5 gap-1">
    <VegetaBadge
      v-for="(type, index) in productTypeValues"
      :key="type"
      :badge="type"
      :activeBadges="activeTypes"
      :toggleBadge="toggleType"
    >
      {{ getTranslatedTypeName(index) }}
    </VegetaBadge>
  </div>
</template>

<script setup lang="ts">
import { productTypeValues } from '/@/types/vegetavailable'
import { useVegetaState } from '/@/composables/useVegetaState'
import { useI18n } from 'vue-i18n'

const { activeTypes, toggleType } = useVegetaState()

const { t } = useI18n()

const getTranslatedTypeName = (index: number) => {
  return t(`veg.productType[${index}]`) // Adjusting for 0-based index
}
</script>

<style scoped></style>
