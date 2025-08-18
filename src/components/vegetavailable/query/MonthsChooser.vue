<template>
  <div class="w-full grid grid-cols-3 lg:grid-cols-4 gap-1">
    <YToggleBadge
      v-for="month in months"
      :key="month"
      :active="activeMonths.includes(month)"
      :toggle="() => toggleMonth(month)"
      class="lg:p-2"
    >
      {{ getTranslatedMonthName(month) }}
    </YToggleBadge>
  </div>
</template>

<script setup lang="ts">
import { months } from '/@/utils/months'
import { useVegetaState } from '/@/composables/useVegetaState'
import { useI18n } from 'vue-i18n'

const { activeMonths, toggleMonth } = useVegetaState()

const { t } = useI18n()

const getTranslatedMonthName = (month: number) => {
  return t(`months[${month - 1}]`) // Adjusting for 0-based index
}
</script>

<style scoped></style>
