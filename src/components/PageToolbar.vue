<template>
  <q-toolbar class="bg-gymbag">
    <q-avatar>
      <img src="../assets/gymbag.png">
    </q-avatar>

    <q-toolbar-title :hidden="$q.screen.lt.md">
      Everyday <span class="text-weight-bold">Neuro</span> Bingo
    </q-toolbar-title>

    <q-space />

    <StreamTypeLinks />

    <q-separator vertical />

    <SettingsPanel />

    <q-separator vertical />

    <AboutModal />
  </q-toolbar>
</template>

<script setup>
// project-related
import SettingsPanel from './SettingsPanel.vue'
import StreamTypeLinks from '../components/StreamTypeLinks.vue'
import AboutModal from '../components/AboutModal.vue'
</script>
