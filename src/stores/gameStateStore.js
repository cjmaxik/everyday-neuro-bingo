// vue-related
import { defineStore } from 'pinia'

// project-related
import seedrandom from 'seedrandom'
import neuro from '../prompts/neuro'

// TODO: support more than one size
const streakCount = 7
const boardSize = Math.pow(streakCount, 2)
const centerBlock = Math.floor(boardSize / 2)

// TODO: generate winning lines based on `streakCount`
// i am lazy
const winners = [
  // rows
  [0, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27],
  [22, 29, 30, 31, 32, 33, 34],
  [35, 36, 37, 38, 39, 40, 41],
  [42, 43, 44, 45, 46, 47, 48],

  // columns
  [0, 7, 14, 21, 22, 35, 42],
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

/**
 * Return an array
 * @param {Number[]|[]} array
 */
const returnCheckedBlocks = (array) => array.filter(x => x.tally).map((x) => x.index)

const shuffle = (array, seed) => {
  let currentIndex = array.length, temporaryValue, randomIndex
  seed = seed || 1
  const random = function () {
    const x = Math.sin(seed++) * 10000
    return x - Math.floor(x)
  }
  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(random() * currentIndex)
    currentIndex -= 1
    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

export const gameStateStore = defineStore('gameState', {
  state: () => ({
    seed: null,
    bingo: false,
    board: [],
    winners
  }),

  getters: {
    getBoardState: (state) => state.board,

    getTally: (state) => {
      console.log(state)
      return (index) => state.board[index].tally
    },

    isFree: (state) => {
      console.log(state)
      return (index) => state.board[index].free
    }
  },

  actions: {
    generateBoard (seedPhrase) {
      this.seed = seedrandom(seedPhrase, { state: true }).int32()
      const seededPrompt = shuffle(neuro, this.seed)

      for (let index = 0; index < boardSize; index++) {
        const free = index === centerBlock
        this.board[index] = {
          index,
          tally: free ? 1 : 0, // center block is free
          text: free ? '' : seededPrompt[index] || 'FILTERED.',
          free
        }
      }
    },

    increment (index) {
      this.board[index].tally++
    },

    checkForBingo () {
      const checkedBlocks = returnCheckedBlocks(this.board)

      // Skip checks if streak is unobtainable due to low count
      if (checkedBlocks.length < streakCount) return false

      this.bingo = winners.some(winner => {
        return winner.every(x => checkedBlocks.includes(x))
      })

      return this.bingo
    }
  }
})
