<template>
  <q-page class="index">
    <q-banner
      class="bg-gymbag text-white text-center"
      inline-actions
      rounded
    >
      <span class="text-h5">
        Welcome to <br v-show="$q.screen.lt.sm">Everyday <span class="text-weight-bold">Neuro</span> Bingo!
      </span>
    </q-banner>

    <StreamTypeLinks />

    <div class="q-pt-sm text-center">
      <AboutModal :is-index="true" />
    </div>
  </q-page>
</template>

<script setup>
// @ts-check

import AboutModal from 'components/AboutModal.vue'
import StreamTypeLinks from 'components/StreamTypeLinks.vue'

// settings store
import { useGameSettingsStore } from 'stores/gameSettings'
const settings = useGameSettingsStore()
settings.streamName = null
</script>
