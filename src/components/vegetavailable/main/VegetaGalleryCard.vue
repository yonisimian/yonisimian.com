<template>
  <div
    class="card rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl select-none dark:bg-cyan-400/10 hover:dark:bg-cyan-400/20 backdrop-filter backdrop-blur-[3px] hover:backdrop-blur-[4px]"
  >
    <img
      :src="`https://www.seasonalfoodguide.org/img/${product.image}.jpg`"
      :alt="product.name"
      class="w-full h-40 object-cover"
    />
    <div class="p-4">
      <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100 mb-3">
        {{ $t(`veg.productName.${product.name.replaceAll(' ', '').replace("'", '')}`) }}
      </h3>

      <div class="space-y-2 text-sm">
        <div class="flex items-center justify-between">
          <span class="text-gray-600 dark:text-gray-400 font-medium">{{
            $t('veg.card.type')
          }}</span>
          <span class="text-gray-900 dark:text-gray-100 capitalize">{{
            $t(`veg.productType[${product.type}]`)
          }}</span>
        </div>

        <div class="flex items-center justify-between">
          <span class="text-gray-600 dark:text-gray-400 font-medium">{{
            $t('veg.card.season')
          }}</span>
          <span class="text-gray-900 dark:text-gray-100">{{ monthsBadgeText }}</span>
        </div>

        <div
          v-if="isAvailableNow"
          class="flex items-center justify-center mt-3 pt-2 border-t border-gray-200 dark:border-gray-700"
        >
          <div class="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse animate-duration-3000" />
            {{ $t('veg.card.availableNow') }}
          </div>
        </div>
        <div
          v-else
          class="flex items-center justify-center mt-3 pt-2 border-t border-gray-200 dark:border-gray-700"
        >
          <div class="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-medium">
            {{ $t('veg.card.notAvailableNow') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { type Product } from '/@/types/vegetavailable'
import { computed } from 'vue'

const { t } = useI18n()

const props = defineProps<{
  product: Product
  index: number
}>()

const isAvailableNow = (() => {
  const currentMonth = new Date().getMonth() + 1
  return props.product.months.includes(currentMonth)
})()

const monthStart = props.product.months[0]
const monthEnd = props.product.months[props.product.months.length - 1]

const monthsBadgeText = computed(() => {
  if (!props.product.months.length) {
    return t('veg.card.notAvailable')
  } else if (props.product.months.length === 12) {
    return t('veg.card.availableAllYear')
  } else if (monthStart === monthEnd) {
    return t(`months[${monthStart - 1}]`)
  } else {
    return `${t(`months[${monthStart - 1}]`)} ${t('veg.card.to')} ${t(`months[${monthEnd - 1}]`)}`
  }
})
</script>

<style scoped>
.card :deep(img) {
  transform: scale(1);
  transition: transform 0.5s ease;
}

.card:hover :deep(img) {
  transform: scale(1.05);
  transition: transform 0.5s ease;
}
</style>
