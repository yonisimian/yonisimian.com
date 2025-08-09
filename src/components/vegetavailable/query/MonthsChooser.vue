<template>
  <div class="w-full grid grid-cols-3 lg:grid-cols-4 gap-1">
    <VegetaBadge
      v-for="month in months"
      :key="month"
      :badge="month"
      :activeBadges="activeMonths"
      :toggleBadge="toggleMonth"
    >
      {{ month }}
    </VegetaBadge>
  </div>
</template>

<script setup lang="ts">
import { months } from '/@/types/vegetavailable'
import { useVegetaState } from '/@/composables/useVegetaState'

const { activeMonths, toggleMonth } = useVegetaState()
</script>

<style scoped></style>
