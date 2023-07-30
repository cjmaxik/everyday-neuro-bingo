export const base = {
  id: 'filian',
  name: 'filian',
  color: '#be01fe',

  image: 'fruitSnacks.png',

  sounds: [
    'fruitSnacks.mp3',
    'stopppp.mp3',
    'sike.mp3',
    'Eeee spaghetti.mp3',
    'whatthefrick.mp3',
    'Rekson.mp3',
    'Imfalt.mp3'
  ]
}

export const regularPrompts = [
  'funny joke',
  'does a flip',
  'flash bang',
  'begs Vedal for help',
  'successful roast',
  'deez nuts joke',
  'drops headset',
  'successful gaslight',
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
  'breaks character',
  'hits the wall',
  'admits she\'s a fussy\xa0baby',

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
