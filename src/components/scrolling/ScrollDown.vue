<template>
  <div :class="{ 'absolute bottom-4': absolute }">
    <h3 class="text-2xl mb-2">{{ text }}</h3>
    <ScrollButton :direction="'down'" :handleClick="scrollToSelector" />
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

const scrollToSelector = () => {
  nextArticle.value?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped></style>
