import { mergeUnique } from 'helpers/helpers'

import * as evil from 'characters/evilNeuro'
import * as vedal from 'characters/vedal'
import * as chat from 'characters/chat'
import * as genericCollab from 'characters/genericCollab'

const collabPrompts = evil.collabPrompts('Vedal')

const evilRegular = {
  ...evil.base,

  prompts: evil.regularPrompts
    .filter(x => !collabPrompts.includes(x)) // removes duplicated Vedal prompts
}

const evilCollab = {
  ...evil.base,

  prompts: collabPrompts
    .map(x => x.replace('calls Vedal Vedal', 'mispronounses Vedal\'s name'))
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
    evil.chatPrompts,
    vedal.chatPrompts,
    chat.chatPrompts
  )
}

export default {
  name: 'Evil and Vedal',
  image: 'vedal/neuroEvil.png',
  participants: [
    evilRegular, vedalRegular, chatPrompts, evilCollab
  ]
}
