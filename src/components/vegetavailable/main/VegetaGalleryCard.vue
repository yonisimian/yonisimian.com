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
        {{ product.name }}
      </h3>

      <div class="space-y-2 text-sm">
        <div class="flex items-center justify-between">
          <span class="text-gray-600 dark:text-gray-400 font-medium">Type</span>
          <span class="text-gray-900 dark:text-gray-100 capitalize">{{ product.type }}</span>
        </div>

        <div class="flex items-center justify-between">
          <span class="text-gray-600 dark:text-gray-400 font-medium">Season</span>
          <span class="text-gray-900 dark:text-gray-100">{{ monthsBadgeText }}</span>
        </div>

        <div
          v-if="isAvailableNow"
          class="flex items-center justify-center mt-3 pt-2 border-t border-gray-200 dark:border-gray-700"
        >
          <div class="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium">
            <div
              class="w-2 h-2 bg-green-500 rounded-full animate-pulse animate-duration-3000"
            ></div>
            Available now
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Product } from '/@/types/vegetavailable'
import { months, monthSorter } from '/@/utils/months'

const props = defineProps<{
  product: Product
  index: number
}>()

const sortedMonths = months.filter((m) => props.product.months.includes(m)).sort(monthSorter)

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
