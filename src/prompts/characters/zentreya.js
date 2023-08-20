export const base = {
  id: 'zentreya',
  name: 'Zentreya',
  color: '#d4233f',

  image: 'gecko.png',

  sounds: [
    'chill_out',
    'huh',
    'its_fine',
    'listen',
    'oh_boy',
    'okay',
    'that',
    'we_dont'
  ].map(x => `${x}.mp3`)
}

export const regularPrompts = [
  // generic prompts
  'dies from laughter',
  'funny joke',
  'cringe joke',
  'sussy noise',
  'meow~',

  // Neuro-related
  'praises Neuro',
  'argues with Neuro',
  'gaslights Neuro',
  'loves Neuro',
  'hates Neuro',
  'roasts Neuro',
  'shames Neuro',
  'W RIZZ'
]

export const chatPrompts = [
  // chat related
  'chat L\'s Zen',
  'chat W\'s Zen',
  'chat dies of cringe'
]

export default {
  ...base,

  prompts: [
    ...regularPrompts,
    ...chatPrompts
  ]
}
