<template>
  <q-btn
    stretch
    dense
    flat
    fab-mini
    icon="settings"
    @click="openSettingsModal = true"
  >
    <q-tooltip
      class="text-body2 bg-gymbag"
      anchor="bottom left"
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
            label="Default font"
            keep-color
          />
        </q-item>

        <q-item tag="label">
          <q-checkbox
            v-model="settings.disableSound"
            label="Disable sound"
            keep-color
          />
        </q-item>

        <q-item tag="label">
          <q-checkbox
            v-model="settings.hideTally"
            label="Hide tally"
            keep-color
          />
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
              toggle-color="gymbag"
              no-caps
              :options="[
                { label: 'Animated', value: 'animated' },
                { label: 'Static', value: 'static' },
                { label: 'Text', value: 'text' }
              ]"
            />
          </q-item-section>
        </q-item>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-btn
          v-show="isBingoPage"
          color="negative"
          label="Clear the board"
          no-caps
          text-color="white"
          @click="clearBoard(currentRoute)"
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
// vue-related
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// game settings
import { useGameStateStore } from '../stores/gameState'
import { useGameSettingsStore } from '../stores/gameSettings'

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
  if (confirm('Do you really want to clear this board state?')) {
    state.clearAll()
    router.go()
  }
}

const clearAll = () => {
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
