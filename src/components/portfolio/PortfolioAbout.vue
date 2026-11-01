<template>
  <article class="relative flex flex-col justify-start items-center text-center text-md">
    <section ref="aboutSection">
      <h2 class="text-4xl font-bold my-8">About Me</h2>
      <ExpandableContent>
        <p>
          I'm a {{ age }} years old <strong>software developer</strong> at Intel {{ isBirthday ? '(today is my birthday 🥳)' : '' }}
          with a
          <a
            :href="BSc"
            target="_blank"
            style="text-decoration: none;"
            ><strong>B.Sc. in Computer Science</strong></a
          >
          from The Open University of Israel, GPA 90. Visit my
          <a
            :href="Resume"
            target="_blank"
            title="Not so interesting. Better visit my GitHub instead!"
            >resume</a
          >
          to learn more.
        </p>
        <p>
          In addition to my technical interests, I am a <strong>seasoned musician</strong>, having
          played the trombone since the age of 10. I also enjoy playing various other instruments,
          having being participating in various orchestras and bands. Music has always been an
          integral part of my life, and I find immense joy in composing and creating melodies in my
          free time, with a particular fondness for the bass and funk music.
        </p>
        <p>
          I am passionate about <strong>music theory</strong>, viewing it as a human interpretation
          of mathematics, and I actively engage in music composition. Looking forward, one life goal
          of mine is to <strong>revolutionize the landscape of music composition</strong>,
          leveraging modern technology to create innovative and unprecedented musical experiences.
        </p>
        <p>
          If you would like to learn more about me or collaborate on exciting projects, please feel
          free to
          <button
            class="hover:color-[#cdf0ff] underline"
            @click="scrollToFooter"
            title="Just click, trust me."
            aria-label="Scroll to contact information"
          >
            reach out</button
          >. I look forward to connecting with you! In the meanwhile, please explore my portfolio
          and learn more about my key skills, competencies, and experience in music, computer
          science and academic research 😊
        </p>
      </ExpandableContent>
    </section>
  </article>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useReachOutAnimation } from '/@/composables/useReachOut'
import Resume from '/@/assets/Yehonatan Simian - Resume.pdf'
import BSc from '/@/assets/portfolio/B.Sc.PDF'

const { reachOut } = useReachOutAnimation()

let footerSection = ref<HTMLElement | null>(null)
const aboutSection = ref<HTMLElement | null>(null)
const isSectionShort = ref(false)

onMounted(() => {
  footerSection.value = document.querySelector('footer')
  if (aboutSection.value && aboutSection.value.offsetHeight < window.innerHeight - 60) {
    isSectionShort.value = true
  }
})

const scrollToFooter = () => {
  if (footerSection.value) {
    reachOut(footerSection.value)
  }
}

const BIRTHDAY = new Date('1998-08-23')
const age = Math.floor((Date.now() - BIRTHDAY.getTime()) / 31556952000)
const isBirthday =
  new Date().getDate() === BIRTHDAY.getDate() && new Date().getMonth() === BIRTHDAY.getMonth()
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
  text-decoration-line: underline;
}
p {
  @apply text-xl max-w-5xl pb-8 m-auto text-justify;
}
</style>
