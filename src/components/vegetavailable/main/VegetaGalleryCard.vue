<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
  >
    <img
      :src="`https://www.seasonalfoodguide.org/img/${product.image}.jpg`"
      :alt="product.name"
      class="w-full h-40 object-cover"
    />
    <div class="p-4 flex flex-col items-start justify-center gap-2">
      <h3 class="text-lg font-bold text-gray-800">{{ product.name }}</h3>
      <VegetaGalleryCardBadge class="bg-green-100 text-green-800">
        {{ product.type }}
      </VegetaGalleryCardBadge>
      <VegetaGalleryCardBadge class="bg-gray-200 text-gray-800">
        {{ monthsBadgeText }}
      </VegetaGalleryCardBadge>
      <VegetaGalleryCardBadge v-if="isAvailableNow" class="bg-cyan-100 text-cyan-800 font-semibold">
        Available now!
      </VegetaGalleryCardBadge>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Product, months } from '/@/types/vegetavailable'

const props = defineProps<{
  product: Product
}>()

const sortedMonths = months
  .filter((m) => props.product.months.includes(m))
  .sort((a, b) => months.indexOf(a) - months.indexOf(b))

const rotateToUnwrapped = (numbers: number[]) => {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i - 1] + 1) {
      return numbers.slice(i).concat(numbers.slice(0, i))
    }
  }

  return numbers // Already consecutive, no rotation needed
}

const rotated = rotateToUnwrapped(sortedMonths.map((m) => months.indexOf(m) + 1))

const isAvailableNow = (() => {
  const currentMonth = new Date().getMonth() + 1 // getMonth() is zero-based
  return rotated.includes(currentMonth)
})()

const monthStart = rotated[0]
const monthEnd = rotated[rotated.length - 1]

const monthsBadgeText = (() => {
  if (!rotated.length) {
    return 'Not grown in Israel'
  } else if (rotated.length === 12) {
    return 'Available all year'
  } else if (monthStart === monthEnd) {
    return `Available in ${months[monthStart - 1]}`
  } else {
    return `${months[monthStart - 1]} to ${months[monthEnd - 1]}`
  }
})()
</script>

<style scoped></style>
