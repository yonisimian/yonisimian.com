<template>
  <footer class="w-5xl max-w-[88vw] mx-auto mb-6 text-sm">
    <hr class="bg-blue-gray-200 dark:bg-blue-gray-800 h-[2px] border-0 mb-8" />

    <div class="grid grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr_1.6fr] gap-x-6 gap-y-8">
      <section class="col-span-2 md:col-span-1">
        <h2 class="text-base font-bold mb-2">Yehonatan Simian</h2>
        <p class="opacity-70 mb-4">
          Writes code by day and funk basslines by night. Both ship with bugs.
        </p>
        <FooterIcons />
      </section>

      <nav v-for="group in linkGroups" :key="group.title" :aria-label="group.title">
        <h2 class="footer-heading">{{ group.title }}</h2>
        <ul class="flex flex-col gap-1">
          <li v-for="link in group.links" :key="link.label">
            <YLink :to="link.to" subtle>{{ link.label }}</YLink>
          </li>
        </ul>
      </nav>

      <section class="col-span-2 md:col-span-1" aria-labelledby="footer-contact">
        <h2 id="footer-contact" class="footer-heading">Get in touch</h2>
        <ContactMeForm />
      </section>
    </div>

    <div
      class="flex flex-row items-center justify-between gap-3 mt-8 pt-4 border-t border-blue-gray-200 dark:border-blue-gray-800 text-xs opacity-80"
    >
      <p>
        © {{ year }} Yehonatan Simian ·
        <YLink :to="'/' + PrivacyRoute" subtle>Privacy</YLink>
      </p>
      <DarkTheme class="text-lg" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import {
  TripRoute,
  IcelandTripRoute,
  PortfolioRoute,
  CookbookRoute,
  VegetavailableRoute,
  PrivacyRoute,
  ResumePath,
  DegreePath
} from '/@/data/globals'

const year = new Date().getFullYear()

const linkGroups: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: 'Work',
    links: [
      { label: 'Portfolio', to: '/' + PortfolioRoute },
      { label: 'Resume', to: ResumePath },
      { label: 'B.Sc. Degree', to: DegreePath },
      { label: 'GitHub', to: 'https://github.com/yonisimian' }
    ]
  },
  {
    title: 'Family',
    links: [
      { label: 'The Big Trip', to: '/' + TripRoute },
      { label: 'Iceland 2026', to: '/' + IcelandTripRoute },
      { label: "Michal's Cookbook", to: '/' + CookbookRoute },
      { label: "Mom's Vegetables", to: '/' + VegetavailableRoute }
    ]
  }
]
</script>

<style scoped>
.footer-heading {
  @apply text-xs font-semibold uppercase tracking-wider opacity-60 mb-3;
}
</style>
