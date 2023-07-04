import * as neuro from 'characters/neuro'
import * as vedal from 'characters/vedal'

import generic from 'characters/generic'
import chatBase from 'characters/chat'

const neuroKsp = {
  ...neuro.base,

  prompts: neuro.regularPrompts
}

const vedalKsp = {
  ...vedal.base,

  prompts: vedal.regularPrompts
}

const ksp = {
  ...generic,

  id: 'ksp',
  name: 'KSP',
  color: '#0504c2',

  prompts: [
    'Neuro mentions Miyu',
    'Neuro says in\u2011game\xa0name',
    'Neuro wants to go to space',
    'rocket blows up on the pad',
    'rocket blows up in mid-air',
    'game crashed / froze',
    'faulty staging',
    'fuel runs off',
    'forgot parachutes',
    'kerbonaut in open space',
    'chat spams :PANIC:',
    'chat spams :o7:'
  ]
}

const chat = {
  ...chatBase,

  prompts: [
    ...chatBase.prompts,
    ...neuro.chatPrompts,
    ...vedal.chatPrompts
  ]
}

export default {
  name: 'Vedal Space Program',
  image: 'vedal/vedalSpaceProgram.png',
  participants: [
    neuroKsp, chat,
    ksp, vedalKsp
  ]
}
