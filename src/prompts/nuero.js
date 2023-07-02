import neuro, {
  regularPrompts,
  specificPrompts,
  mentionPrompts,
  chatPrompts
} from 'prompts/neuro'

const regularNeuro = {
  ...neuro,

  id: 'regularNeuro',
  name: 'Neuro Regular',

  prompts: regularPrompts
}

const specificNeuro = {
  ...neuro,

  id: 'specificNeuro',
  name: 'Neuro Specific',

  prompts: specificPrompts
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
  name: 'More Random Neuro',
  image: 'neuro/random/neuro{x}.png',
  participants: [
    regularNeuro, mentions, specificNeuro, chat
  ],
  random: true
}
