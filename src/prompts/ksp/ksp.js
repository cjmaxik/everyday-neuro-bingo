import { mergeUnique } from 'helpers/helpers'

import * as neuro from 'characters/neuro'
import * as vedal from 'characters/vedal'

import generic from 'characters/generic'
import * as chat from 'characters/chat'

const neuroKsp = {
  ...neuro.base,

  prompts: neuro.regularPrompts
}

const vedalKsp = {
  ...vedal.base,

  prompts: vedal.regularPrompts
}

const specificKsp = {
  ...generic,

  id: 'ksp',
  name: 'KSP',
  color: '#0504c2',

  image: '../vedal/ksp/kerbal.png',

  prompts: [
    'Neuro mentions Miyu',
    'Neuro says in\u2011game\xa0name',
    'Neuro wants to go to space',
    'rocket blows up on the pad',
    'The Kraken strikes',
    'game crashed / froze',
    'faulty staging',
    'fuel runs off',
    'forgot parachutes',
    'kerbonaut in open space',
    'chat spams :PANIC:',
    'chat spams :o7:',
    'chat spams :VedalSpaceProgram:'
  ]
}

const chatKsp = {
  ...chat.base,

  prompts: mergeUnique(
    neuro.chatPrompts,
    vedal.chatPrompts,
    chat.chatPrompts
  )
}

export default {
  name: 'Vedal Space Program',
  image: 'vedal/vedalSpaceProgram.png',
  participants: [
    neuroKsp, chatKsp,
    specificKsp, vedalKsp
  ]
}
