import { mergeUnique } from 'helpers/helpers'

import * as neuro from 'characters/neuro'
import * as vedal from 'characters/vedal'
import * as chat from 'characters/chat'
import * as genericCollab from 'characters/genericCollab'

const neuroRegular = {
  ...neuro.base,

  prompts: neuro.regularPrompts
}

const neuroCollab = {
  ...neuro.base,

  prompts: neuro.collabPrompts('Vedal')
    .map(x => x.replace('Vedal Vedal', 'Vedal Veedal/Vidal/ etc.'))
}

const vedalRegular = {
  ...vedal.base,

  prompts: mergeUnique(
    vedal.regularPrompts,
    vedal.mentionPrompts,
    vedal.collabPrompts,
    genericCollab.collabPrompts
  )
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
    neuroRegular, vedalRegular, chatPrompts, neuroCollab
  ]
}
