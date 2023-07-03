import neuroBase, {
  regularPrompts as neuroPrompts,
  chatPrompts as neuroChat
} from 'prompts/characters/neuro'

import vedalBase, {
  regularPrompts as vedalPrompts,
  chatPrompts as vedalChat
} from 'prompts/characters/vedal'

const neuro = {
  ...neuroBase,
  prompts: neuroPrompts
}

const vedal = {
  ...vedalBase,
  prompts: vedalPrompts
}

const chat = {
  ...neuro,
  id: 'chat',
  name: 'Chat',
  color: '#9146FF',
  image: 'chat.png',
  prompts: [
    ...neuroChat,
    ...vedalChat
  ]
}

export default {
  name: 'Neuro and Vedal',
  image: 'vedal/vedalCorpa.png',
  participants: [
    neuro, vedal, chat
  ]
}
