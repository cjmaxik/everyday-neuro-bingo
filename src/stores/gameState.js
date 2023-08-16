// @ts-check
// eslint-disable-next-line no-unused-vars
import * as Types from 'helpers/types.d'

// vue-related
import { defineStore, acceptHMRUpdate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

// project-related
import alea from 'seedrandom'
import {
  generatePrompts,
  deepCopy,
  winningLines,
  generateBrowserSeed
} from 'helpers/helpers'

/**
 * Generates the game state store
 * @param {string} id Store ID
 * @returns {import('pinia').Store<string, Types.GameStateStore, Object, Object>}
 */
export const useGameStateStore = (id) => defineStore(`gameState-${id}`, {
  state: () => ({
    // application data
    ready: useLocalStorage(`ready-${id}`, false),
    readyToShow: false,

    // game data
    streamName: null,
    freeBlockImage: null,
    seed: useLocalStorage(`seed-${id}`, 0),
    participants: {},
    small: useLocalStorage(`small-${id}`, false),
    board: useLocalStorage(`board-${id}`, []),
    bingo: useLocalStorage(`bingo-${id}`, []),
    previousWin: useLocalStorage(`previousWin-${id}`, 0)
  }),

  getters: {
    getTally: (state) => (/** @type {number} */ index) => state.board[index].tally,
    fullyReady: (state) => state.ready && state.readyToShow,
    enoughParticipants: (state) => Object.keys(state.participants).length > 1
  },

  actions: {
    clearAll () {
      this.ready = false

      this.seed = 0
      this.small = false
      this.board = []
      this.bingo = []
      this.previousWin = 0
    },

    /**
     * @param {Types.StreamData} streamData Prompts
     * @param {number} version Dataset version
    */
    generateBoard (streamData, version) {
      console.group('Initializing random seed...')

      const seedPhrase = generateBrowserSeed(version)
      const newSeed = Math.abs(alea(seedPhrase).int32())

      console.debug('Seed phrase -', seedPhrase)
      console.debug('Seed -', newSeed)

      console.groupEnd()

      const participants = {}
      const allPrompts = []

      const assetsPath = '/assets'

      streamData.participants.forEach(data => {
        // participants
        participants[data.id] = {
          id: data.id,
          name: data.name,
          color: data.color,
          image: `${assetsPath}/images/${data.assetsFolder ?? data.id}/${data.image}`,
          sounds: data.sounds.map(x => new Audio(`${assetsPath}/sounds/${data.assetsFolder ?? data.id}/${x}`))
        }
      })

      this.streamName = streamData.name
      this.participants = participants

      if (streamData.image.includes('{x}')) {
        streamData.image = streamData.image.replace('{x}', Math.abs(newSeed % 10).toString())
      }
      this.freeBlockImage = `${assetsPath}/images/${streamData.image}`

      // Check if the seed has changed
      if (process.env.NODE_ENV !== 'development') {
        if (this.ready && this.seed === newSeed) {
          this.readyToShow = true

          return
        }
      }

      console.log('Seed has changes - clearing everything...')
      this.clearAll()

      console.group('Initializing prompts...')
      streamData.participants.forEach(data => {
        // prompts
        allPrompts.push({
          participantId: data.id,
          prompts: deepCopy(data.prompts)
        })

        console.debug(`${data.name} - ${data.prompts.length} prompts.`)
      })
      console.groupEnd()

      this.small = !!streamData.small
      const boardSize = streamData.small ? 25 : 49
      const centerBlock = Math.floor(boardSize / 2)

      const seededPrompts = generatePrompts(allPrompts, newSeed, boardSize)

      // Push the board
      this.seed = newSeed
      this.board = []

      let promptIndex = 0

      for (let index = 0; index < boardSize; index++) {
        const free = index === centerBlock

        this.board[index] = {
          index,
          participantId: free ? null : seededPrompts[promptIndex].id,
          tally: free ? 1 : 0, // center block is free
          text: free ? '' : seededPrompts[promptIndex].text || '⚠️⚠️⚠️',
          free,
          win: false
        }

        if (!free) promptIndex++
      }

      this.ready = true
      this.readyToShow = true
    },

    /**
     * @param {number} index
     * @param {boolean} hideTally
     */
    increment (index, hideTally) {
      const currentTally = this.board[index].tally

      if (hideTally) {
        this.board[index].tally = 1
        if (currentTally >= 1) return false
      } else {
        this.board[index].tally++
      }

      return true
    },

    /**
     * @param {number} index
     */
    decrement (index) {
      if (this.board[index].tally <= 1) {
        this.board[index].tally = 0
      } else {
        this.board[index].tally--
      }
    },

    checkForBingo () {
      const boardSize = this.small ? 'small' : 'big'
      const blocksWithTally = this.board.filter(x => x.tally).map((x) => x.index)

      let winningCombination = winningLines[boardSize].filter(
        winner => winner.every(x => blocksWithTally.includes(x))
      ).flat()
      winningCombination = [...new Set(winningCombination)]

      this.bingo = winningCombination.length ? winningCombination : []

      // Update all blocks
      if (this.bingo) {
        this.board.forEach(block => {
          if (this.bingo.includes(block.index)) {
            block.win = true
          } else {
            block.win = false
          }
        })
      }

      return this.bingo
    }
  }
})()

// @ts-ignore
if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useGameStateStore, import.meta.hot))
