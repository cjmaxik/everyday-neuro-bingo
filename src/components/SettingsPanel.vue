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
              @click="clearBoard()"
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
import { onMounted, watch } from 'vue'

// game settings
import { gameSettings } from '../stores/gameSettings'
import { gameState } from '../stores/gameState'
const settings = gameSettings()
const state = gameState()

// font
const updateFont = (removeFont) => {
  if (removeFont) {
    document.body.classList.add('remove-font')
  } else {
    document.body.classList.remove('remove-font')
  }
}

const clearBoard = () => {
  if (confirm('Do you really want to clear the board state?')) {
    state.clearAll()
    location.reload()
  }
}

const clearAll = () => {
  if (confirm('Do you really want to clear all the settings and board state?')) {
    settings.clearAll()
    state.clearAll()
    location.reload()
  }
}

onMounted(() => {
  updateFont(settings.removeFont)
})

watch(settings, (settings) => {
  updateFont(settings.removeFont)
})
</script>
