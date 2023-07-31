import { mergeUnique } from 'helpers/helpers'

import * as evil from 'characters/evilNeuro'
import * as vedal from 'characters/vedal'
import * as chat from 'characters/chat'
import * as genericCollab from 'characters/genericCollab'

const evilCollabPrompts = evil.collabPrompts('Vedal')
const vedalCollabPrompts = vedal.collabPrompts('Evil')
const genericCollabPrompts = genericCollab.collabPrompts('Evil')

const evilRegular = {
  ...evil.base,

  prompts: evil.regularPrompts
    .filter(x => !evilCollabPrompts.includes(x)) // removes duplicated Vedal prompts
    .filter(x => !vedalCollabPrompts.includes(x)) // removes duplicated Evil prompts
}

const evilCollab = {
  ...evil.base,

  prompts: evilCollabPrompts
    .map(x => x.replaceAll('calls Vedal Vedal', 'mispronounses Vedal\'s name'))
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

console.log(evilRegular.prompts, evilCollab.prompts)

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
