<template>
  <q-btn
    dense
    fab-mini
    flat
    icon="help"
    no-caps
    stretch
    @click="openAboutModal = true"
  >
    <q-tooltip
      anchor="bottom left"
      class="text-body2 bg-gymbag"
      right
    >
      About
    </q-tooltip>
  </q-btn>

  <q-dialog v-model="openAboutModal">
    <AboutModal />
  </q-dialog>
</template>

<script setup>
// @ts-check

// vue-related
import { ref } from 'vue'

// project related
import AboutModal from './AboutModal.vue'

// local refs
const openAboutModal = ref(false)
</script>
