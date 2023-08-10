import * as neuro from 'characters/neuro'
import * as chat from 'characters/chat'

const eloNeuro = {
  ...neuro.base,

  id: 'ranks',
  color: '#420069',
  name: 'Ranks',

  prompts: [
    'rank is more than 1000',
    'rank is less than 0',
    'refuses to\xa0rank',
    'eleventy hundred billion',
    'infinite rank',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]
}

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

const chatPrompts = {
  ...chat.base,

  prompts: [
    ...neuro.chatPrompts,
    ...chat.chatPrompts
  ]
}

export default {
  name: 'The Ranked Stream',
  image: 'neuro/random/neuro{x}.png',
  participants: [
    regularNeuro, eloNeuro, specificNeuro, chatPrompts
  ]
}
