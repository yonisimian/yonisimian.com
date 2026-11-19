<template>
  <a v-if="isMail" :href="to" :class="{ subtle }"><slot /></a>
  <a v-else-if="isExternal" :href="to" target="_blank" rel="noreferrer" :class="{ subtle }">
    <slot />
  </a>
  <RouterLink v-else :to="to" :class="{ subtle }"><slot /></RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  to: string
  subtle?: boolean
}>()

const isMail = computed(() => props.to.startsWith('mailto:'))
// Static files (e.g. PDFs) must bypass the router
const isExternal = computed(() => /^https?:/.test(props.to) || /\.\w+$/.test(props.to))
</script>

<style scoped>
.subtle {
  @apply text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400;
}
</style>
