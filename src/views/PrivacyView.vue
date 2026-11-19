<template>
  <article class="w-3xl max-w-[88vw] mx-auto py-16 flex flex-col gap-6 leading-relaxed">
    <header>
      <h1 class="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p class="text-sm opacity-70">Last updated: {{ lastUpdated }}</p>
    </header>

    <section>
      <h2 class="section-title">The short version</h2>
      <p>
        This is a personal website. It has no analytics, no ads, no accounts and no tracking
        cookies. The only personal information I receive is what you choose to send me through the
        contact form, and I never sell or share it.
      </p>
    </section>

    <section>
      <h2 class="section-title">Contact form</h2>
      <p>
        When you send a message through the contact form, your email address and message are
        processed and stored by
        <a href="https://www.netlify.com/privacy/" target="_blank" rel="noreferrer">Netlify</a>
        and forwarded to my inbox. I use them only to reply to you. You can ask me to delete them at
        any time.
      </p>
    </section>

    <section>
      <h2 class="section-title">What is stored on your device</h2>
      <p>
        The site uses your browser's local storage to remember your theme preference (light/dark)
        and whether you have visited before. This data never leaves your device.
      </p>
    </section>

    <section>
      <h2 class="section-title">Hosting</h2>
      <p>
        The site is hosted by
        <a href="https://www.netlify.com/privacy/" target="_blank" rel="noreferrer">Netlify</a>,
        which may process technical data such as your IP address and browser type in server logs for
        security and operational purposes.
      </p>
    </section>

    <section>
      <h2 class="section-title">Third-party content</h2>
      <p>
        Some pages embed content from third parties (e.g. YouTube videos or Spotify playlists). When
        such content loads, those providers may set cookies or collect data according to their own
        privacy policies, such as
        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google's</a>
        and
        <a href="https://www.spotify.com/legal/privacy-policy/" target="_blank" rel="noreferrer"
          >Spotify's</a
        >.
      </p>
    </section>

    <section>
      <h2 class="section-title">Content</h2>
      <p>
        All content on this site is provided as-is, for informational and personal purposes only.
        Unless stated otherwise, content is © Yehonatan Simian.
      </p>
    </section>

    <section>
      <h2 class="section-title">Contact</h2>
      <p>
        Questions or requests? Email me at
        <a href="mailto:yonisimian@gmail.com">yonisimian@gmail.com</a>.
      </p>
    </section>
  </article>
</template>

<script setup lang="ts">
import { useSeoMeta } from '@unhead/vue'

const lastUpdated = 'November 19, 2026'

useSeoMeta({
  title: 'Privacy Policy',
  description: 'Privacy policy for yonisimian.com'
})
</script>

<style scoped>
.section-title {
  @apply text-xl font-bold mb-2;
}
</style>
