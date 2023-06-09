<template>
  <q-btn
    stretch
    dense
    flat
    fab-mini
    icon="settings"
  >
    <q-tooltip
      class="text-body2 bg-gymbag"
      anchor="bottom left"
    >
      Settings
    </q-tooltip>

    <q-menu auto-close>
      <q-list
        bordered
        padding
      >
        <q-item-label
          header
          class="text-center"
        >
          Settings
        </q-item-label>

        <q-item
          v-ripple
          tag="label"
        >
          <q-item-section
            side
            top
          >
            <q-checkbox v-model="settings.removeFont" />
          </q-item-section>

          <q-item-section @click="settings.removeFont = !settings.removeFont">
            <q-item-label class="q-pr-sm">
              Default font
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          v-ripple
          tag="label"
        >
          <q-item-section
            side
            top
          >
            <q-checkbox v-model="settings.disableSound" />
          </q-item-section>

          <q-item-section @click="settings.disableSound = !settings.disableSound">
            <q-item-label class="q-pr-sm">
              Disable sound
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          v-ripple
          tag="label"
        >
          <q-item-section
            side
            top
          >
            <q-checkbox v-model="settings.hideTally" />
          </q-item-section>

          <q-item-section @click="settings.hideTally = !settings.hideTally">
            <q-item-label class="q-pr-sm">
              Hide tally
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          v-ripple
          tag="label"
        >
          <q-item-section
            side
            top
          >
            <q-checkbox v-model="settings.staticEmotes" />
          </q-item-section>

          <q-item-section @click="settings.staticEmotes = !settings.staticEmotes">
            <q-item-label class="q-pr-sm">
              Static emotes
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item v-show="isBingoPage">
          <q-item-section>
            <q-btn
              class="full-width"
              color="red"
              label="Clear the board"
              no-caps
              text-color="white"
              @click="clearBoard(currentRoute)"
            />
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <q-btn
              class="full-width"
              color="red"
              label="Clear all data"
              no-caps
              text-color="white"
              @click="clearAll()"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup>
// vue-related
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// game settings
import { useGameStateStore } from '../stores/gameState'
import { useGameSettingsStore } from '../stores/gameSettings'

// route
const route = useRoute()
const router = useRouter()
const currentRoute = ref(route.path.replace('/', ''))
const isBingoPage = ref(currentRoute.value !== '')

let state = null
if (isBingoPage.value) {
  state = useGameStateStore(currentRoute.value)
}

const settings = useGameSettingsStore()

// font
const updateFont = (removeFont) => {
  if (removeFont) {
    document.body.classList.add('remove-font')
  } else {
    document.body.classList.remove('remove-font')
  }
}

const clearBoard = () => {
  if (confirm('Do you really want to clear this board state?')) {
    state.clearAll()
    router.go()
  }
}

const clearAll = () => {
  if (confirm('Do you really want to clear all the settings and all board states?')) {
    settings.clearAll()
    localStorage.clear()
    location.replace('/')
  }
}

onMounted(() => {
  settings.$subscribe((mutation, state) => {
    // import { MutationType } from 'pinia'
    console.log(mutation.type) // 'direct' | 'patch object' | 'patch function'
    // same as cartStore.$id
    console.log(mutation.storeId) // 'cart'
    // only available with mutation.type === 'patch object'
    console.log(state) // patch object passed to cartStore.$patch()
  })

  watch(settings, (newSettings, oldSettings) => {
    updateFont(settings.removeFont)
  })

  watch(
    () => route.path, (newRoute) => {
      currentRoute.value = route.path.replace('/', '')

      if (currentRoute.value !== '') {
        state = useGameStateStore(currentRoute.value)
        isBingoPage.value = true
      } else {
        state = null
        isBingoPage.value = false
      }
    }
  )
})
</script>

<style lang="scss" scoped>
.q-item__section--side {
  padding-right: 0;
}
</style>
