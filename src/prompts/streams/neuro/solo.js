import { mergeUnique } from 'src/helpers/helpers'

import * as neuro from 'characters/neuro'
import * as chat from 'characters/chat'

const regularNeuro = {
  ...neuro.base,

  id: 'regularNeuro',
  name: 'Regular prompts',

  prompts: neuro.regularPrompts
}

const specificNeuro = {
  ...neuro.base,

  id: 'specificNeuro',
  name: 'Specific prompts',

  prompts: neuro.specificPrompts
}

const mentions = {
  ...neuro.base,

  id: 'mentions',
  color: '#420069',
  name: 'Mentions',

  prompts: neuro.mentionPrompts
}

const chatPrompts = {
  ...chat.base,

  prompts: mergeUnique(
    ...neuro.chatPrompts,
    ...chat.chatPrompts
  )
}

export default {
  name: 'Neuro-sama solo',
  image: 'neuro/random/neuro{x}.png',
  bait: true,
  participants: [
    regularNeuro, mentions, specificNeuro, chatPrompts
  ]
}
