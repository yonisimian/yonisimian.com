<template>
  <div class="text-center text-md">
    <h1 class="font-serif font-bold font-bold text-4xl mb-8">
      Hello 👋 there, welcome my portfolio!
    </h1>

    <p>Maybe write a bit about myself?</p>
    <p class="mb-10">
      <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
a {
  @apply text-cyan-400 hover:text-cyan-500 transition-all ease-out duration-100;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}
</style>
