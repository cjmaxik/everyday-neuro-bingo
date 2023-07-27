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

const chatPrompts = [
  'chat spams :PANIC:',
  'chat spams :VedalSpaceProgram:',
  'chat spams :EZ: :Clap:',
  'chat spams :peepoCheer:',
  'chat spams :o7: :neuro7:'
]

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
    'ship blows up on the pad',
    'ship blows up mid-air',
    'The Kraken strikes',
    'game crashed',
    'faulty staging',
    'fuel runs\xa0off',
    'power runs\xa0off',
    'no parachutes',
    'kerbonaut in open space',
    'Jeb returns\xa0home', // 27.07.23 stream specific prompt
    'new ship is named after Vedal',
    'Neuro refuses to give new ship a name',
    'rescue mission needs a rescue mission',
    'successful landing to other planet',
    'successful mission',
    'loads a save',
    'successfully deploys a space\xa0station',
    'boosters hit the ship after separation',
    'Neuro and Vedal repeat after each other',
    'stream lasts more that 3 hours',

    ...chatPrompts
  ]
}

const chatKsp = {
  ...chat.base,

  prompts: mergeUnique(
    neuro.chatPrompts,
    vedal.chatPrompts,
    chat.chatPrompts
  ).filter(x => !chatPrompts.includes(x)) // removes duplicated chat prompts
}

export default {
  name: 'Vedal Space Program',
  image: 'vedal/vedalSpaceProgram.png',
  participants: [
    neuroKsp, chatKsp,
    specificKsp, vedalKsp
  ]
}
