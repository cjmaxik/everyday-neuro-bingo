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
    'pirate chantey',
    '"arr / yarr / gar"',
    '"ahoy!"',
    '"oi!"',
    '"Aye"',
    '"Matey"',
    '"Yo-ho-ho!"',
    'banishes someone t\'\xa0the\xa0plank',
    'any pirate talk not already on the board',
    'wants booty / loot / treasure',
    'tells a pirate\xa0tale',
    'wants rum / grog',
    'names her ship "Vedal"',
    'natters about sea creatures',
    'be afeared o\'\xa0storm',

    // mentions
    'mentions Jack\xa0Sparrow',
    'mentions Aqua\xa0Man',
    'mentions Black\xa0Pearl',
    'mentions parrot',
    'mentions Ocean\xa0Man',
    'mentions sea-related Vtuber',
    'mentions Internet piracy'
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
    regularNeuro, piratePrompts, specificNeuro, chatPrompts
  ]
}
