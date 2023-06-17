/**
 * Split array into chunks
 * @param {Array} array
 * @param {Integer} chunkSize
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
 * @param {Integer} seed
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
 */
export const deepCopy = (array) => JSON.parse(JSON.stringify(array))

/**
 *
 * @param {Object[]} allPrompts
 * @param {Integer} seed
 * @param {Integer} boardSize
 */
export const generatePrompts = (allPrompts, seed, boardSize) => {
  const participantsCount = allPrompts.length
  const countForParticipiant = Math.floor((boardSize - 1) / participantsCount)

  let finalPrompts = []
  finalPrompts = Array.from(new Array(participantsCount), () => [])

  allPrompts.forEach((data, index) => {
    const prompts = shuffle(data.prompts, seed).slice(0, countForParticipiant)

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

export const transposeForBoard = (array) => {
  const transposedArray = array[0].map((_, colIndex) => array.map(row => row[colIndex])).flat()

  return transposedArray
    .splice(0, transposedArray.length / 2)
    .concat(transposedArray.reverse())
}

/**
 * Return a random number (inslusive)
 * @param {Integer} min Min value
 * @param {Integer} max Max value
 */
export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const generateSeedPhrase = () => ''.concat(new Date().getUTCDate(), new Date().getUTCMonth(), new Date().getUTCFullYear())

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
