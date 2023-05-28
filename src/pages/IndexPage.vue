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
            <BingoItem
              :block="block"
              :participant="state.participants[block.participantId]"
              @decrement="decrement(block)"
              @increment="increment(block)"
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

    <!-- <q-banner
      v-if="state.ready"
      inline-actions
      rounded
      class="bg-gymbag text-white text-center q-mt-sm"
    >
      <span class="text-h6">Neuro Debut stream today!</span>
    </q-banner> -->

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
import BingoItem from '../components/BingoItem.vue'
import { chunkArray, generateSeedPhrase, getRandomInt } from 'src/helpers/helpers'
import prompts from '../prompts/prompts'

// states
import { gameState } from '../stores/gameState'
import { gameSettings } from '../stores/gameSettings'

const props = defineProps({
  type: {
    type: String,
    default: 'solo'
  }
})

const streamType = props.type === '' ? 'solo' : props.type
if (!Object.keys(prompts).includes(streamType)) location.replace('/')

const state = gameState()
const settings = gameSettings()

// Quasar object
const $q = useQuasar()

// generate board
// seed - current date in UTC
const seedPhrase = generateSeedPhrase()
const version = 2
state.generateBoard(prompts, seedPhrase, version, streamType)

// data
const chunkedBoard = computed(() => chunkArray(state.board, state.streakCount))

// game logic
const increment = (block) => {
  state.increment(block.index)
  checkForWin(block)
  notifyForUndo(block)
}

const decrement = (block) => {
  state.decrement(block.index)
  checkForWin(block, true)
}

const checkForWin = (block, decrement = false) => {
  const index = block.index
  const participantId = block.participantId
  const sounds = state.participants[participantId].sounds

  const win = state.checkForBingo()
  const isSoundActive = !settings.disableSound && !decrement

  const soundsPath = '../assets/sounds'
  if (win.length && win.length !== state.previousWin) {
    playSound(`${soundsPath}/vine-boom.mp3`, isSoundActive)
  }

  state.previousWin = win.length
  if (state.getTally(index) === 1) {
    const randomSound = sounds[getRandomInt(0, sounds.length - 1)]
    playSound(`${soundsPath}/${participantId}/${randomSound}`, isSoundActive)
  }
}

// sound logic
const playSound = (audio, isActive) => {
  if (isActive) new Audio(audio).play()
}

// undo logic
const notifyForUndo = (block) => {
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
          decrement(block)
        }
      }
    ]
  })
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
