<template>
  <q-page padding class="main">
    <transition>
      <div class="bingo-card" v-if="store.board">
        <div class="row" v-for="row, key in chunkedBoard" :key="key">
          <div class="col" v-for="block in row" :key="block.index">
            <BingoBlock :block="block" @increment="increment(block.index)" />
          </div>
        </div>
      </div>

      <div v-else>
        <div class="row justify-center items-center">
          <div class="text-center q-pa-xs">
            <img src="../assets/gymbag.png" alt="Loading...">
            <h2>Loading...</h2>
          </div>
        </div>
      </div>
    </transition>
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
import { gameStateStore } from '../stores/gameStateStore'
const store = gameStateStore()

// instantiate sound
const kekwaSound = new Audio(kekwaAsset)
const winSound = new Audio(winAsset)

// generate board
store.generateBoard(new Date().getUTCDate)

// data
const chunkedBoard = computed(() => chunkArray(store.board, store.streakCount))

// game logic
const increment = (index) => {
  if (store.isFree(index)) return
  store.increment(index)

  const win = store.checkForBingo()
  if (!store.bingo) {
    if (win) winSound.play()
  }
  if (store.getTally(index) === 1) kekwaSound.play()
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
