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
        v-if="!state.fullyReady"
        :key="0"
        class="absolute-top"
      >
        <div class="row justify-center items-center">
          <div class="text-center q-pa-xs">
            <img
              alt="Loading..."
              src="/assets/images/gymbag.png"
            >

            <h2 class="text-gymbag no-margin">
              Stay tuned...
            </h2>
          </div>
        </div>
      </div>

      <div
        v-if="state.fullyReady"
        :key="1"
        class="bingo-card shadow-5"
        :class="{ fullscreen: $q.fullscreen.isActive }"
      >
        <template
          v-for="block in state.board "
          :key="block.index"
        >
          <div
            v-if="block.free"
            class="bingo-block free"
            :class="{ win: block.win, 'dimmed': hoveredParticipant !== null }"
            :style="{ backgroundImage: `url(${state.freeBlockImage ?? '/assets/images/gymbag.png'})` }"
          />

          <BingoBlockItem
            v-else
            :block="block"
            class="shadow-transition"
            :class="[
              `${block.participantId}-block`,
              {
                'shadow-24': isHighligted(block.participantId),
                'dimmed': hoveredParticipant !== null && !isHighligted(block.participantId)
              }
            ]"
            :emotes="settings.emotes"
            :hide-tally="settings.hideTally"
            :participant="state.participants[block.participantId]"
            @decrement="decrement(block)"
            @increment="increment(block)"
          />
        </template>
      </div>

      <div
        v-if="state.fullyReady && state.enoughParticipants"
        :key="2"
        class="bingo-legend row q-pt-lg"
      >
        <div>
          Legend:
          <template
            v-for=" participant in state.participants "
            :key="participant.id"
          >
            <span
              @mouseleave="hoveredParticipant = null"
              @mouseover="hoveredParticipant = participant.id"
            >
              <q-badge
                class="legend q-mr-xs shadow-2"
                :style="{ backgroundColor: participant.color }"
              >
                {{ participant['name'] }}
              </q-badge>
            </span>
          </template>
        </div>

        <q-space />
        <div v-show="$q.platform.is.desktop">
          Hint: Ctrl+Click to undo the tally
        </div>
      </div>
    </transition-group>
  </q-page>
</template>

<script setup>
// @ts-check
// eslint-disable-next-line no-unused-vars
import * as Types from 'helpers/types.d'

// vue-related
import { ref, onBeforeMount, onBeforeUnmount } from 'vue'
import { useQuasar } from 'quasar'

// project-related
import BingoBlockItem from 'components/BingoBlockItem.vue'

import { getRandomInt } from 'helpers/helpers'
import prompts from 'conf/prompts'

// states
import { useGameStateStore } from 'stores/gameState'
import { useGameSettingsStore } from 'stores/gameSettings'

// props
const props = defineProps({
  type: {
    type: String,
    default: 'neuro'
  }
})

const hoveredParticipant = ref(null)
const isHighligted = (/** @type {string} */ id) => hoveredParticipant.value === id

const streamType = props.type === '' ? 'neuro' : props.type
if (!Object.keys(prompts).includes(streamType)) location.replace('/')

const state = useGameStateStore(streamType)
const settings = useGameSettingsStore()

// Quasar object
const $q = useQuasar()

// Init data
const version = 4
const streamData = prompts[streamType]

onBeforeMount(() => {
  // Load stream data
  streamData().then(module => {
    const data = module?.default

    // Generate state
    state.generateBoard(data, version)

    // Rename title
    settings.streamName = data.name
    document.title = `${data.name} | Everyday Neuro Bingo`

    // Apply CSS stuff
    document.getElementById('participantsStyles')?.remove()

    const style = document.createElement('style')
    style.id = 'participantsStyles'

    for (const id in state.participants) {
      const participant = state.participants[id]
      style.innerHTML += `
      .${participant.id}-block {
        --tally-image: url(${participant.image ?? '/assets/images/gymbag.png'});
        --text-color: ${participant.color ?? '#000'};
      }
    `
    }

    document.getElementsByTagName('head')[0].appendChild(style)
  })
})

// page title
onBeforeUnmount(() => {
  document.title = 'Everyday Neuro Bingo'
})

/**
 * Increment the tally
 * @param {Types.BoardBlock} block
 */
const increment = (block) => {
  const hasUpdated = state.increment(block.index, settings.hideTally)
  if (hasUpdated) {
    checkForWin(block)
    notifyForUndo(block)
  }
}

/**
 * Decrement the tally
 * @param {Types.BoardBlock} block
 */
const decrement = (block) => {
  state.decrement(block.index)
  checkForWin(block, true)
}

const soundsPath = '../assets/sounds'
const winSound = new Audio(`${soundsPath}/vine-boom.mp3`)

/**
 * Check for winning state
 * @param {Types.BoardBlock} block
 * @param {?boolean} [decrement=false]
 */
const checkForWin = (block, decrement = false) => {
  const index = block.index
  const participantId = block.participantId
  const sounds = state.participants[participantId].sounds

  const win = state.checkForBingo()
  const isSoundActive = !settings.disableSound && !decrement && (settings.volume !== 0)

  if (win.length && win.length !== state.previousWin) {
    playSound(winSound, settings.volume, isSoundActive)
  } else {
    if (state.getTally(index) === 1) {
      const randomSound = sounds[getRandomInt(0, sounds.length - 1)]
      playSound(randomSound, settings.volume, isSoundActive)
    }
  }

  state.previousWin = win.length
}

/**
 * Sound logic
 * @param {HTMLAudioElement} audio
 * @param {number} volume
 * @param {boolean} isActive
 */
const playSound = (audio, volume, isActive) => {
  if (isActive) {
    audio.volume = volume / 100
    audio.play()
  }
}

/**
 * Undo logic for the toast notification)
 * @param {Types.BoardBlock} block
 */
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
      },
      {
        label: 'Dismiss',
        color: 'white'
      }
    ]
  })
}
</script>
