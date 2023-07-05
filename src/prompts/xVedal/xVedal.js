import { mergeUnique } from 'helpers/helpers'

import * as neuro from 'characters/neuro'
import * as vedal from 'characters/vedal'
import * as chat from 'characters/chat'

const neuroPrompts = {
  ...neuro.base,

  prompts: neuro.regularPrompts
}

const vedalPrompts = {
  ...vedal.base,

  prompts: vedal.regularPrompts
}

const chatPrompts = {
  ...chat.base,

  prompts: mergeUnique(
    neuro.chatPrompts,
    vedal.chatPrompts,
    chat.chatPrompts
  )
}

export default {
  name: 'Neuro and Vedal',
  image: 'vedal/vedalCorpa.png',
  participants: [
    neuroPrompts, vedalPrompts, chatPrompts
  ]
}
