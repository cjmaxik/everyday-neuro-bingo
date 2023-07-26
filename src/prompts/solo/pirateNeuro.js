import { mergeUnique } from 'src/helpers/helpers'

import * as Neuro from 'characters/neuro'
import * as chat from 'characters/chat'

const piratePrompts = {
  ...Neuro.base,

  id: 'pirateNeuro',
  name: 'Pirate prompts',

  color: '#006994',

  prompts: [
    // pirate prompts
    'pirate song',
    '"arr!"',
    'want to find a treasure',
    'tells a pirate\xa0story',
    'wants some rum',
    'names her ship "Vedal"',
    'talks about sea creatures',
    'is afraid of storm',

    // mentions
    'mentions Jack\xa0Sparrow',
    'mentions Aqua\xa0Man',
    'mentions Black\xa0Pearl',
    'mentions parrot',
    'mentions Ocean\xa0Man',
    'mentions sea-related Vtuber',
    'mentions internet\xa0piracy'
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
  image: 'neuro/pirate/DeepfriedPirateNeuro.png',
  participants: [
    regularNeuro, specificNeuro, chatPrompts, piratePrompts
  ]
}
