<template>
  <q-toolbar class="bg-gymbag">
    <q-btn
      flat
      round
      dense
      to="/"
    >
      <template #default>
        <q-avatar>
          <img src="../assets/gymbag.png">
        </q-avatar>
      </template>
    </q-btn>

    <transition name="fade">
      <q-btn
        v-show="$q.screen.gt.xs"
        flat
        no-caps
        no-wrap
        class="q-ml-xs"
        to="/"
      >
        <q-toolbar-title shrink>
          Everyday <span class="text-weight-bold">Neuro</span> Bingo
        </q-toolbar-title>
      </q-btn>
    </transition>

    <transition name="fade">
      <q-chip
        v-if="settings.streamName !== null"
        :ripple="false"
        text-color="gymbag"
        color="white"
      >
        {{ settings.streamName }}
      </q-chip>
    </transition>

    <q-space />

    <SettingsPanel />

    <transition name="fade">
      <q-separator
        :v-show="settings.streamName"
        vertical
      />
    </transition>

    <transition name="fade">
      <AboutModalItem :v-show="settings.streamName" />
    </transition>
  </q-toolbar>
</template>

<script setup>
// project-related
import SettingsPanel from './SettingsPanel.vue'
import AboutModalItem from '../components/AboutModalItem.vue'

// settings store
import { useGameSettingsStore } from 'src/stores/gameSettings'
const settings = useGameSettingsStore()
</script>
