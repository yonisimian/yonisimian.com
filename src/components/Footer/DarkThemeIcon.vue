<template>
  <li class="cursor-pointer text-2xl">
    <a
      href="#"
      @click="toggleDark()"
      class="text-cyan-700 hover:text-cyan-500"
      :title="'Toggle Theme'"
    >
      <i i="ph-sun dark:ph-moon" />
    </a>
  </li>
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

<style scoped>
.footer-link {
  opacity: 0.8;
}
</style>
