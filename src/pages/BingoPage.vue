<template>
  <q-page
    class="bingo-page"
    padding
  >
    <transition-group
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div
        v-show="state.ready"
        :key="0"
        class="bingo-card shadow-5"
      >
        <template
          v-for="block, key in state.board"
          :key="key"
        >
          <FreeBlockItem
            v-if="block.free"
            :free-block-image="state.freeBlockImage"
            :win="block.win"
          />

          <BingoBlockItem
            v-else
            :block="block"
            :participant="state.participants[block.participantId]"
            :hide-tally="settings.hideTally"
            :emotes="settings.emotes"
            @increment="increment(block)"
            @decrement="decrement(block)"
          />
        </template>
      </div>

      <div
        v-show="!state.ready"
        :key="1"
      >
        <div class="row justify-center items-center">
          <div class="text-center q-pa-xs">
            <img
              src="/assets/images/gymbag.png"
              alt="Loading..."
            >
            <h2 class="text-gymbag">
              Loading...
            </h2>
          </div>
        </div>
      </div>
    </transition-group>
  </q-page>
</template>

<script setup>
// vue-related
import { onBeforeUnmount } from 'vue'
import { useQuasar } from 'quasar'

// project-related
import FreeBlockItem from 'src/components/bingo/FreeBlockItem.vue'
import BingoBlockItem from '../components/bingo/BingoBlockItem.vue'

import { generateSeedPhrase, getRandomInt } from 'src/helpers/helpers'
import prompts from '../prompts/prompts'

// states
import { useGameStateStore } from '../stores/gameState'
import { useGameSettingsStore } from '../stores/gameSettings'

// props
const props = defineProps({
  type: {
    type: String,
    default: 'justChatting'
  }
})

const streamType = props.type === '' ? 'justChatting' : props.type
if (!Object.keys(prompts).includes(streamType)) location.replace('/')

const state = useGameStateStore(streamType)
const settings = useGameSettingsStore()

// Quasar object
const $q = useQuasar()

// generate board
// seed - current date in UTC
const seedPhrase = generateSeedPhrase()
const version = 2
const streamData = prompts[streamType]

// page title
settings.streamName = streamData.name
document.title = `${streamData.name} | Everyday Neuro Bingo`
onBeforeUnmount(() => {
  document.title = 'Everyday Neuro Bingo'
})

state.generateBoard(streamData, seedPhrase, version)

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

const soundsPath = '../assets/sounds'
const winSound = new Audio(`${soundsPath}/vine-boom.mp3`)
const checkForWin = (block, decrement = false) => {
  const index = block.index
  const participantId = block.participantId
  const sounds = state.participants[participantId].sounds

  const win = state.checkForBingo()
  const isSoundActive = !settings.disableSound && !decrement

  if (win.length && win.length !== state.previousWin) {
    playSound(winSound, isSoundActive)
  } else {
    if (state.getTally(index) === 1) {
      const randomSound = sounds[getRandomInt(0, sounds.length - 1)]
      playSound(randomSound, isSoundActive)
    }
  }

  state.previousWin = win.length
}

// sound logic
const playSound = (audio, isActive) => {
  if (isActive) audio.play()
}

// undo logic
const notifyForUndo = (block) => {
  $q.notify({
    message: 'Made a mistake?',
    progress: true,
    group: false,
    color: 'gymbag',
    timeout: 10000,
    position: 'bottom-right',
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
