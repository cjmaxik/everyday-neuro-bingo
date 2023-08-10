import * as neuro from 'characters/neuro'
import * as chat from 'characters/chat'

const weatherNeuro = {
  ...neuro.base,

  id: 'weatherNeuro',
  color: '#0000ff',
  name: 'Weather reports',

  prompts: [
    'too cold where it shouldn\'t be',
    'too warm where it shouldn\'t be',
    'apocalypse forecast',
    '69°',
    'degree Celsius',
    'degree Fahrenheit',
    'degree Kelvin',
    'weather is unknown',
    'reasonable forecast',
    'weather in Vedaltopia',
    'weather in fictional place',
    'raining cats\xa0/\xa0dogs'
  ]
}

const regularNeuro = {
  ...neuro.base,

  id: 'regularNeuro',
  name: 'Regular prompts',

  prompts: neuro.regularPrompts
}

const specificNeuro = {
  ...neuro.base,

  id: 'specificNeuro',
  name: 'Specific prompts',

  prompts: neuro.specificPrompts
}

const chatPrompts = {
  ...chat.base,

  prompts: [
    ...neuro.chatPrompts,
    ...chat.chatPrompts
  ]
}

export default {
  name: 'Weather Report Stream',
  image: 'neuro/random/neuro{x}.png',
  participants: [
    regularNeuro, weatherNeuro, specificNeuro, chatPrompts
  ]
}
