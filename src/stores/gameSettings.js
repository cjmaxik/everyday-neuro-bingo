// @ts-check
// eslint-disable-next-line no-unused-vars
import * as Types from 'helpers/types.d'

// vue-related
import { defineStore, acceptHMRUpdate } from 'pinia'
import { useLocalStorage, usePreferredReducedMotion } from '@vueuse/core'
const preferredMotion = usePreferredReducedMotion()

/**
 * Generates the game settings store
 */
export const useGameSettingsStore = defineStore('gameSettings', {
  /**
   * @returns {Types.GameSettingsStore}
   */
  state: () => ({
    removeFont: useLocalStorage('removeFont', false),
    disableSound: useLocalStorage('disableSound', false),
    hideTally: useLocalStorage('hideTally', true),
    emotes: useLocalStorage('emotes', preferredMotion.value === 'reduce' ? 'static' : 'animated'),

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

// @ts-ignore
if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useGameSettingsStore, import.meta.hot))
