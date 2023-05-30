<template>
  <q-page
    class="index"
    padding
  >
    <q-banner
      inline-actions
      rounded
      class="bg-gymbag text-white text-center q-mt-sm"
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
import AboutModal from 'src/components/AboutModal.vue'
import StreamTypeLinks from 'src/components/StreamTypeLinks.vue'

// settings store
import { useGameSettingsStore } from 'src/stores/gameSettings'
const settings = useGameSettingsStore()
settings.streamName = null
</script>

<style lang="scss" scoped></style>
