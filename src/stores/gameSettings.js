// vue-related
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useGameSettingsStore = defineStore('gameSettings', {
  state: () => ({
    removeFont: useLocalStorage('removeFont', false),
    disableSound: useLocalStorage('disableSound', false),

    streamName: ''
  }),

  getters: {
    //
  },

  actions: {
    clearAll () {
      this.removeFont = false
      this.disableSound = false
    }
  }
})
