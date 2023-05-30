<template>
  <q-toolbar class="bg-gymbag">
    <transition name="fade">
      <q-btn
        flat
        no-caps
        no-wrap
        padding="xs"
        to="/"
      >
        <q-avatar>
          <img src="../assets/gymbag.png">
        </q-avatar>

        <q-toolbar-title
          v-show="$q.screen.gt.xs"
          shrink
        >
          Everyday <span class="text-weight-bold">Neuro</span> Bingo
        </q-toolbar-title>
      </q-btn>
    </transition>

    <transition name="fade">
      <q-chip
        v-show="settings.streamName"
        :ripple="false"
        text-color="gymbag"
        color="white"
      >
        {{ realStreamName }}
      </q-chip>
    </transition>

    <q-space />

    <SettingsPanel />

    <q-separator
      v-show="settings.streamName"
      vertical
    />

    <AboutModalItem v-if="settings.streamName" />
  </q-toolbar>
</template>

<script setup>
// vue related
import { ref, watch } from 'vue'

// project-related
import SettingsPanel from './SettingsPanel.vue'
import AboutModalItem from '../components/AboutModalItem.vue'

// settings store
import { useGameSettingsStore } from 'src/stores/gameSettings'
const settings = useGameSettingsStore()

const realStreamName = ref(settings.streamName)
watch(settings, (settings) => {
  if (settings.streamName) {
    realStreamName.value = settings.streamName
  }
})
</script>

<style>
.q-chip {
  user-select: none;
}
</style>
