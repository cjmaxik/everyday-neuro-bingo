export const base = {
  id: 'filian',
  name: 'filian',
  color: '#be01fe',

  image: 'fruitSnacks.png',

  sounds: [
    'fruitSnacks',
    'stopppp',
    'sike',
    'uuhuuh',
    'whatthefrick',
    'Rekson',
    'Imfalt'
  ].map(x => `${x}.mp3`)
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
  'VR gear bugs out',
  'breaks character',
  'hits the wall',
  'admits she\'s a fussy\xa0baby',
  'admits she\'s a furry',
  'screams very loud',
  'roleplays',
  'Gillian appears',

  // mentions
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
