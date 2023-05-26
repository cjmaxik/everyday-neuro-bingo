<template>
  <q-toolbar class="bg-gymbag">
    <q-avatar>
      <img src="../assets/gymbag.png">
    </q-avatar>

    <q-toolbar-title :hidden="$q.screen.lt.md">
      Everyday <span class="text-weight-bold">Neuro</span> Bingo
    </q-toolbar-title>

    <q-space />

    <q-btn
      class="q-mr-xs"
      dense
      flat
      icon="settings"
    >
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

    <q-btn
      dense
      flat
      label="About"
      no-caps
      @click="aboutToolbar = true"
    />
  </q-toolbar>

  <q-dialog v-model="aboutToolbar">
    <q-card>
      <q-toolbar>
        <q-avatar>
          <img src="../assets/gymbag.png">
        </q-avatar>

        <q-toolbar-title>
          Everyday <span class="text-weight-bold">Neuro</span> Bingo
        </q-toolbar-title>
      </q-toolbar>

      <q-card-section>
        <p>
          New Bingo card every day! Watch Neuro-sama's streams and follow along.
        </p>
        <p>
          Created by <a
            ref="noopener noreferrer"
            href="https://cjmaxik"
            target="_blank"
          >CJMAXiK</a> with the help of <a
            ref="noopener noreferrer"
            href="https://discord.gg/neurosama"
            target="_blank"
          >Neurocord</a>.
        </p>
        <p>
          <a
            ref="noopener noreferrer"
            href="https://github.com/cjmaxik/everyday-neuro-bingo/graphs/contributors"
            target="_blank"
          >Code contributors</a>.
        </p>
        <hr>
        <p>
          <span class="text-h6">Follow Neuro-sama:</span>
          <q-btn-group spread>
            <q-btn
              ref="noopener noreferrer"
              dense
              href="https://www.twitch.tv/vedal987?ref=neuro-bingo"
              label="Twitch"
              no-caps
              style="background-color: #6441a5;"
              target="_blank"
              text-color="white"
            />
            <q-btn
              ref="noopener noreferrer"
              dense
              href="https://www.youtube.com/@Neurosama?ref=neuro-bingo"
              label="YouTube"
              no-caps
              style="background-color: #c4302b;"
              target="_blank"
              text-color="white"
            />
            <q-btn
              ref="noopener noreferrer"
              dense
              href="https://twitter.com/NeurosamaAI?ref=neuro-bingo"
              label="@NeurosamaAI"
              no-caps
              style="background-color: #00acee;"
              target="_blank"
              text-color="white"
            />
            <q-btn
              ref="noopener noreferrer"
              dense
              href="https://twitter.com/Vedal987?ref=neuro-bingo"
              label="@vedal987"
              no-caps
              style="background-color: #1DA1F2;"
              target="_blank"
              text-color="white"
            />
          </q-btn-group>
        </p>
      </q-card-section>

      <q-card-actions
        align="right"
        class="text-primary"
      >
        <q-btn
          ref="noopener noreferrer"
          flat
          href="https://github.com/cjmaxik/everyday-neuro-bingo"
          label="Source code"
          no-caps
          target="_blank"
        />
        <q-btn
          v-close-popup
          flat
          label="Close"
          no-caps
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
// vue-related
import { ref, onMounted, watch } from 'vue'
import { useQuasar } from 'quasar'

// local refs
const aboutToolbar = ref(false)
const $q = useQuasar()

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
