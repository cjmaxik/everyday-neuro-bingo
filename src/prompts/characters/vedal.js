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
  'good joke',
  'cringe joke',
  'tutel noises',
  'leaks something',
  'gets competitive',
  '"That\'s crazy" :Tutel:',
  '"I have no idea"',
  '"Why it doesn\'t work?"',
  '"I am stupid"',
  '"We\'ll fix it" x2',
  'checks #starboard',
  'stutters',
  'true story :Clueless:',
  'serious talk',
  'dies from laughter'
]

export const mentionPrompts = [
  'mentions anny',
  'mentions random Vtuber',
  'mentions Abandoned Archive',
  'mentions mods',
  'mentions Neurocord',
  'hbd Shiro~'
]

export const collabPrompts = [
  // neuro related
  'argues with Neuro',
  'hates Neuro',
  'loves Neuro',
  'properly responds to\xa0Neuro'
]

// chat related
export const chatPrompts = [
  'chat L\'s Vedal',
  'chat spams :vedalPls:',
  'chat spams ZERO LATENCY',
  'chat spams :ICANT:',
  'chat spams :NOTED:',
  'chat spams :notNOTED:',
  'argues with chat'
]

export default {
  ...base,

  prompts: [
    ...regularPrompts,

    ...chatPrompts
  ]
}
