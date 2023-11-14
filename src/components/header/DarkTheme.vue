<template>
  <button @click="toggleDark()" class="text-cyan-700 hover:text-cyan-500" :title="'Toggle Theme'">
    <i i="dark:ph-sun ph-moon" />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from '/@/composables'

const { toggleDark } = useTheme()

const show = ref(false)

setTimeout(() => {
  show.value = true
}, 1000)
</script>

<style scoped></style>
