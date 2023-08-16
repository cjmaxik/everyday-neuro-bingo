import { mergeUnique } from 'helpers/helpers'

import * as neuro from 'characters/neuro'
import * as vedal from 'characters/vedal'
import * as chat from 'characters/chat'
import * as genericCollab from 'characters/genericCollab'

const collabPrompts = neuro.collabPrompts('Vedal')
const vedalCollabPrompts = vedal.collabPrompts('Neuro')
const genericCollabPrompts = genericCollab.collabPrompts('Neuro')

const neuroRegular = {
  ...neuro.base,

  prompts: neuro.regularPrompts
    .filter(x => !collabPrompts.includes(x)) // removes duplicated Vedal prompts
    .filter(x => !vedalCollabPrompts.includes(x)) // removes duplicated Neuro prompts
}

const neuroCollab = {
  ...neuro.base,

  prompts: collabPrompts
    .map(x => x.replace('calls Vedal Vedal', 'mispronounses Vedal\'s name'))
    .map(x => x.replace('wants to marry Vedal', 'demands love from Vedal'))
}

const vedalRegular = {
  ...vedal.base,

  prompts: mergeUnique(
    vedal.regularPrompts,
    vedal.mentionPrompts,
    vedalCollabPrompts,
    genericCollabPrompts
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
  image: 'vedal/random/neuroVedal{x}.png',
  participants: [
    neuroRegular, vedalRegular, chatPrompts, neuroCollab
  ]
}
