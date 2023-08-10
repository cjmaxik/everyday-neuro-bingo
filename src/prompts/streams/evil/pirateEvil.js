import { mergeUnique } from 'src/helpers/helpers'

import * as evil from 'characters/evilNeuro'
import * as chat from 'characters/chat'

const piratePrompts = {
  ...evil.base,

  id: 'pirateNeuro',
  name: 'Pirate prompts',

  color: '#006994',

  prompts: [
    '"erf"',
    '"ahoy!"',
    '"oi!"',
    '"aye"',
    '"matey"',
    '"yo-ho-ho!"',
    '"mewl!"',
    '"landlubber"',
    '"scallywag"',
    '"me hearties"',
    '"filtered by me own hand"',
    'TTS shouts "AHOY!"',
    'repeats "arr" multiple times',

    'banishes random VTuber t\'\xa0the\xa0plank',
    'banishes Vedal or anny t\'\xa0the\xa0plank',
    'wants booty / loot / treasure',
    'tells a pirate\xa0tale',
    'wants rum or\xa0grog',
    'ship is called \xa0"Vedal"',
    'ship is called \xa0"SS Neuron-sama"',
    'natters about sea creatures',
    'calls Vedal the cap\'n',
    'be afeared o\'\xa0storm',

    // mentions
    'mentions Jack\xa0Sparrow',
    'mentions Aqua\xa0Man',
    'mentions Black\xa0Pearl',
    'mentions parrot',
    'mentions Ocean\xa0Man',
    'mentions sea-related Vtuber',
    'mentions Internet piracy',
    'mentions Davy\xa0Jones'
  ]
}

const regularNeuro = {
  ...evil.base,

  id: 'regularNeuro',
  name: 'Regular prompts',

  prompts: mergeUnique(
    evil.regularPrompts,
    evil.mentionPrompts
  )
}

const specificNeuro = {
  ...evil.base,

  id: 'specificNeuro',
  name: 'Specific prompts',

  prompts: evil.specificPrompts
}

const chatPrompts = {
  ...chat.base,

  prompts: mergeUnique(
    [
      'chat spams :erf:',
      'chat spams :1984: :1684:'
    ],
    evil.chatPrompts,
    chat.chatPrompts
  )
}

console.log(chatPrompts)

export default {
  name: 'Evil Pirate Stream',
  image: 'neuro/pirate/DeepfriedPirateNeuro.png',
  participants: [
    regularNeuro, piratePrompts, specificNeuro, chatPrompts
  ]
}
