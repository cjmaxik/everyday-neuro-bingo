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
        :class="{ fullscreen: $q.fullscreen.isActive }"
      >
        <template
          v-for="block in state.board"
          :key="block.index"
        >
          <div
            v-if="block.free"
            class="bingo-block free"
            :class="{ win: block.win }"
            :style="{ backgroundImage: `url(${state.freeBlockImage ?? '/assets/iamges/gymbag.png'})` }"
          />

          <BingoBlockItem
            v-else
            :block="block"
            :class="`${block.participantId}-block`"
            :emotes="settings.emotes"
            :hide-tally="settings.hideTally"
            :participant="state.participants[block.participantId]"
            @decrement="decrement(block)"
            @increment="increment(block)"
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
              alt="Loading..."
              src="/assets/images/gymbag.png"
            >
            <h2 class="text-gymbag">
              Stay tuned...
            </h2>
          </div>
        </div>
      </div>
    </transition-group>

    <q-banner
      v-if="streamData.random"
      class="random-info bg-primary text-white text-center shadow-5"
      padding
      rounded
    >
      <p class="no-margin">
        This is a randomized board created specifically for you.<br>If you have any issues with the board, please reach
        out to us in the "Everyday Neuro Bingo" discussion of Neurocord.
      </p>
    </q-banner>
  </q-page>
</template>

<script setup>
// vue-related
import { onBeforeUnmount, onMounted } from 'vue'
import { useQuasar } from 'quasar'

// project-related
import BingoBlockItem from '../components/BingoBlockItem.vue'

import { getRandomInt } from 'src/helpers/helpers'
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

const version = 3
const streamData = prompts[streamType]

// page title
settings.streamName = streamData.name
document.title = `${streamData.name} | Everyday Neuro Bingo`
onBeforeUnmount(() => {
  document.title = 'Everyday Neuro Bingo'
})

state.generateBoard(streamData, version)

// styles
onMounted(async () => {
  document.getElementById('participantsStyles')?.remove()

  const style = document.createElement('style')
  style.id = 'participantsStyles'

  for (const id in state.participants) {
    const participant = state.participants[id]
    style.innerHTML += `
      .${participant.id}-block {
        --tally-image: url(${participant.image ?? '/assets/iamges/gymbag.png'});
        --text-color: ${participant.color ?? '#000'};
      }
    `
  }

  document.getElementsByTagName('head')[0].appendChild(style)
})

// game logic
const increment = (block) => {
  const hasUpdated = state.increment(block.index, settings.hideTally)
  if (hasUpdated) {
    checkForWin(block)
    notifyForUndo(block)
  }
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
