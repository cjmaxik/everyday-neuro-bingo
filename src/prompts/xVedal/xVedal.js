import * as neuro from 'characters/neuro'
import * as vedal from 'characters/vedal'
import chat from 'characters/chat'

const neuroPrompts = {
  ...neuro.base,

  prompts: neuro.regularPrompts
}

const vedalPrompts = {
  ...vedal.base,

  prompts: vedal.regularPrompts
}

const chatPrompts = {
  ...chat,

  prompts: [
    ...neuro.chatPrompts,
    ...vedal.chatPrompts,
    ...chat.prompts
  ]
}

export default {
  name: 'Neuro and Vedal',
  image: 'vedal/vedalCorpa.png',
  participants: [
    neuroPrompts, vedalPrompts, chatPrompts
  ]
}
