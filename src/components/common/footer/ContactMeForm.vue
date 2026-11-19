<template>
  <p v-if="status === 'sent'" class="opacity-80">
    Thanks! I'll get back to you soon (unless I get kidnapped by aliens).
  </p>
  <form v-else name="contact" method="POST" class="flex flex-col gap-2" @submit.prevent="submit">
    <input type="hidden" name="form-name" value="contact" />
    <input type="hidden" name="subject" :value="subject" data-remove-prefix />
    <input name="bot-field" class="hidden" tabindex="-1" autocomplete="off" aria-hidden="true" />
    <input
      type="email"
      name="email"
      required
      placeholder="Your email"
      aria-label="Your email"
      class="contact-input"
    />
    <textarea
      name="message"
      required
      rows="3"
      placeholder="Your message"
      aria-label="Your message"
      class="contact-input resize-none"
    />
    <div class="flex items-center justify-between gap-2">
      <span class="text-xs opacity-70">
        <template v-if="status === 'error'">Something went wrong. Try emailing me.</template>
        <template v-else>
          or
          <YLink :to="`mailto:${email}`" subtle>{{ email }}</YLink>
          <button
            type="button"
            class="ml-1 align-middle text-cyan-700 hover:text-cyan-500"
            :title="copied ? 'Copied!' : 'Copy email address'"
            :aria-label="copied ? 'Copied!' : 'Copy email address'"
            @click="copy(email)"
          >
            <i :class="copied ? 'i-ph-check' : 'i-ph-copy'" />
          </button>
        </template>
      </span>
      <button
        type="submit"
        :disabled="status === 'sending'"
        class="shrink-0 px-3 py-1 rounded-md bg-cyan-700 hover:bg-cyan-600 text-white disabled:opacity-50"
      >
        {{ status === 'sending' ? 'Sending…' : 'Send' }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useClipboard } from '@vueuse/core'

const email = 'yonisimian@gmail.com'
const subject = 'New message from yonisimian.com'
const { copy, copied } = useClipboard({ legacy: true })

const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')

const submit = async (event: Event) => {
  status.value = 'sending'
  const data = new FormData(event.target as HTMLFormElement)
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as unknown as Record<string, string>).toString()
    })
    status.value = response.ok ? 'sent' : 'error'
  } catch {
    status.value = 'error'
  }
}
</script>

<style scoped>
.contact-input {
  @apply w-full px-3 py-2 rounded-md bg-transparent border border-blue-gray-300 dark:border-blue-gray-700 outline-none focus:border-cyan-500 placeholder:opacity-60 backdrop-blur-sm;
}
</style>
