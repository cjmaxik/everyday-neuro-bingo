// vue-related
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const gameSettings = defineStore('gameSettings', {
  state: () => ({
    removeFont: useStorage('removeFont', false)
  }),

  getters: {
    //
  },

  actions: {
    clearAll () {
      this.removeFont = false
    }
  }
})
