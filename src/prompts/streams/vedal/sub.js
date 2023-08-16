import { mergeUnique } from 'helpers/helpers'

import * as neuro from 'characters/neuro'
import * as vedal from 'characters/vedal'

import generic from 'characters/generic'
import * as chat from 'characters/chat'

const neuroSub = {
  ...neuro.base,

  prompts: neuro.regularPrompts
}

const vedalSub = {
  ...vedal.base,

  prompts: vedal.regularPrompts
}

const chatPrompts = [
  'chat spams :PANIC:',
  'chat spams :EZ: :Clap:',
  'chat spams :o7: :neuro7:'
]

const specificSub = {
  ...generic,

  id: 'subnautica',
  name: 'Subnautica',
  color: '#008B8B',

  image: '../vedal/tutel.png',

  prompts: [
    'roasts Vedal for dying',
    'Neuro wants to go to\xa0the\xa0sea',
    'gets killed by\xa0fish',
    'game crashed',
    'runs out of\xa0oxygen',
    'jumpscared',
    'dies of starvation',
    'dies of hydration',
    'finds a leviathan',
    'forgets where he is',
    'stuck inside a cave',
    'Neuro complains with Vedal',
    'stream lasts more than 3\xa0hours',

    ...chatPrompts
  ]
}

const chatSub = {
  ...chat.base,

  prompts: mergeUnique(
    neuro.chatPrompts,
    vedal.chatPrompts,
    chat.chatPrompts
  ).filter(x => !chatPrompts.includes(x)) // removes duplicated chat prompts
}

export default {
  name: 'Vedal plays Subnautica',
  image: 'vedal/sub.png',
  participants: [
    neuroSub, chatSub,
    specificSub, vedalSub
  ]
}
