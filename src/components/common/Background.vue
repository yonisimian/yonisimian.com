<template>
  <Transition name="background">
    <div v-if="isDark" class="stars" />
    <div v-else class="triangles" />
  </Transition>
</template>

<script setup lang="ts">
import { useTheme } from '/@/composables'

const { isDark } = useTheme()

if (!localStorage.getItem('firstVisit')) {
  isDark.value = false
  localStorage.setItem('firstVisit', 'nocap')
}
</script>

<style scoped>
.triangles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -100;

  /***** triangles *****/
  /* background: linear-gradient(45deg, rgba(174, 190, 200, 0.05) 25%, transparent 25%) 0 0,
    linear-gradient(135deg, rgba(174, 190, 200, 0.05) 25%, transparent 25%) 0 0,
    linear-gradient(45deg, transparent 75%, rgba(174, 190, 200, 0.05) 75%) 0 0,
    linear-gradient(135deg, transparent 75%, rgba(174, 190, 200, 0.05) 75%) 0 0;
  background-size: 30px 30px;
  background-repeat: repeat; */

  /***** blueprint *****/
  /* background-color: #eee;
  background-image: linear-gradient(rgba(245, 245, 245, 0.4) 2px, transparent 2px),
    linear-gradient(90deg, rgba(245, 245, 245, 0.4) 2px, transparent 2px),
    linear-gradient(rgba(245, 245, 245, 0.5) 1px, transparent 1px),
    linear-gradient(90deg, rgba(245, 245, 245, 0.5) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px; */

  /***** dark-blue folke *****/
  /* background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath fill='%2318224C' d='M0 50h50V0H0z'/%3E%3Cpath fill='%23181F47' d='M35.704 22.944c-1.352 1.297-4.426.426-6.89-1.963-2.462-2.388-3.37-5.37-2.036-6.648 1.333-1.277 4.426-.426 6.889 1.963 2.463 2.39 3.37 5.352 2.037 6.648M39.296 22.944c-1.352-1.296-.444-4.277 2.019-6.648 2.463-2.37 5.555-3.333 6.833-1.963 1.278 1.37.445 4.278-2.018 6.648-2.463 2.37-5.556 3.241-6.89 1.963'/%3E%3Cpath fill='%231F2D61' d='M35.76 48.148c-1.353 1.296-4.427.426-6.89-1.963-2.463-2.389-3.37-5.37-2.037-6.648 1.334-1.278 4.426-.426 6.89 1.963 2.462 2.389 3.314 5.37 2.036 6.648M39.333 48.148c-1.352-1.296-.444-4.278 2.019-6.648s5.555-3.26 6.889-1.963c1.333 1.296.444 4.296-1.945 6.76-2.389 2.462-5.555 3.166-6.963 1.851M36.26 10.352c-1.353 1.296-4.427.426-6.89-1.963C26.907 6 25.926 3.037 27.352 1.74c1.426-1.297 4.426-.426 6.889 1.963 2.463 2.389 3.37 5.352 2.037 6.648M39.26 10.426c-1.334-1.296-.371-4.278 2.036-6.722 2.408-2.445 5.537-3.185 6.852-1.852 1.315 1.333.445 4.278-2.018 6.648-2.463 2.37-5.556 3.24-6.89 1.963'/%3E%3Cpath fill='%231B2652' d='M35.704 35.537c-1.352 1.296-4.426.426-6.89-1.963-2.462-2.389-3.37-5.37-2.036-6.648 1.333-1.278 4.426-.426 6.889 1.963 2.463 2.389 3.37 5.352 2.037 6.648M39.296 35.537c-1.352-1.296-.444-4.278 2.019-6.648s5.555-3.26 6.889-1.963c1.333 1.296.444 4.278-2.019 6.648s-5.555 3.24-6.889 1.963'/%3E%3Cpath fill='%231F2D61' d='M10.685 23.019c-1.352 1.296-4.426.425-6.889-1.963-2.463-2.39-3.37-5.352-1.944-6.649 1.426-1.296 4.426-.426 6.889 1.963 2.463 2.39 3.37 5.352 2.037 6.649M14.26 23.019c-1.353-1.297-.445-4.278 2.018-6.649 2.463-2.37 5.555-3.259 6.889-1.963 1.333 1.297.444 4.278-2.019 6.649-2.463 2.37-5.555 3.24-6.889 1.963'/%3E%3Cpath fill='%231B2652' d='M10.704 48.148c-1.352 1.296-4.426.426-6.89-1.963-2.462-2.389-3.37-5.444-1.962-6.648 1.407-1.204 4.426-.426 6.889 1.963 2.463 2.389 3.37 5.352 2.037 6.648M14.815 48.148c-1.352-1.296-.445-4.278 2.018-6.648 2.463-2.37 5.556-3.26 6.89-1.963 1.333 1.296.444 4.278-2.02 6.648-2.462 2.37-5.5 3.185-6.888 1.963M10.704 10.333c-1.352 1.297-4.426.426-6.89-1.963C1.353 5.981.445 3.02 1.853 1.722c1.407-1.296 4.37-.407 6.833 1.982s3.37 5.352 2.037 6.648M14.296 10.333c-1.333-1.296-.444-4.277 2.019-6.63 2.463-2.351 5.555-3.259 6.889-1.962 1.333 1.296.444 4.278-2.019 6.648s-5.555 3.24-6.889 1.963M10.704 35.537c-1.352 1.296-4.426.426-6.89-1.963-2.462-2.389-3.37-5.37-2.036-6.648 1.333-1.278 4.426-.426 6.889 1.963 2.463 2.389 3.37 5.352 2.037 6.648M14.815 35.481c-1.352-1.296-.445-4.277 2.018-6.648 2.463-2.37 5.556-3.259 6.89-1.963 1.333 1.297.444 4.278-2.02 6.649-2.462 2.37-5.555 3.24-6.888 1.962'/%3E%3C/g%3E%3C/svg%3E");
  background-size: 69px; */
}

.stars {
  position: fixed;
  top: 50%;
  left: 50%;
  height: 1px;
  width: 1px;
  border-radius: 50%;
  z-index: -1;
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

.background-enter-active,
.background-leave-active {
  transition: opacity 1s;
}
.background-enter-from,
.background-leave-to {
  opacity: 0;
}
</style>
