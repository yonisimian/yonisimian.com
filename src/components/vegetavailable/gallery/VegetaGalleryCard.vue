<template>
  <GalleryCardFront>
    <img
      :src="`https://www.seasonalfoodguide.org/img/${product.image}.jpg`"
      :alt="product.title"
      class="w-full h-36 object-cover"
    />
    <div class="px-3 py-2">
      <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100 mb-3">
        {{ $t(`veg.productName.${product.title.replaceAll(' ', '').replace("'", '')}`) }}
      </h3>

      <div class="space-y-2 text-sm">
        <VegetaGalleryCardAttribute
          :title="$t('veg.card.type')"
          :value="$t(`veg.productType[${product.type}]`)"
        />
        <VegetaGalleryCardAttribute :title="$t('veg.card.season')" :value="monthsBadgeText" />
        <VegetaGalleryCardAvailability :availableNow="isAvailableNow" />
      </div>
    </div>
  </GalleryCardFront>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { type Product } from '/@/types/vegetavailable'
import { computed } from 'vue'

const { t } = useI18n()

const props = defineProps<{
  product: Product
}>()

const isAvailableNow = (() => {
  const currentMonth = new Date().getMonth() + 1
  return props.product.months.includes(currentMonth)
})()

const monthsBadgeText = computed(() => {
  const monthStart = props.product.months[0]
  const monthEnd = props.product.months[props.product.months.length - 1]
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

<style scoped></style>
