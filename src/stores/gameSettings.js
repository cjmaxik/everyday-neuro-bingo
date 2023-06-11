// vue-related
import { defineStore, acceptHMRUpdate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useGameSettingsStore = defineStore('gameSettings', {
  state: () => ({
    removeFont: useLocalStorage('removeFont', false),
    disableSound: useLocalStorage('disableSound', false),
    hideTally: useLocalStorage('hideTally', true),
    emotes: useLocalStorage('emotes', 'animated'),

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

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGameSettingsStore, import.meta.hot))
}
