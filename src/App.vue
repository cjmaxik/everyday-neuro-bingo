<template>
  <router-view />
</template>

<script setup>
import { watch } from 'vue'

import { useGameSettingsStore } from 'src/stores/gameSettings'
const settings = useGameSettingsStore()

// watch for font setting changes
watch(settings, (settings) => {
  if (settings.removeFont) {
    document.body.classList.remove('neuro-font')
  } else {
    document.body.classList.add('neuro-font')
  }
})
</script>
