<template>
  <Transition name="fade">
    <div v-if="isDark" class="stars" />
  </Transition>
</template>

<script setup lang="ts">
import { useTheme } from '/@/composables'

const { isDark } = useTheme()
</script>

<style scoped>
.stars {
  position: fixed;
  top: 50%;
  left: 50%;
  height: 1px;
  width: 1px;
  border-radius: 50%;
  box-shadow: -42vw -4vh 0px 0px #888, 25vw -41vh 0px 0px #ddd, -20vw 49vh 0px 1px #fff,
    5vw 40vh 1px 1px #999, 29vw 19vh 1px 0px #777, -44vw -13vh 0px 0px #222, 46vw 41vh 0px 1px #999,
    -3vw -45vh 0px 1px #999, 47vw 35vh 1px 0px #fff, 12vw -8vh 1px 0px #444, -34vw 48vh 1px 1px #fff,
    32vw 26vh 1px 1px #fff, 32vw -41vh 1px 1px #aaa, 0vw 37vh 1px 1px #444, 34vw -26vh 1px 0px #999,
    -14vw -49vh 1px 0px #222, -12vw 45vh 0px 1px #222, -44vw -33vh 0px 1px #777,
    -13vw 41vh 0px 0px #222, -36vw -11vh 0px 1px #999, -23vw -24vh 1px 0px #aaa,
    -38vw -27vh 0px 1px #fff, 16vw -19vh 0px 0px #ccc, 28vw 33vh 1px 0px #222,
    -49vw -4vh 0px 0px #444, 16vw 32vh 0px 1px #999, 36vw -18vh 1px 0px #ccc,
    -25vw -30vh 1px 0px #ccc, -23vw 24vh 0px 1px #aaa, -2vw -35vh 1px 1px #888,
    -25vw 9vh 0px 0px #222, -15vw -34vh 0px 0px #444, -8vw -19vh 1px 0px #ddd,
    -20vw -20vh 1px 1px #aaa, 42vw 50vh 0px 1px #666, -32vw 10vh 1px 0px #aaa,
    -23vw -17vh 0px 0px #444, 44vw 15vh 1px 0px #999, -40vw 33vh 1px 1px #444,
    -43vw 8vh 0px 0px #bbb, -48vw -15vh 1px 1px #bbb, -24vw 17vh 0px 0px #ccc,
    -31vw 50vh 1px 0px #888, 36vw -38vh 0px 1px #fff, -7vw 48vh 0px 0px #777,
    15vw -32vh 0px 0px #fff, 29vw -41vh 0px 0px #ccc, 2vw 37vh 1px 0px #999, 7vw -40vh 1px 1px #666,
    15vw 18vh 0px 0px #bbb, 25vw -13vh 1px 1px #666, -46vw -12vh 1px 1px #444,
    -18vw 22vh 0px 0px #bbb, 23vw -9vh 1px 0px #ccc, 50vw 12vh 0px 1px #999, 45vw 2vh 0px 0px #888,
    14vw -48vh 1px 0px #bbb, 23vw 43vh 0px 1px #ddd, -40vw 16vh 1px 1px #777,
    20vw -31vh 0px 1px #999, -17vw 44vh 1px 1px #ddd, 18vw -45vh 0px 0px #fff,
    33vw -6vh 0px 0px #666, 0vw 7vh 0px 1px #999, -10vw -18vh 0px 1px #666, -19vw 5vh 1px 0px #ddd,
    1vw 42vh 0px 0px #999, 22vw 48vh 0px 1px #fff, 39vw -8vh 1px 1px #444, -6vw -42vh 1px 0px #999,
    -47vw 34vh 0px 0px #999, -46vw 19vh 0px 1px #ccc, -12vw -32vh 0px 0px #777,
    -45vw -38vh 0px 1px #ccc, -28vw 18vh 1px 0px #444, -38vw -46vh 1px 1px #666,
    49vw -6vh 1px 1px #ddd, -28vw 18vh 1px 1px #999, 10vw -24vh 0px 1px #fff,
    -5vw -11vh 1px 1px #888, 33vw -8vh 1px 0px #999, -16vw 17vh 0px 0px #ddd, 18vw 27vh 0px 1px #fff,
    -8vw -10vh 1px 1px #fff;

  box-shadow: 24vw 9vh 1px 0px #aaa, 12vw -24vh 0px 1px #777, -45vw -22vh 0px 0px #bbb,
    -37vw -40vh 0px 1px #bbb, 29vw 19vh 0px 1px #ccc, 4vw -8vh 0px 1px #bbb, -5vw 21vh 1px 1px #ccc,
    -27vw 26vh 1px 1px #fff, -47vw -3vh 1px 1px #ccc, -28vw -30vh 0px 1px #fff,
    -43vw -27vh 0px 1px #444, 4vw 22vh 1px 1px #fff, 36vw 23vh 0px 0px #888, -21vw 24vh 1px 1px #fff,
    -16vw 2vh 1px 0px #999, -16vw -6vh 0px 0px #777, 5vw 26vh 0px 0px #222, -34vw 41vh 0px 0px #444,
    1vw 42vh 1px 1px #aaa, 11vw -13vh 1px 1px #fff, 48vw -8vh 1px 0px #666, 22vw -15vh 0px 0px #bbb,
    45vw 49vh 0px 0px #aaa, 43vw -27vh 1px 1px #777, 20vw -2vh 0px 0px #444, 8vw 22vh 0px 1px #fff,
    39vw 48vh 1px 1px #999, -21vw -11vh 0px 1px #444, -40vw 45vh 0px 1px #888,
    11vw -30vh 1px 0px #fff, 26vw 30vh 1px 0px #fff, 45vw -29vh 0px 1px #999, -2vw 18vh 0px 0px #ccc,
    -29vw -45vh 1px 0px #aaa, -7vw -27vh 1px 1px #222, 42vw 24vh 0px 0px #fff,
    45vw -48vh 1px 0px #888, -36vw -18vh 0px 0px #666, -44vw 13vh 0px 1px #666,
    36vw 16vh 0px 1px #fff, 40vw 24vh 0px 0px #bbb, 18vw 11vh 0px 0px #ddd, -15vw -23vh 1px 0px #777,
    -24vw 48vh 0px 1px #888, 27vw -45vh 1px 0px #888, -2vw -24vh 0px 1px #444,
    -15vw -28vh 0px 0px #666, -43vw 13vh 1px 0px #aaa, 7vw 27vh 1px 0px #777, 47vw 5vh 0px 0px #444,
    -45vw 15vh 1px 1px #ddd, -5vw -28vh 0px 1px #444, 38vw 25vh 1px 1px #444,
    -39vw -1vh 1px 0px #444, 5vw 0vh 1px 0px #777, 49vw 13vh 0px 0px #777, 48vw 10vh 0px 1px #ddd,
    19vw -28vh 0px 0px #777, 4vw 7vh 0px 0px #aaa, 21vw 21vh 1px 1px #bbb, -15vw -15vh 0px 1px #fff,
    -6vw -42vh 1px 0px #fff, -15vw 48vh 1px 1px #888, -23vw 25vh 1px 1px #222,
    -48vw 25vh 0px 1px #fff, -31vw -19vh 0px 1px #888, 4vw 37vh 1px 1px #999,
    -43vw 28vh 0px 0px #222, 3vw -25vh 0px 1px #222, -39vw 14vh 0px 1px #444,
    -40vw 31vh 0px 1px #ddd, 35vw -36vh 1px 1px #aaa, 16vw 49vh 0px 0px #fff, 6vw 39vh 0px 0px #777,
    3vw -35vh 0px 1px #444, -44vw -2vh 1px 0px #777, -6vw 21vh 1px 0px #ddd, 48vw 9vh 1px 1px #999,
    -43vw 30vh 1px 1px #666, 29vw -12vh 1px 1px #ccc, -48vw 13vh 1px 0px #bbb,
    -42vw 32vh 1px 1px #666, 34vw 15vh 1px 1px #999, 29vw -37vh 1px 1px #bbb, 28vw 2vh 0px 0px #ddd;

  animation: zoom 16s alternate infinite;
}

@keyframes zoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
