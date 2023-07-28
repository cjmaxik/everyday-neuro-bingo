import * as vedal from 'characters/vedal'
import * as chat from 'characters/chat'
import { mergeUnique } from 'src/helpers/helpers'

const vedalPrompts = {
  ...vedal.base,

  prompts: mergeUnique(
    vedal.regularPrompts,
    vedal.mentionPrompts
  )
}

const chatPrompts = {
  ...chat.base,

  prompts: mergeUnique(
    vedal.chatPrompts,
    chat.chatPrompts
  )
}

export default {
  name: 'Vedal solo',
  image: 'vedal/vedalCorpa.png',
  participants: [
    vedalPrompts, chatPrompts
  ]
}
