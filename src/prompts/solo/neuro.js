import * as neuro from 'prompts/characters/neuro'
import chatBase from 'prompts/characters/chat'

const regularNeuro = {
  ...neuro.base,

  id: 'regularNeuro',
  name: 'Neuro Regular',

  prompts: neuro.regularPrompts
}

const specificNeuro = {
  ...neuro.base,

  id: 'specificNeuro',
  name: 'Neuro Specific',

  prompts: neuro.specificPrompts
}

const mentions = {
  ...neuro.base,

  id: 'mentions',
  color: '#420069',
  name: 'Neuro Mentions',

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
