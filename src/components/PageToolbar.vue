<template>
  <q-header elevated>
    <q-toolbar class="bg-gymbag">
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <q-btn
          flat
          no-caps
          no-wrap
          padding="xs"
          to="/"
        >
          <q-avatar>
            <img src="/assets/images/gymbag.png">
          </q-avatar>

          <q-toolbar-title
            v-show="$q.screen.gt.xs"
            shrink
          >
            Everyday <span class="text-weight-bold">Neuro</span> Bingo
          </q-toolbar-title>
        </q-btn>
      </transition>

      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
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

      <q-separator vertical />

      <AboutModalItem />
    </q-toolbar>
  </q-header>
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
  // leave as is! prevents animation jump
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
