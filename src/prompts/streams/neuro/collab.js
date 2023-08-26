// import { mergeUnique } from 'helpers/helpers'

import * as genericCollab from 'characters/genericCollab'
import * as neuro from 'characters/neuro'
// import * as chat from 'characters/chat'

const genericCharacter = {
  ...genericCollab.base,

  name: 'Partner',
  prompts: genericCollab.collabPrompts()
}

const neuroCollab = {
  ...neuro.base,

  prompts: neuro.collabPrompts()
}

export default {
  name: 'Neuro-sama collab',
  image: 'neuro/neuro.png',
  participants: [
    genericCharacter, neuroCollab
  ]
}
