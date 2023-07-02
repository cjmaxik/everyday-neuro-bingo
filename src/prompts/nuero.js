import neuro, { regularPrompts, mentionPrompts, chatPrompts } from 'prompts/neuro'

const neuroOne = {
  ...neuro,
  name: 'Neuro One',
  prompts: regularPrompts.slice(0, regularPrompts.length / 2)
}

const neuroTwo = {
  ...neuro,
  name: 'Neuro Two',
  prompts: regularPrompts.slice(regularPrompts.length / 2, regularPrompts.length)
}

const mentions = {
  ...neuro,

  id: 'mentions',
  color: '#420069',
  name: 'Neuro Mentions',

  prompts: mentionPrompts
}

const chat = {
  ...neuro,

  id: 'chat',
  name: 'Chat',
  color: '#9146FF',

  image: 'chat.png',

  prompts: chatPrompts
}

export default {
  name: 'Split board testing',
  image: 'neuro/random/neuro{x}.png',
  participants: [
    neuroOne, mentions, neuroTwo, chat
  ],
  random: true
}
