// vue-related
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

// project-related
import seedrandom from 'seedrandom'
import { shuffle, deepCopy } from '../helpers/helpers'
import neuro from '../prompts/neuro'

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

export const gameState = defineStore('gameState', {
  state: () => ({
    version: useStorage('version', 2),
    ready: useStorage('ready', false),
    seed: useStorage('seed', 0),
    bingo: useStorage('bingo', []),
    board: useStorage('board', []),
    streakCount: useStorage('streakCount', streakCount),
    winningLines: useStorage('winningLines', winningLines),
    previousWin: useStorage('previousWin', 0)
  }),

  getters: {
    getBoardState: (state) => state.board,
    getTally: (state) => (index) => state.board[index].tally,
    isFree: (state) => (index) => state.board[index].free
  },

  actions: {
    clearAll () {
      this.ready = false
      this.seed = 0
      this.bingo = []
      this.board = []
      this.streakCount = streakCount
      this.winningLines = winningLines
    },

    /**
     * @param {Integer} seedPhrase Seed
     * @param {Integer} version Dataset version
     */
    generateBoard (seedPhrase, version) {
      const newSeed = seedrandom(seedPhrase, { state: true }).int32()
      const prompts = deepCopy(neuro)
      const seededPrompt = shuffle(prompts, newSeed)

      if (this.ready) {
        if (
          this.version === version &&
          this.seed === newSeed
        ) return
      }

      console.log('Seed has changes - clearing everything...')
      this.clearAll()

      this.seed = newSeed
      this.version = version
      this.board = []
      for (let index = 0; index < boardSize; index++) {
        const free = index === centerBlock
        this.board[index] = {
          index,
          tally: free ? 1 : 0, // center block is free
          text: free ? '' : seededPrompt[index] || 'vedalPls',
          free,
          win: false
        }
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
})
