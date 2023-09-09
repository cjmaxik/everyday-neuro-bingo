export const base = {
  id: 'vedal',
  name: 'Vedal',
  color: '#266941',

  image: 'tutel.png',

  sounds: [
    'Aww',
    'ayaya',
    'femboy',
    'fire',
    'HAA',
    'huh',
    'meow',
    'noise_01',
    'noise_03',
    'oh_mhm_yep',
    'okay',
    'sure_bro',
    'tequila',
    'ummm',
    'what',
    'yeah',
    'yep'
  ].map(x => `${x}.mp3`)
}

export const regularPrompts = [
  '"WHAT?"',
  '"Shut up!"',
  'ad / corpa',
  'good joke',
  'cringe joke',
  'tutel noises',
  'leaks something',
  'gets competitive',
  '"That\'s crazy" :Tutel:',
  '"I have no idea"',
  '"Why doesn\'t it\xa0work?"',
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

export const collabPrompts = (name = 'Neuro') => [
  'argues with {x}',
  'hates {x}',
  'loves {x}',
  'properly responds to\xa0 {x}'
].map(x => x.replaceAll('{x}', name))

// chat related
export const chatPrompts = [
  'chat L\'s Vedal',
  'chat spams ZERO LATENCY',
  'chat spams :ICANT:',
  'chat spams :NOTED:',
  'chat spams :notNOTED:'
]

export default {
  ...base,

  prompts: [
    ...regularPrompts,

    ...chatPrompts
  ]
}
