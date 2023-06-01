/* eslint-disable no-unreachable */
// vue-related
import { defineStore, acceptHMRUpdate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

// project-related
import seedrandom from 'seedrandom'
import { generatePrompts, deepCopy } from '../helpers/helpers'

// TODO: support more than one size
const streakCount = 7
const boardSize = Math.pow(streakCount, 2)
const centerBlock = Math.floor(boardSize / 2)

// TODO: generate winning lines based on `streakCount`
// i am lazy
const winningLines = [
  // rows
  [0, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, 31, 32, 33, 34],
  [35, 36, 37, 38, 39, 40, 41],
  [42, 43, 44, 45, 46, 47, 48],

  // columns
  [0, 7, 14, 21, 28, 35, 42],
  [1, 8, 15, 22, 29, 36, 43],
  [2, 9, 16, 23, 30, 37, 44],
  [3, 10, 17, 24, 31, 38, 45],
  [4, 11, 18, 25, 32, 39, 46],
  [5, 12, 19, 26, 33, 40, 47],
  [6, 13, 20, 27, 34, 41, 48],

  // diagonals
  [0, 8, 16, 24, 32, 40, 48],
  [6, 12, 18, 24, 30, 36, 42]
]

export const useGameStateStore = (id) => defineStore(`gameState-${id}`, {
  state: () => ({
    // application data
    version: useLocalStorage(`version-${id}`, 2),
    ready: useLocalStorage(`ready-${id}`, false),

    // game data
    streamName: null,
    freeBlockImage: null,
    seed: useLocalStorage(`seed-${id}`, 0),
    participants: {},
    board: useLocalStorage(`board-${id}`, []),
    bingo: useLocalStorage(`bingo-${id}`, []),
    streakCount: useLocalStorage(`streakCount-${id}`, streakCount),
    previousWin: useLocalStorage(`previousWin-${id}`, 0),
    winningLines: useLocalStorage(`winningLines-${id}`, winningLines)
  }),

  getters: {
    getBoardState: (state) => state.board,
    getTally: (state) => (index) => state.board[index].tally,
    isFree: (state) => (index) => state.board[index].free
  },

  actions: {
    clearAll () {
      this.version = 2
      this.ready = false
      this.seed = 0
      this.board = []
      this.bingo = []
      this.streakCount = streakCount
      this.previousWin = 0
      this.winningLines = winningLines
    },

    /**
     * @param {Object} streamData Prompts
     * @param {Integer} seedPhrase Seed
     * @param {Integer} version Dataset version
    */
    generateBoard (streamData, seedPhrase, version) {
      const newSeed = seedrandom(seedPhrase, { state: true }).int32()

      const participants = {}
      const allPrompts = []

      streamData.participants.forEach(data => {
        // participants
        const assetsPath = '/assets'
        participants[data.id] = {
          id: data.id,
          name: data.name,
          color: data.color,
          image: `${assetsPath}/images/${data.assetsFolder ?? data.id}/${data.image}`,
          sounds: data.sounds.map(x => new Audio(`${assetsPath}/sounds/${data.assetsFolder ?? data.id}/${x}`))
        }

        // prompts
        allPrompts.push({
          participantId: data.id,
          prompts: deepCopy(data.prompts)
        })
      })

      this.streamName = streamData.name
      this.freeBlockImage = streamData.image
      this.participants = participants

      // Check if the version, seed and/or stream type has changed
      if (this.ready) {
        if (
          this.version === version &&
          this.seed === newSeed &&
          this.streamType === streamData.streamType
        ) return
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

    increment (index) {
      this.board[index].tally++
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
