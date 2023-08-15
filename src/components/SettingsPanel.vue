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
            label="Default font"
          />
        </q-item>

        <q-item tag="label">
          <q-checkbox
            v-model="settings.hideTally"
            keep-color
            label="Hide tally"
          />
        </q-item>

        <q-item tag="label">
          <q-checkbox
            v-model="settings.disableSound"
            keep-color
            label="Disable sound"
          />
        </q-item>

        <q-item>
          <q-item-section class="text-center">
            <q-item-label>
              Sound volume
            </q-item-label>

            <q-slider
              v-model="settings.volume"
              :disable="settings.disableSound"
              label
              :max="100"
              :min="0"
              :step="5"
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
        <span>Current seed: {{ state.seed }}</span>
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

// route
const route = useRoute()
const router = useRouter()
const currentRoute = ref(route.path.replace('/', ''))
const isBingoPage = ref(currentRoute.value !== '')

let state = null
if (isBingoPage.value) {
  state = useGameStateStore(currentRoute.value)
}

const settings = useGameSettingsStore()
const openSettingsModal = ref(false)

// font
const updateFont = (removeFont) => {
  if (removeFont) {
    document.body.classList.add('remove-font')
  } else {
    document.body.classList.remove('remove-font')
  }
}

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

onMounted(() => {
  watch(settings, (settings) => {
    updateFont(settings.removeFont)
  })

  watch(
    () => route.path, (_newRoute) => {
      currentRoute.value = route.path.replace('/', '')

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
