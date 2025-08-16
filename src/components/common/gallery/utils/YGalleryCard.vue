<template>
  <div>
    <Transition name="slide">
      <div v-if="isChosen">
        <slot name="CardBack" :discard="discard" :item="item" />
      </div>
    </Transition>
    <slot name="CardFront" :onClick="select" :item="item" />
  </div>
</template>

<script setup lang="ts" generic="T">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  id: string
  item: T
}>()

const isChosen = ref(false)

function discard() {
  isChosen.value = false
}

function select() {
  isChosen.value = true
}

onMounted(() => {
  if (window.location.hash.substring(1) === props.id) {
    isChosen.value = true
  }
})
</script>
