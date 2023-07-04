import * as neuro from 'prompts/characters/neuro'
import * as vedal from 'prompts/characters/vedal'
import chat from 'prompts/characters/chat'

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
