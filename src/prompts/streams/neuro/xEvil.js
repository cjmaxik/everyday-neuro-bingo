import { mergeUnique } from 'helpers/helpers'

import * as neuro from 'characters/neuro'
import * as evil from 'characters/evilNeuro'
import * as chat from 'characters/chat'

const neuroBase = {
  ...neuro.base,

  image: 'madNeuro.png'
}

const evilBase = {
  ...evil.base,

  color: '#3d0911'
}

const neuroRegular = {
  ...neuroBase,

  prompts: neuro.regularPrompts
}

const neuroCollab = {
  ...neuroBase,

  prompts: neuro.collabPrompts('Evil')
}

const evilRegular = {
  ...evilBase,

  prompts: evil.regularPrompts
}

const evilCollab = {
  ...evilBase,

  prompts: evil.collabPrompts('Neuro')
}

const chatPrompts1 = {
  ...chat.base,

  prompts: mergeUnique(
    neuro.chatPrompts,
    evil.chatPrompts
  )
}

const chatPrompts2 = {
  ...chat.base,

  prompts: chat.chatPrompts
    .filter(x => !neuro.chatPrompts.includes(x))
    .filter(x => !evil.chatPrompts.includes(x))
}

export default {
  name: 'Neuro x Evil Neuro collab',
  image: 'neuro/neuroEvilCollab.png',
  participants: [
    evilRegular, chatPrompts1,
    evilCollab, neuroRegular,
    chatPrompts2, neuroCollab
  ]
}
