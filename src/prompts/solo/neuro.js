import * as neuro from 'characters/neuro'
import chatBase from 'characters/chat'

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

const chat = {
  ...chatBase,

  prompts: [
    ...neuro.chatPrompts,
    ...chatBase.prompts
  ]
}

export default {
  name: 'Neuro-sama solo',
  image: 'neuro/random/neuro{x}.png',
  participants: [
    regularNeuro, mentions, specificNeuro, chat
  ]
}
