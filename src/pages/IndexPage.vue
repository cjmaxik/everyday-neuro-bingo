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

    <q-stepper
      ref="stepper"
      v-model="step"
      animated
      class="q-mt-sm bg-white shadow-5 shadow-transition "
      color="primary"
    >
      <q-step
        class="index-menu-step no-scroll"
        :done="step > 1"
        icon="profile"
        :name="1"
        title="Select character"
      >
        <div class="text-h5 q-my-sm text-center text-gymbag">
          Select character
        </div>

        <div class="row q-gutter-sm q-pa-sm">
          <IndexMenuButton
            v-for="character in indexMenu"
            :key="character.id"
            v-bind="character"
            @select-character="selectCharacter"
          />
        </div>
      </q-step>

      <q-step
        class="index-menu-step"
        :done="step > 2"
        icon="monitor"
        :name="2"
        title="Select stream"
      >
        <StreamTypeLinks
          v-bind="indexMenu[currentCharacter]"
          @return-to-selection="returnToSelection"
        />
      </q-step>
    </q-stepper>

    <div class="q-pt-sm text-center">
      <AboutModal :is-index="true" />
    </div>
  </q-page>
</template>

<script setup>
// @ts-check
import { ref } from 'vue'
import AboutModal from 'components/AboutModal.vue'
import StreamTypeLinks from 'components/StreamTypeLinks.vue'
import IndexMenuButton from 'src/components/IndexMenuButton.vue'

import indexMenu from 'conf/indexMenu'

// settings store
import { useGameSettingsStore } from 'stores/gameSettings'
const settings = useGameSettingsStore()
settings.streamName = null

// stepper ref
const step = ref(1)
const currentCharacter = ref(null)

/**
 * @param {string} selectedCharacter
 */
const selectCharacter = (selectedCharacter) => {
  currentCharacter.value = selectedCharacter
  step.value = 2
}

const returnToSelection = () => {
  step.value = 1
  currentCharacter.value = null
}
</script>
