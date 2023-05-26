<template>
  <q-page padding class="main">
    <transition-group appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div class="bingo-card" v-if="state.ready">
        <div class="row" v-for="row, key in chunkedBoard" :key="key">
          <div class="col" v-for="block in row" :key="block.index">
            <BingoBlock :block="block" @increment="increment(block.index)" @decrement="decrement(block.index)" />
          </div>
        </div>
      </div>

      <div class="absolute-center" v-else>
        <div class="row justify-center items-center">
          <div class="text-center q-pa-xs">
            <img src="../assets/gymbag.png" alt="Loading...">
            <h2>Loading...</h2>
          </div>
        </div>
      </div>
    </transition-group>
    <div class="text-center" v-if="state.ready">
      Hint: Ctrl+click to descrease the tally *wink*
    </div>
  </q-page>
</template>

<script setup>
// vue-related
import { computed } from 'vue'

// project-related
import BingoBlock from '../components/BingoItem.vue'
import { chunkArray } from 'src/helpers/helpers'

// sounds
import kekwaAsset from '../assets/KEKWA.mp3'
import winAsset from '../assets/vine-boom.mp3'

// game state
// TODO: store the state in localStorage for 12 hours
import { gameState } from '../stores/gameState'
const state = gameState()

// instantiate sound
const kekwaSound = new Audio(kekwaAsset)
const winSound = new Audio(winAsset)

// generate board
// seed - current date in UTC
const seed = new Date().getUTCDate()
const version = 1
state.generateBoard(seed, version)

// data
const chunkedBoard = computed(() => chunkArray(state.board, state.streakCount))

// game logic
let previousWin = 0
const increment = (index) => {
  state.increment(index)
  checkForWin(index)
}

const decrement = (index) => {
  state.decrement(index)
  checkForWin(index, false)
}

const checkForWin = (index, sound = true) => {
  const win = state.checkForBingo()
  if (win.length && win.length !== previousWin) {
    if (sound) winSound.play()
  }

  previousWin = win.length
  if (state.getTally(index) === 1 && sound) kekwaSound.play()
}
</script>

<style lang="scss" scoped>
.main {
  width: 85%;
  max-width: 1000px;
  margin: 1rem auto 0;
}

.bingo-card {
  user-select: none;
}
</style>
