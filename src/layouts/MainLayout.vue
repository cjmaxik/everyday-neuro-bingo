<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-gymbag">
        <q-avatar>
          <img src="../assets/gymbag.png">
        </q-avatar>

        <q-toolbar-title class="text-weight-medium">
          Everyday Neuro Bingo
        </q-toolbar-title>

        <q-btn icon="settings" flat dense class="q-mr-xs">
          <q-menu auto-close>
            <q-list bordered padding>
              <q-item-label header>Style</q-item-label>

              <q-item tag="label" v-ripple>
                <q-item-section side top>
                  <q-checkbox v-model="settings.removeFont" />
                </q-item-section>

                <q-item-section @click="settings.removeFont = !settings.removeFont">
                  <q-item-label>Default font</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator spaced />

              <q-item>
                <q-item-section>
                  <q-btn class="full-width" color="red" text-color="white" no-caps label="Clear all data"
                    @click="clearAll()" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn href="https://github.com/cjmaxik/everyday-neuro-bingo" target="_blank" ref="noopener noreferrer"
          label="Source code" flat dense no-caps />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-toolbar class="bg-gymbag">
        <q-toolbar-title>
          PROTOTYPE! Might break at any time!
        </q-toolbar-title>

        <q-btn href="https://cjmaxik.ru" target="_blank" ref="noopener noreferrer" label="©️ CJMAXiK, 2023" flat
          no-caps />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
// vue-related
import { onMounted, watch } from 'vue'

// game settings
import { gameSettings } from '../stores/gameSettings'
import { gameState } from '../stores/gameState'
const settings = gameSettings()
const state = gameState()

// Font
const updateFont = (removeFont) => {
  if (removeFont) {
    document.body.classList.add('remove-font')
  } else {
    document.body.classList.remove('remove-font')
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

<style scoped></style>
