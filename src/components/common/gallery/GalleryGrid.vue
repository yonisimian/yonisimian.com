<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 sm:gap-4">
    <TransitionGroup name="backCard">
      <GalleryCard
        v-for="(item, index) in sortedItems"
        :key="index"
        :id="`${item.title.toLowerCase().replace(/ /g, '-')}`"
        :item="item"
      >
        <template #CardFront="slotProps">
          <slot name="CardFront" v-bind="slotProps" />
        </template>
        <template #CardBack="slotProps">
          <slot name="CardBack" v-bind="slotProps" />
        </template>
      </GalleryCard>
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts" generic="T extends { title: string }">
import { computed } from 'vue'

const props = defineProps<{
  items: T[]
  sortFn?: (a: T, b: T) => number
}>()

const sortedItems = computed(() =>
  props.sortFn ? [...props.items].sort(props.sortFn) : props.items
)
</script>
