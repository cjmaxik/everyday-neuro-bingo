export const base = {
  id: 'filian',
  name: 'filian',
  color: '#be01fe',

  image: 'fruitSnacks.png',

  sounds: [
    'fruitSnacks.mp3'
  ]
}

export const regularPrompts = [
  'funny joke',
  'does a flip',
  'flash bang',
  'begs Vedal for help',
  'roasts Neuro',
  'deez nuts joke',
  'drops headset',
  'gaslights Neuro',
  '"STOP!"',
  'effin dies',
  'makes strange noise',
  'W RIZZ',
  'frick',
  'barks',
  'rick rolled',
  'falls from chair',
  'camera goes crazy',
  'falls from ledge',
  'VR gear bugs out',
  'breaks characater',
  'hits the wall',

  // model related
  'bunny girl model',
  'police filian model',
  'kawaii filian model',

  // mentions
  'mentions projektmelody',
  'mentions Fruit Snacks',
  'mentions Rekson'
]

export const chatPrompts = [
  // chat related
  'chat L\'s filian',
  'chat W\'s filian',
  'chat dies of cringe'
]

export default {
  ...base,

  prompts: [
    ...regularPrompts,
    ...chatPrompts
  ]
}
