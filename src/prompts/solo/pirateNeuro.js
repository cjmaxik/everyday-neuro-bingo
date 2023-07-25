import { mergeUnique } from 'src/helpers/helpers'

import * as Neuro from 'characters/neuro'
import * as chat from 'characters/chat'

const piratePrompts = {
  ...Neuro.base,

  id: 'pirateNeuro',
  name: 'pirateNeuro',

  color: '#006994',

  prompts: [
    // pirate prompts
    'pirate song',
    '"arr!"',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    // mentions
    'mentions Jack\xa0Sparrow',
    'mentions Aqua\xa0Man',
    'mentions Black\xa0Pearl',
    'mentions parrot',
    'mentions Ocean\xa0Man'
  ]
}

const regularNeuro = {
  ...Neuro.base,

  id: 'regularNeuro',
  name: 'Regular prompts',

  prompts: mergeUnique(
    Neuro.regularPrompts,
    Neuro.mentionPrompts
  )
}

const specificNeuro = {
  ...Neuro.base,

  id: 'specificNeuro',
  name: 'Specific prompts',

  prompts: Neuro.specificPrompts
}

const chatPrompts = {
  ...chat.base,

  prompts: mergeUnique(
    Neuro.chatPrompts,
    chat.chatPrompts
  )
}

export default {
  name: 'Neuro pirate adventure',
  image: 'neuro/DeepfriedPirateNeuro.png',
  participants: [
    regularNeuro, specificNeuro, chatPrompts, piratePrompts
  ]
}
