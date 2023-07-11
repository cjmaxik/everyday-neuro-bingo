import { mergeUnique } from 'src/helpers/helpers'

import * as evilNeuro from 'characters/evilNeuro'
import * as chat from 'characters/chat'

const regularEvil = {
  ...evilNeuro.base,

  id: 'regularEvil',
  name: 'Regular prompts',

  prompts: evilNeuro.regularPrompts
}

const specificEvil = {
  ...evilNeuro.base,

  id: 'specificNeuro',
  name: 'Specific prompts',

  prompts: evilNeuro.specificPrompts
}

const mentionPrompts = {
  ...evilNeuro.base,

  id: 'mentions',
  color: '#420069',
  name: 'Mentions',

  prompts: evilNeuro.mentionPrompts
}

const chatPrompts = {
  ...chat.base,

  prompts: mergeUnique(
    evilNeuro.chatPrompts,
    chat.chatPrompts
  )
}

export default {
  name: 'Evil plays Minecraft',
  image: 'evilNeuro/evilMinecraftChad.png',
  participants: [
    regularEvil, mentionPrompts, specificEvil, chatPrompts
  ]
}
