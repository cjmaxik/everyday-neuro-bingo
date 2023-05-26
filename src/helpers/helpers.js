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

export const generateSeedPhrase = () => ''.concat(new Date().getUTCDate(), new Date().getUTCMonth(), new Date().getUTCFullYear())
