/**
 * Use this board to test emotes and settings
 * Available ONLY via direct link (see `prompts.js`)
 */

import neuro from 'prompts/characters/neuro'
import emotesList from 'helpers/emotesList'

const prepareEmotes = () => {
  const emotes = []
  for (const key in emotesList) {
    emotes.push(`:${key}:`)
  }

  return emotes
}

const prompts = prepareEmotes()
// const prompts = neuro.prompts.filter(x => x.includes(':'))

export default {
  ...neuro,

  name: 'Emote test',

  prompts: Array.from({
    ...prompts,
    length: 48
  })
}
