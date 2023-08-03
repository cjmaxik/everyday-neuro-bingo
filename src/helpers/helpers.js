// @ts-check
// eslint-disable-next-line no-unused-vars
import * as Types from 'helpers/types.d'

/**
 * Split array into chunks
 * @param {Array} array
 * @param {number} chunkSize
 */
export const chunkArray = (array, chunkSize) => {
  let index = 0
  const chunks = []

  for (index = 0; index < array.length; index += chunkSize) {
    const chunk = array.slice(index, index + chunkSize)
    chunks.push(chunk)
  }

  return chunks
}

/**
 * Shuffle the array based on the seed
 * @param {Array} array
 * @param {number} seed
 */
export const shuffle = (array, seed) => {
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

/**
 * Create a deep copy of an array
 * @param {Array} array
 * @returns {Array}
 */
export const deepCopy = (array) => JSON.parse(JSON.stringify(array))

/**
 * Merge arrays and deduplicate entries
 * @param  {...string[]} arrays
 * @returns {string[]}
 */
export const mergeUnique = (...arrays) => [...new Set([].concat(...arrays))]

/**
 * Generate 48 prompts for the board
 * @param {Types.ParticipantData[]} allPrompts
 * @param {number} seed
 * @param {number} boardSize
 * @returns {Types.Prompt[]}
 */
export const generatePrompts = (allPrompts, seed, boardSize) => {
  const participantsCount = allPrompts.length
  const countForParticipiant = Math.floor((boardSize - 1) / participantsCount)
  console.debug(`Expecting ${countForParticipiant} prompts for each participant...`)

  let finalPrompts = []
  finalPrompts = Array.from(new Array(participantsCount), () => [])

  allPrompts.forEach((data, index) => {
    const prompts = shuffle(data.prompts, seed).slice(0, countForParticipiant)

    if (prompts.length < countForParticipiant) {
      throw Error(`Not enough propmts for ID: "${data.participantId}". We expect ${countForParticipiant}, we received ${prompts.length}`)
    }

    prompts.forEach(text => {
      finalPrompts[index].push({
        id: data.participantId,
        text
      })
    })
  })

  if (participantsCount > 1) return transposeForBoard(finalPrompts).flat()

  return shuffle(finalPrompts.flat(), seed)
}

/**
 * Transposes the array, then reverses the last half of the array
 * (for uniformity on the board)
 * @param {Array} array
 * @returns {Array}
 */
export const transposeForBoard = (array) => {
  const transposedArray = array[0].map((_, colIndex) => array.map(row => row[colIndex])).flat()

  return transposedArray
    .splice(0, transposedArray.length / 2)
    .concat(transposedArray.reverse())
}

/**
 * Returns a random number (inslusive)
 * @param {number} min Min value
 * @param {number} max Max value
 * @returns {number}
 */
export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Generates seed phrase based on a browser + current date in UTC timezone
 * @param {number} version
 * @returns {string} Seed phrase
 */
export const generateBrowserSeed = (version) => ''.concat(
  version.toString(),
  new Date().getUTCFullYear().toString(),
  new Date().getUTCMonth().toString(),
  new Date().getUTCDate().toString(),
  window.navigator?.languages.toString() ?? 'en-US',
  window.navigator?.userAgent ?? 'The Swarm'
).replaceAll(/[^a-zA-Z0-9]+/g, '')

/**
 * Winning lines for the board
 */
export const winningLines = [
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
