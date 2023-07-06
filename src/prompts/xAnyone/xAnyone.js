import { mergeUnique } from 'helpers/helpers'

import * as genericCollab from 'characters/genericCollab'
import * as neuro from 'characters/neuro'
import * as chat from 'characters/chat'

const genericCharacter = {
  ...genericCollab.base,

  prompts: genericCollab.collabPrompts
}

const neuroCollab = {
  ...neuro.base,

  prompts: neuro.collabPrompts()
}

const neuroRegular = {
  ...neuro.base,

  prompts: neuro.regularPrompts
}

const chatPrompts = {
  ...chat.base,

  prompts: mergeUnique(
    neuro.chatPrompts,
    chat.chatPrompts
  )
}

export default {
  name: 'Neuro-sama collab',
  image: 'neuro/neuro.png',
  participants: [
    genericCharacter, neuroCollab,
    chatPrompts, neuroRegular
  ]
}
