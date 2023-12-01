<template>
  <div :class="{ 'absolute bottom-4': absolute }">
    <h3 class="text-2xl mb-2">{{ text }}</h3>
    <button class="animate-bounce" @click="scrollToNextArticle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-6 w-6 m-auto"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M19 14l-7 7 l-7-7"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  text: string
  selector: string
  absolute?: boolean
}>()

let nextArticle = ref<HTMLElement | null>(null)

onMounted(() => {
  nextArticle.value = document.querySelector(props.selector)
})

const scrollToNextArticle = () => {
  nextArticle.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped></style>
