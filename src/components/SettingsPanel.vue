<template>
  <q-btn
    dense
    fab-mini
    flat
    icon="settings"
    stretch
    @click="openSettingsModal = true"
  >
    <q-tooltip
      anchor="bottom left"
      class="text-body2 bg-gymbag"
    >
      Settings
    </q-tooltip>
  </q-btn>

  <q-dialog
    v-model="openSettingsModal"
    position="right"
  >
    <q-card>
      <q-card-section>
        <q-item tag="label">
          <q-checkbox
            v-model="settings.removeFont"
            keep-color
            label="Basic font"
          />
        </q-item>

        <q-item tag="label">
          <q-checkbox
            v-model="settings.hideTally"
            :false-value="true"
            keep-color
            label="Show tally"
            :true-value="false"
          />
        </q-item>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <q-item tag="label">
          <q-checkbox
            v-model="settings.disableSound"
            label="Disable sounds"
            @update:model-value="testSound()"
          />
        </q-item>

        <q-item>
          <q-item-section class="text-center">
            <q-item-label>
              Volume
            </q-item-label>

            <q-slider
              v-model="settings.volume"
              :disable="settings.disableSound"
              label
              :max="100"
              :min="0"
              :step="5"
              @change="testSound()"
            />
          </q-item-section>
        </q-item>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <q-item>
          <q-item-section class="text-center">
            <q-item-label class="q-pb-sm">
              Emotes
            </q-item-label>

            <q-btn-toggle
              v-model="settings.emotes"
              no-caps
              :options="[
                { label: 'Animated', value: 'animated' },
                { label: 'Static', value: 'static' },
                { label: 'Text', value: 'text' }
              ]"
              toggle-color="gymbag"
            />
          </q-item-section>
        </q-item>
      </q-card-section>

      <q-separator />

      <q-card-section
        v-if="isBingoPage"
        class="text-center no-padding"
        style="padding-top: 8px !important;"
      >
        Current seed:
        <q-chip
          clickable
          icon-right="content_copy"
          style="cursor: pointer;"
          @click="copySeed()"
        >
          {{ state.seed }}
          <q-tooltip
            anchor="top middle"
            self="center middle"
          >
            {{ wasClicked ? 'Copied!' : 'Click to copy board info' }}
          </q-tooltip>
        </q-chip>
      </q-card-section>

      <q-card-actions vertical>
        <q-btn
          v-show="isBingoPage"
          color="negative"
          label="Clear the board"
          no-caps
          text-color="white"
          @click="clearBoard()"
        />

        <q-btn
          color="negative"
          label="Clear all data"
          no-caps
          text-color="white"
          @click="clearAll()"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
// @ts-check

// vue-related
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// game settings
import { useGameStateStore } from 'stores/gameState'
import { useGameSettingsStore } from 'stores/gameSettings'
import { routeNorm } from 'helpers/helpers'

// init
const settings = useGameSettingsStore()

// route
const route = useRoute()
const router = useRouter()
const currentRoute = ref(routeNorm(route.path))
const isBingoPage = ref(currentRoute.value !== '')

let state = null
if (isBingoPage.value) {
  state = useGameStateStore(currentRoute.value)
}

// local refs
const openSettingsModal = ref(false)

const clearBoard = () => {
  openSettingsModal.value = false
  if (confirm('Do you really want to clear this board state?')) {
    state.clearAll()
    router.go(0)
  }
}

const clearAll = () => {
  openSettingsModal.value = false
  if (confirm('Do you really want to clear all the settings and all board states?')) {
    settings.clearAll()
    localStorage.clear()
    location.replace('/')
  }
}

const testAudio = new Audio('../assets/sounds/neuro/wink.mp3')
const testSound = () => {
  if (settings.disableSound) return

  testAudio.pause()
  testAudio.currentTime = 0
  testAudio.volume = settings.volume / 100
  testAudio.play()
}

const wasClicked = ref(false)
const copySeed = async () => {
  try {
    await navigator.clipboard.writeText(`Board: \`${route.path}\`\nSeed: \`${state.seed}\``)

    wasClicked.value = true
    setTimeout(() => { wasClicked.value = false }, 2000)
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  watch(
    () => route.path, (_newRoute) => {
      currentRoute.value = routeNorm(route.path)

      if (currentRoute.value !== '') {
        state = useGameStateStore(currentRoute.value)
        isBingoPage.value = true
      } else {
        state = null
        isBingoPage.value = false
      }
    }
  )
})
</script>
