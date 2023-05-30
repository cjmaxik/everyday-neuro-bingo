<template>
  <q-btn
    stretch
    dense
    flat
    fab-mini
    icon="settings"
  >
    <q-tooltip class="text-body2 bg-gymbag">
      Settings
    </q-tooltip>

    <q-menu auto-close>
      <q-list
        bordered
        padding
      >
        <q-item-label header>
          Settings
        </q-item-label>

        <q-item
          v-ripple
          tag="label"
        >
          <q-item-section
            side
            top
          >
            <q-checkbox v-model="settings.removeFont" />
          </q-item-section>

          <q-item-section @click="settings.removeFont = !settings.removeFont">
            <q-item-label>Default font</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          v-ripple
          tag="label"
        >
          <q-item-section
            side
            top
          >
            <q-checkbox v-model="settings.disableSound" />
          </q-item-section>

          <q-item-section @click="settings.disableSound = !settings.disableSound">
            <q-item-label>Disable sound</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item>
          <q-item-section>
            <q-btn
              class="full-width"
              color="red"
              label="Clear the board"
              no-caps
              text-color="white"
              :disable="!isBingoPage"
              @click="clearBoard(currentRoute)"
            />
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-btn
              class="full-width"
              color="red"
              label="Clear all data"
              no-caps
              text-color="white"
              @click="clearAll()"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
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
    () => route.path, (newRoute) => {
      console.log(newRoute)
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
