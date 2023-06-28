// vue-related
import { defineStore, acceptHMRUpdate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

// project-related
import seedrandom from 'seedrandom'
import {
  generatePrompts,
  deepCopy,
  winningLines,
  generateDailySeed,
  generateBrowserSeed
} from '../helpers/helpers'

const streakCount = 7
const boardSize = Math.pow(streakCount, 2)
const centerBlock = Math.floor(boardSize / 2)

/**
 * Generates the game state store
 * @param {string} id Store ID
 */
export const useGameStateStore = (id) => defineStore(`gameState-${id}`, {
  state: () => ({
    // application data
    version: useLocalStorage(`version-${id}`, 3),
    ready: useLocalStorage(`ready-${id}`, false),

    // game data
    streamName: null,
    freeBlockImage: null,
    seed: useLocalStorage(`seed-${id}`, 0),
    participants: {},
    board: useLocalStorage(`board-${id}`, []),
    bingo: useLocalStorage(`bingo-${id}`, []),
    streakCount: useLocalStorage(`streakCount-${id}`, streakCount),
    previousWin: useLocalStorage(`previousWin-${id}`, 0)
  }),

  getters: {
    getBoardState: (state) => state.board,
    getTally: (state) => (index) => state.board[index].tally,
    isFree: (state) => (index) => state.board[index].free
  },

  actions: {
    clearAll () {
      this.version = 3
      this.ready = false
      this.seed = 0
      this.board = []
      this.bingo = []
      this.streakCount = streakCount
      this.previousWin = 0
    },

    /**
     * @typedef StreamData
     * @type {Object}
     * @property {string} image
     * @property {string} name
     * @property {ParticipantData[]} participants
     * @property {boolean?} random
     */

    /**
     * @param {StreamData} streamData Prompts
     * @param {number} version Dataset version
    */
    generateBoard (streamData, version) {
      const seedPhrase = streamData.random ? generateBrowserSeed() : generateDailySeed()
      const newSeed = seedrandom(seedPhrase, { state: true }).int32()
      console.log('Random board?', streamData.random, seedPhrase, newSeed)

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

        console.debug(`${data.name} has ${data.prompts.length} prompts.`)

        // prompts
        allPrompts.push({
          participantId: data.id,
          prompts: deepCopy(data.prompts)
        })
      })

      this.streamName = streamData.name
      this.participants = participants

      if (streamData.image.includes('{x}')) {
        streamData.image = streamData.image.replace('{x}', newSeed % 10)
      }
      this.freeBlockImage = `${assetsPath}/images/${streamData.image}`

      // Check if the version, seed and/or stream type has changed
      if (process.env.NODE_ENV !== 'development') {
        if (this.ready) {
          if (
            this.version === version &&
            this.seed === newSeed &&
            this.streamType === streamData.streamType
          ) return
        }
      }

      console.log('Seed has changes - clearing everything...')
      this.clearAll()

      const seededPrompts = generatePrompts(allPrompts, newSeed, boardSize)

      // Push the board
      this.seed = newSeed
      this.version = version
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
    },

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

    decrement (index) {
      if (this.board[index].tally <= 1) {
        this.board[index].tally = 0
      } else {
        this.board[index].tally--
      }
    },

    checkForBingo () {
      const blocksWithTally = this.board.filter(x => x.tally).map((x) => x.index)

      let winningCombination = winningLines.filter(
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

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGameStateStore, import.meta.hot))
}
