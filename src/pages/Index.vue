<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from '/@/composables'

const { toggleDark } = useTheme()

const show = ref(false)

setTimeout(() => {
  show.value = true
}, 1000)
</script>
<template>
  <div class="container max-w-3xl mx-auto mt-60">
    <HelloWorld :msg="'Hello' + ' 👋 ' + 'there, welcome to Vitesome'" />

    <footer class="text-center">
      <ul class="flex justify-between w-1/3 mx-auto mb-8">
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
        <li class="cursor-pointer text-2xl">
          <a
            href="https://github.com/alvarosabu"
            rel="noreferrer"
            target="_blank"
            class="footer-link text-cyan-700 hover:text-cyan-500"
            title="Github repo"
          >
            <i class="i-ph-github-logo" />
          </a>
        </li>
      </ul>

      <span class="text-xs"
        >Made by
        <a
          class="footer-link text-cyan-400 hover:text-cyan-500"
          href="https://github.com/alvarosabu/vitesome"
          rel="noreferrer"
          target="_blank"
          >Alvaro Saburido</a
        ></span
      >
    </footer>
  </div>
</template>

<style scoped>
.footer-link {
  opacity: 0.8;
}
</style>
