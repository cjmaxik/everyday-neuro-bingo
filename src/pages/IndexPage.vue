<template>
  <q-page
    class="main"
    padding
  >
    <transition-group
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div
        v-if="state.ready"
        class="bingo-card"
      >
        <div
          v-for="row, key in chunkedBoard"
          :key="key"
          class="row"
        >
          <div
            v-for="block in row"
            :key="block.index"
            class="col"
          >
            <BingoBlock
              :block="block"
              @decrement="decrement(block.index)"
              @increment="increment(block.index)"
            />
          </div>
        </div>
      </div>

      <div
        v-else
        class="absolute-center"
      >
        <div class="row justify-center items-center">
          <div class="text-center q-pa-xs">
            <img
              alt="Loading..."
              src="../assets/gymbag.png"
            >
            <h2>Loading...</h2>
          </div>
        </div>
      </div>
    </transition-group>

    <q-banner
      v-if="state.ready"
      inline-actions
      rounded
      class="bg-gymbag text-white text-center q-mt-sm"
    >
      <span class="text-h6">Neuro Debut stream today!</span>
    </q-banner>

    <div
      v-if="state.ready"
      class="text-center"
      :hidden="$q.screen.lt.md"
    >
      Ctrl+click to decrease the tally *wink*
    </div>
  </q-page>
</template>

<script setup>
// vue-related
import { computed } from 'vue'
import { useQuasar } from 'quasar'

// project-related
import BingoBlock from '../components/BingoItem.vue'
import { chunkArray, generateSeedPhrase } from 'src/helpers/helpers'

// sounds
import kekwaAsset from '../assets/KEKWA.mp3'
import winAsset from '../assets/vine-boom.mp3'

// states
import { gameState } from '../stores/gameState'
import { gameSettings } from '../stores/gameSettings'
const state = gameState()
const settings = gameSettings()

// instantiate sound
const sounds = {
  kekwa: new Audio(kekwaAsset),
  win: new Audio(winAsset)
}

// Quasar object
const $q = useQuasar()

// generate board
// seed - current date in UTC
const seedPhrase = generateSeedPhrase()
const version = 2
state.generateBoard(seedPhrase, version)

// data
const chunkedBoard = computed(() => chunkArray(state.board, state.streakCount))

// game logic
const increment = (index) => {
  state.increment(index)
  checkForWin(index)
  notifyForUndo(index)
}

const decrement = (index) => {
  state.decrement(index)
  checkForWin(index, true)
}

const checkForWin = (index, decrement = false) => {
  const win = state.checkForBingo()
  const isSoundActive = !settings.disableSound && !decrement

  if (win.length && win.length !== state.previousWin) {
    playSound('win', isSoundActive)
  }

  state.previousWin = win.length
  if (state.getTally(index) === 1) {
    playSound('kekwa', isSoundActive)
  }
}

// undo logic
const notifyForUndo = (index) => {
  $q.notify({
    message: 'Made a mistake?',
    progress: true,
    group: false,
    color: 'gymbag',
    actions: [
      {
        label: 'Undo',
        color: 'white',
        handler: () => {
          decrement(index)
        }
      }
    ]
  })
}

// sound logic
const playSound = (id, isActive) => {
  if (sounds[id] && isActive) sounds[id].play()
}
</script>

<style lang="scss" scoped>
.main {
  body.screen--md & {
    width: 85%;
  }

  body.screen--xs & {
    width: 750px;
  }

  max-width: 1000px;
  margin: 1rem auto 0;
}

.bingo-card {
  user-select: none;
}
</style>
