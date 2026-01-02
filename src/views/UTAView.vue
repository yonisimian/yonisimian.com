<template>
  <div
    ref="containerRef"
    class="w-screen h-screen fixed overflow-hidden top-0 left-0 z-10"
    @mousemove="isVideoButtonVisible = true"
    @mouseleave="isVideoButtonVisible = false"
    @click="togglePlay"
  >
    <div class="kingdom-container"></div>
    <div class="w-full h-full justify-center items-center flex flex-col">
      <audio ref="audio" hidden @timeupdate="onTimeUpdate">
        <!-- <audio ref="audio" controls @timeupdate="onTimeUpdate" class="w-full"> -->
        <source src="/media/misc/uta.mp3" type="audio/mpeg" />
      </audio>
      <div class="absolute">
        <div
          :key="currentLyricText"
          class="text-center text-green-100 font-extrabold text-4xl sm:text-6xl text-stroke-dark-600 text-stroke text-stroke-[2px] sm:text-stroke-[3px] z-20"
          style="
            background: linear-gradient(155deg, #ffff00, #00ffff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            filter: drop-shadow(0 0 20px rgba(132, 204, 22, 0.8));
            letter-spacing: 0.02em;
            opacity: 0.9;
            line-height: 1.4;
            padding: 0.2em 0;
          "
        >
          {{ currentLyricText }}
        </div>
      </div>
      <div class="absolute">
        <Transition
          enterActiveClass="transition-opacity duration-200"
          enterFromClass="opacity-0"
          enterToClass="opacity-100"
          leaveActiveClass="transition-opacity duration-500"
          leaveFromClass="opacity-100"
          leaveToClass="opacity-0"
        >
          <VideoPlayButton
            v-show="isVideoButtonVisible || !isPlaying"
            class="rounded-full flex items-center justify-center bg-transparent z-20"
            :isPlaying
          />
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

const audio = ref<HTMLAudioElement | null>(null)

// play button stuff

const isPlaying = ref(false)
const isVideoButtonVisible = ref(true)
const containerRef = ref<HTMLElement | null>(null)
let timeout: number | undefined = undefined

const togglePlay = () => {
  showAndAutoHideButton()
  if (audio.value) {
    if (isPlaying.value) {
      audio.value.pause()
      isPlaying.value = false
    } else {
      audio.value.play().catch(() => console.log('Autoplay prevented'))
      isPlaying.value = true
    }
  }
}

const showAndAutoHideButton = () => {
  isVideoButtonVisible.value = true
  clearTimeout(timeout)
  timeout = window.setTimeout(() => {
    if (isPlaying.value) {
      isVideoButtonVisible.value = false
    }
  }, 1500)
}

const onMouseMove = () => {
  showAndAutoHideButton()
}

watch(isPlaying, (playing) => {
  if (!playing) {
    isVideoButtonVisible.value = true
    clearTimeout(timeout)
    timeout = undefined
  }
})

onMounted(() => {
  containerRef.value?.addEventListener('mousemove', onMouseMove)
})
onUnmounted(() => {
  containerRef.value?.removeEventListener('mousemove', onMouseMove)
  clearTimeout(timeout)
})

// lyrics stuff

const currentTime = ref(0)
const audioLyrics = ref([
  { time: 0.0, text: ' ' },
  { time: 11.0, text: ' ' },
  // verse 1, 00:11
  { time: 1.5, text: 'UTA, we rise' },
  { time: 1.1, text: 'No surprise' },
  { time: 1.5, text: 'In the Last War' },
  { time: 1.5, text: 'We take the prize' },
  { time: 1.5, text: "Bitches know we rollin'" },
  { time: 1.5, text: "Flexin' hard" },
  { time: 1.3, text: 'Alliance tight' },
  { time: 1.6, text: 'Gotta play our cards' },
  // pre-chorus, 00:22
  { time: 1.0, text: 'Different flags' },
  { time: 1.5, text: "But we're all same" },
  { time: 1.1, text: "Thuggin' through the night" },
  { time: 1.5, text: 'We ignite the flame' },
  { time: 1.4, text: 'Nationalities mix' },
  { time: 1.4, text: "That's our strength" },
  { time: 1.4, text: 'Timezones apart' },
  { time: 4.0, text: 'But we go the length' },
  // chorus, 00:36
  { time: 0.9, text: 'UTA Kingdom' },
  { time: 1.4, text: "We takin' the crown" },
  { time: 1.4, text: "Ballin' like kings" },
  { time: 1.4, text: "Never backin' down" },
  { time: 1.5, text: 'Laughs on deck' },
  { time: 1.5, text: "We workin' real hard" },
  { time: 1.0, text: "Friends 'til the end" },
  { time: 2.1, text: 'We the ultimate guard' },
  // chorus, 00:47
  { time: 0.9, text: 'UTA Kingdom' },
  { time: 1.4, text: "We takin' the crown" },
  { time: 1.4, text: "Ballin' like kings" },
  { time: 1.4, text: "Never backin' down" },
  { time: 1.5, text: 'Laughs on deck' },
  { time: 1.5, text: "We workin' real hard" },
  { time: 1.0, text: "Friends 'til the end" },
  { time: 2.5, text: 'We the ultimate guard' },
  // instrumental, 00:59
  { time: 11.2, text: '♫♪' },
  // verse 2, 01:10
  { time: 1.2, text: 'Grinding daily' },
  { time: 1.3, text: "But we havin' fun" },
  { time: 1.5, text: "Fightin' side by side" },
  { time: 1.6, text: 'We always won' },
  { time: 1.3, text: "Bustin' through the ranks" },
  { time: 1.4, text: 'Watch us level up' },
  { time: 1.1, text: 'With this crew' },
  { time: 1.4, text: "We don't give a fuck" },
  // pre-chorus, 01:21
  { time: 1.2, text: 'We scheme and dream' },
  { time: 1.3, text: 'All hustle no sleep' },
  { time: 1.3, text: 'Bitches in the game' },
  { time: 1.4, text: 'We run it so deep' },
  { time: 1.5, text: 'Foes try to break us' },
  { time: 1.6, text: "But they can't see" },
  { time: 1.1, text: 'United we stand' },
  { time: 4.4, text: 'Like a family tree' },
  { time: 3.0, text: ' ' },
  // chorus, 01:37
  { time: 0.9, text: 'UTA Kingdom' },
  { time: 1.4, text: "We takin' the crown" },
  { time: 1.4, text: "Ballin' like kings" },
  { time: 1.4, text: "Never backin' down" },
  { time: 1.5, text: 'Laughs on deck' },
  { time: 1.5, text: "We workin' real hard" },
  { time: 1.0, text: "Friends 'til the end" },
  { time: 2.1, text: 'We the ultimate guard' },
  // chorus, 01:48
  { time: 0.9, text: 'UTA Kingdom' },
  { time: 1.4, text: "We takin' the crown" },
  { time: 1.4, text: "Ballin' like kings" },
  { time: 1.4, text: "Never backin' down" },
  { time: 1.5, text: 'Laughs on deck' },
  { time: 1.5, text: "We workin' real hard" },
  { time: 1.0, text: "Friends 'til the end" },
  { time: 1.8, text: 'We the ultimate guard' },
  // bridge, 01:59
  { time: 1.0, text: "We buildin' bonds" },
  { time: 1.6, text: 'Through the pixels and codes' },
  { time: 1.3, text: "Flexin' on the haters" },
  { time: 1.5, text: 'With our heavy loads' },
  { time: 1.1, text: "Loyalty's the key" },
  { time: 1.5, text: 'We never alone' },
  { time: 3.9, text: "Thug life livin' in our UTA home!" },
  // chorus variation, 02:11
  { time: 1.4, text: 'So raise your glass' },
  { time: 1.4, text: 'Toast to the crew' },
  { time: 1.3, text: 'We laugh and we fight' },
  { time: 1.4, text: "That's what we do" },
  { time: 1.3, text: 'Last War warriors' },
  { time: 1.3, text: 'We conquer the strife' },
  { time: 1.3, text: 'In this UTA Kingdom' },
  { time: 7.0, text: "We livin' that life!" },
  // chorus, 02:28
  { time: 0.9, text: 'UTA Kingdom' },
  { time: 1.4, text: "We takin' the crown" },
  { time: 1.4, text: "Ballin' like kings" },
  { time: 1.4, text: "Never backin' down" },
  { time: 1.5, text: 'Laughs on deck' },
  { time: 1.5, text: "We workin' real hard" },
  { time: 1.0, text: "Friends 'til the end" },
  { time: 2.1, text: 'We the ultimate guard' },
  // chorus, 02:39
  { time: 0.9, text: 'UTA Kingdom' },
  { time: 1.4, text: "We takin' the crown" },
  { time: 1.4, text: "Ballin' like kings" },
  { time: 1.4, text: "Never backin' down" },
  { time: 1.5, text: 'Laughs on deck' },
  { time: 1.5, text: "We workin' real hard" },
  { time: 1.0, text: "Friends 'til the end" },
  { time: 2.5, text: 'We the ultimate guard' },
  // outro, 02:52
  { time: 10.8, text: '♫♪' },
  { time: 0, text: ' ' }
])

const calculateCumulativeTimes = () => {
  let cumulativeTime = 0
  audioLyrics.value = audioLyrics.value.map((line) => {
    const newLine = { time: cumulativeTime, text: line.text }
    cumulativeTime += line.time
    return newLine
  })
}

calculateCumulativeTimes()

const onTimeUpdate = (event: Event) => {
  currentTime.value = (event.target as HTMLAudioElement).currentTime
}

const currentLyricText = computed(() => {
  // Find the lyric that matches the current time
  const activeLine = [...audioLyrics.value].reverse().find((line) => currentTime.value >= line.time)

  return activeLine ? activeLine.text : ''
})
</script>

<style scoped>
.kingdom-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url('/media/misc/uta.webp');
  background-repeat: repeat;
  background-size: auto;
  animation: diagonalScroll 40s linear infinite;
  opacity: 1;
  filter: blur(3px);
}

@keyframes diagonalScroll {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 2159px 2159px;
  }
}
</style>
