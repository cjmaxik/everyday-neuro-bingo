<template>
  <q-page
    class="bingo-page"
    padding
    style="min-height: 100% !important;"
  >
    <transition-group
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div
        v-show="state.ready"
        :key="0"
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
            class="col shadow-5 shadow-transition"
          >
            <BingoItem
              :block="block"
              :participant="state.participants[block.participantId]"
              :free-block-image="state.freeBlockImage"
              @decrement="decrement(block)"
              @increment="increment(block)"
            />
          </div>
        </div>
      </div>

      <div
        v-show="!state.ready"
        :key="1"
      >
        <div class="row justify-center items-center">
          <div class="text-center q-pa-xs">
            <h2 class="text-gymbag">
              Loading...
            </h2>
          </div>
        </div>
      </div>
    </transition-group>

    <!-- <div
      v-if="state.ready"
      class="text-center"
      :hidden="$q.screen.lt.md"
    >
      Ctrl+click to decrease the tally *wink*
    </div> -->
  </q-page>
</template>

<script setup>
// vue-related
import { computed, onBeforeUnmount } from 'vue'
import { useQuasar } from 'quasar'

// project-related
import BingoItem from '../components/BingoItem.vue'
import { chunkArray, generateSeedPhrase, getRandomInt } from 'src/helpers/helpers'
import prompts from '../prompts/prompts'

// states
import { useGameStateStore } from '../stores/gameState'
import { useGameSettingsStore } from '../stores/gameSettings'

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

<style lang="scss" scoped>
.gymbag-border {
  border-width: 2px;
  border-color: $gymbag;
  border-style: solid;
}

.bingo-page {
  margin: auto;
  width: 1000px;

  body.screen--md & {
    width: 85%;
  }

  body.screen--sm & {
    width: 970px;
  }
}

.bingo-card {
  user-select: none;

  .row {
    &:first-child {
      >.col {
        border-top-width: 4px;

        &:first-child {
          border-top-left-radius: 5px;
        }

        &:last-child {
          border-top-right-radius: 5px;
        }
      }
    }

    &:last-child {
      >.col {
        border-bottom-width: 4px;

        &:first-child {
          border-bottom-left-radius: 5px;
        }

        &:last-child {
          border-bottom-right-radius: 5px;
        }
      }
    }
  }

  .col {
    @extend .gymbag-border;

    &:first-child {
      border-left-width: 4px;
    }

    &:last-child {
      border-right-width: 4px;
    }
  }
}
</style>
