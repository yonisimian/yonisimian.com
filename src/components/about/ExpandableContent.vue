<template>
  <div class="block overflow-hidden">
    <div
      ref="contentWrapper"
      class="overflow-hidden transition-[max-height] duration-[1010ms] ease-in-out"
      :style="{
        maskImage: gradientStyle,
        WebkitMaskImage: gradientStyle
      }"
      @click="expanded = true"
    >
      <slot></slot>
    </div>
    <div v-if="!expanded" class="flex flex-row items-center justify-end">
      <p
        @click="expanded = true"
        class="cursor-pointer select-none block text-gray-500 dark:text-gray-400"
      >
        read more...
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick, computed } from 'vue'

const expanded = ref(false)
const contentWrapper = ref<HTMLElement | null>(null)
const initialGradientHeight = 50
const gradientHeight = ref(initialGradientHeight)

const gradientStyle = computed(
  () => `linear-gradient(to bottom, black ${gradientHeight.value}%, transparent 100%)`
)

const updateMaxHeight = () => {
  if (contentWrapper.value) {
    contentWrapper.value.style.maxHeight =
      (expanded.value
        ? contentWrapper.value.scrollHeight
        : contentWrapper.value.children[0].clientHeight - 20) + 'px'
  }
}

onMounted(() => {
  updateMaxHeight()
})

watch([expanded, () => window.innerWidth], () => {
  nextTick(() => {
    updateMaxHeight()
  })
})

watch(expanded, () => {
  if (expanded.value) {
    const interval = setInterval(() => {
      gradientHeight.value += 1
      if (gradientHeight.value >= 100) {
        clearInterval(interval)
      }
    }, 1010 / (100 - initialGradientHeight))
  }
})
</script>
