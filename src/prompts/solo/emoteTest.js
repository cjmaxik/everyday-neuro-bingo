/**
 * Use this board to test emotes and settings
 * Available ONLY via direct link (see `prompts.js`)
 */

import neuro from 'prompts/characters/neuro'
import emotesList from 'helpers/emotesList.json'

const prepareEmotes = () => {
  const emotes = []

  for (const key in emotesList) {
    emotes.push(`:${key}:`)
  }

  return emotes
}

const prompts = prepareEmotes()
// const prompts = neuro.prompts.filter(x => x.includes(':'))

const emoteTest = {
  ...neuro,

  name: 'Emote test',

  prompts: Array.from({
    ...prompts,
    length: 48
  })
}

export default {
  name: 'Emote test',
  image: 'vedal/vedal.png',
  participants: [
    emoteTest
  ]
}
