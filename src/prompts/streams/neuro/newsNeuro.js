import * as neuro from 'characters/neuro'
import * as chat from 'characters/chat'
import { mergeUnique } from 'src/helpers/helpers'

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
    'informs about real events',
    'interview with Evil / Vedal',
    'Evil / Hiyori cameo'
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

  prompts: mergeUnique(
    neuro.chatPrompts,
    chat.chatPrompts
  )
}

export default {
  name: 'Breaking News Stream',
  image: 'neuro/newsNeuro.png',
  bait: true,
  participants: [
    regularNeuro, newsNeuro, specificNeuro, chatPrompts
  ]
}
