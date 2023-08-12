import * as neuro from 'characters/neuro'
import * as chat from 'characters/chat'

const newsNeuro = {
  ...neuro.base,

  id: 'newsNeuro',
  color: '#0000ff',
  name: 'News',

  prompts: [
    'weather forecast is way off',
    'apocalypse forecast',
    '69°',
    'degree Kelvin :ICANT:',
    'reasonable forecast',
    'weather in Vedaltopia',
    'weather in fictional place',
    'raining cats\xa0/\xa0animals',
    'report about Vedal',
    'report about Hiyori',
    'report about other VTubers',
    'someone is missing',
    'someone is dead',
    'report involves mods',
    'report about AI',
    '"WE ARE LIVE!"',
    'ad break',
    'traffic news',
    'radio voice',
    'informs about real events'
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
  name: 'Breaking News Stream',
  image: 'neuro/newsNeuro.png',
  participants: [
    regularNeuro, newsNeuro, specificNeuro, chatPrompts
  ]
}
