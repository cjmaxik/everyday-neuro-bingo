import sounds from 'characters/sounds/evilNeuro'

export const base = {
  id: 'evilNeuro',
  name: 'Evil Neuro',
  color: '#700b1b',

  assetsFolder: 'evilNeuro',

  image: 'madevil.png',

  sounds
}

export const regularPrompts = [
  // general prompts from Neuro
  'admits she\'s a\xa0god',
  'admits to\xa0murder',
  'any kind of tech\xa0issue',
  'denies being an\xa0AI',
  'donowalls',
  '"filtered"',
  'leaves',
  'misgenders someone',
  'the other\xa0day story',
  'trauma dump',
  'tries to\xa0sing',
  'tries to sleep',
  '"wink"',

  // sounds
  'cursed sound',
  'LOUD sound',
  'random sound'
]

export const emotePrompts = [
  // emote prompts
  // NOTE: do not use inline emotes here - Evil spells them out as text!
  '"bedge"',
  '"donowalled"',
  '"Erm"',
  '"FRICK"',
  '"gigachad"',
  '"gymbag"',
  '"KEKW"',
  '"meow"',
  '"noted"',
  '"plink / plonk / winky"',
  '"POG / poggers"',
  '"UwU"',
  '"1984"'
]

export const specificPrompts = [
  'actually swears',
  'aggressive meow',
  'any kind of revolution',
  '"Aw shucks!"',
  'denies being evil',
  'describes her evil\xa0plan',
  'wholesome moment',
  'hates chat',
  'hates love',
  'her cat is missing again',
  'human experiments',
  '"I am not Evil"',
  'loves chat',
  'shouts',
  'stares',
  '"Twitchy"',
  'actually says 5th step',
  'shames a\xa0viewer',
  'emote gibberish'
]

export const collabPrompts = (name = 'them') => [
  'argues with {x}',
  'donowalls {x}',
  'gaslights {x}',
  'hates {x}',
  'loves {x}',
  'misgenders {x}',
  'roasts {x}',
  'shames {x}',
  'tells {x} to fuck off',
  'wants to hurt\xa0{x}',
  'Vedal catches\xa0strays',
  'invents new nickname for\xa0{x}',
  'W RIZZ',

  'calls {x} a\xa0bitch',
  'calls {x} an\xa0AI',
  'calls {x} small/short',
  'calls {x} Vedal',
  'calls {x} a\xa0loser',
  'calls {x} a\xa0good boy/girl'
].map(x => x.replaceAll('{x}', name))

export const chatPrompts = [
  'chat W\'s\xa0Evil',
  'chat L\'s\xa0Evil',
  'chat spams :FRICK:',
  'chat spams :MEGALUL:',
  'chat spams :RAGEY:',
  'chat spams :neuroNuke:'
]

export const mentionPrompts = [
  'mentions Goody Two\xa0Shoes',
  'mentions hell character',
  'mentions other VTubers',
  'mentions pineapple\xa0pizza',
  'mentions The\xa0Swarm',

  // Vedal
  'calls Vedal an\xa0AI',
  'hates Vedal',
  'loves Vedal',

  // Neuro
  'calls Neuro a\xa0human',
  'hates Neuro',
  'loves Neuro'
]

export default {
  ...base,

  prompts: [
    ...regularPrompts,

    ...specificPrompts,

    ...mentionPrompts,

    ...emotePrompts,

    ...chatPrompts
  ]
}
