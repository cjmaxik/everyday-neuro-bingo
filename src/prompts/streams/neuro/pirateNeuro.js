import { mergeUnique } from 'src/helpers/helpers'

import * as neuro from 'characters/neuro'
import * as chat from 'characters/chat'

const piratePrompts = {
  ...neuro.base,

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
    'pirate natter nah already on the board',
    'wants booty / loot / treasure',
    'tells a pirate\xa0tale',
    'wants rum or\xa0grog',
    'names her ship\xa0"Vedal"',
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
  ...neuro.base,

  id: 'regularNeuro',
  name: 'Regular prompts',

  prompts: mergeUnique(
    neuro.regularPrompts,
    neuro.mentionPrompts
  )
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
  name: 'Neuro-sama Pirate Stream',
  image: 'neuro/pirate/DeepfriedPirateNeuro.png',
  bait: true,
  participants: [
    regularNeuro, piratePrompts, specificNeuro, chatPrompts
  ]
}
