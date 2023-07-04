export const base = {
  id: 'vedal',
  name: 'Vedal',
  color: '#266941',

  image: 'tutel.png',

  sounds: [
    'meow.mp3',
    'femboy.mp3',
    'tequila.mp3',
    'ayaya.mp3'
  ]
}

export const regularPrompts = [
  '"WHAT?"',
  '"Shut up!"',
  '#ad / corpa',
  'cringe joke',
  'tutel noises',
  'leaks something',
  'gets competitive',
  'That\'s crazy :Tutel:',
  'i have no idea',
  '"why X doesn\'t work?"',
  '"I\'m stupid"',
  '"We\'ll fix it x2"',

  // neuro related
  'argues with Neuro',
  'gets hit on by Neuro',
  'hates Neuro',
  'loves Neuro',

  // mentions
  'mentions anny',
  'mentions Abandoned Archive',
  'mentions BO3 / PUBG'
]

// chat related
export const chatPrompts = [
  'chat L\'s Vedal',
  'chat spams :vedalPls:',
  'chat spams ZERO LATENCY',
  'chat spams :ICANT:',
  'argues with chat'
]

export default {
  ...base,

  prompts: [
    ...regularPrompts,

    ...chatPrompts
  ]
}
