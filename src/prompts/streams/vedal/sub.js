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
//  REPLACE THIS
const chatPrompts = [
  'chat spams :PANIC:',
  'chat spams :VedalSpaceProgram:',
  'chat spams :EZ: :Clap:',
  'chat spams :peepoCheer:',
  'chat spams :o7: :neuro7:'
]

const specificSub = {
  ...generic,

  id: 'subnautica',
  name: 'Subnautica',
  color: '#008B8B',

  image: '../vedal/ksp/kerbal.png',

  prompts: [
    'roasts vedal for dying',
    'Neuro wants to go to the sea',
    'gets killed by fish',
    'game crashed',
    'runs out of oxygen and dies',
    'gets jumpscared',
    'dies of starvation',
    'dies of hydration',
    'finds a leviathan',
    'forgets where he is',
    'gets stuck inside a cave',
    'Neuro complains with Vedal',
    'stream lasts more than 3 hours',

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
  name: 'Subnautica',
  // CHANGE THIS
  image: 'vedal/vedalSpaceProgram.png',
  participants: [
    neuroSub, chatSub,
    specificSub, vedalSub
  ]
}
