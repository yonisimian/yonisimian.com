<template>
  <div ref="root" class="w-full">
    <div
      v-for="row in rows"
      :key="row.start"
      class="flex overflow-hidden"
      :style="{ height: `${row.height}px`, gap: `${gap}px`, marginBottom: `${gap}px` }"
    >
      <div
        v-for="index in row.end - row.start"
        :key="row.start + index - 1"
        class="flex-none h-full"
        :style="{ width: `${items[row.start + index - 1].ratio * row.height}px` }"
      >
        <slot :item="items[row.start + index - 1]" :index="row.start + index - 1" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" generic="T extends { ratio: number }">
import { computed, useTemplateRef } from 'vue'
import { useElementSize, useMediaQuery } from '@vueuse/core'
import { justifyRows } from '/@/functions/justify'

const props = withDefaults(
  defineProps<{
    items: T[]
    targetRowHeight?: number // defaults to 160px on small screens, 240px otherwise
    gap?: number
  }>(),
  { gap: 4 }
)

defineSlots<{
  default(props: { item: T; index: number }): unknown
}>()

const isWide = useMediaQuery('(min-width: 640px)')
const { width } = useElementSize(useTemplateRef<HTMLDivElement>('root'))

const rows = computed(() =>
  justifyRows(
    props.items.map((item) => item.ratio),
    width.value,
    props.targetRowHeight ?? (isWide.value ? 240 : 160),
    props.gap
  )
)
</script>
