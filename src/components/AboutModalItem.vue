<template>
  <q-btn
    dense
    flat
    no-caps
    stretch
    fab-mini
    icon="help"
    @click="openAboutModal = true"
  >
    <q-tooltip
      right
      anchor="bottom left"
      class="text-body2 bg-gymbag"
    >
      About
    </q-tooltip>
  </q-btn>

  <q-dialog v-model="openAboutModal">
    <AboutModal />
  </q-dialog>
</template>

<script setup>
// vue-related
import { ref } from 'vue'

// project related
import AboutModal from './AboutModal.vue'

// local refs
const openAboutModal = ref(false)
</script>
