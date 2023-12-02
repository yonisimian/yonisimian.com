<template>
  <FooterIcon
    :class="{ 'animate-tada': animate }"
    title="Email Me"
    href="mailto:yonisimian@gmail.com"
    i="i-ph-envelope-simple"
  />
</template>

<script setup lang="ts">
import { useReachOutAnimation } from '/@/composables/useReachOut'

const { animate } = useReachOutAnimation()
</script>
