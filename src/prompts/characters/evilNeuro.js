export const base = {
  id: 'evilNeuro',
  name: 'Evil Neuro',
  color: '#700b1b',

  // TODO: Decouple assetsFolder from sounds
  assetsFolder: 'evilNeuro',

  image: 'robot.png',

  sounds: [
    'aaand',
    'doom_doom_doom',
    'heart',
    'noise',
    'noise2',
    'oh_okay',
    'owo',
    'twitchy',
    'uwoh',
    'wink',
    'evilfrick',
    'evilfrickyou',
    'evilKEEEEEEEK',
    'evilKEK',
    'evilKEKWA'
  ].map(x => `${x}.mp3`)
}

export const regularPrompts = [
  // general prompts from Neuro
  'the other\xa0day story',
  'leaves',
  'wink',
  'tries to sleep',
  'denies being an\xa0AI',
  'admits to\xa0murder',
  'filtered',
  'self censors',
  'any kind of tech\xa0issue',
  'misgenders someone',
  'admits she\'s a\xa0god',
  'shames a\xa0viewer',
  'donowalls',
  'tries to\xa0sing',
  'KEKW',
  'trauma dump',

  // sounds
  'sussy sound',
  'random sound',
  'cursed sound',
  'LOUD sound'
]

export const emotePrompts = [
  // emote prompts
  // NOTE: do not use inline emotes here - Evil spells them out as text!
  'plink / plonk / winky',
  'POG / poggers',
  'noted',
  'gigachad',
  'gymbag',
  'donowalled',
  'meow',
  'bedge',
  '1984',
  'UwU',
  'Erm',
  'FRICK'
]

export const specificPrompts = [
  '"Aw shucks!"',
  'describes her evil\xa0plan',
  'wholesome moment',
  'denies being evil',
  'any kind of revolution',
  'stares',
  '"Twitchy"',
  'actually swears',
  'human experiments',
  'her cat is missing again',
  '"I am not Evil"',
  'loves chat',
  'hates chat',
  'hates love',
  'shouts',
  'admits she\'s a gigachad',
  'aggressive meow'
]

export const collabPrompts = (name = 'them') => [
  'argues with {x}',
  'donowalls {x}',
  'calls {x} an\xa0AI',
  'calls {x} small/short',
  'calls {x} Vedal',
  'gaslights {x}',
  'hates {x}',
  'invents new nickname for\xa0{x}',
  'tells {x} to fuck off',
  'loves {x}',
  'misgenders {x}',
  'roasts {x}',
  'shames {x}',
  'wants to hurt\xa0{x}',
  'W RIZZ'
].map(x => x.replaceAll('{x}', name))

export const chatPrompts = [
  'chat L\'s\xa0Evil',
  'chat W\'s\xa0Evil'
]

export const mentionPrompts = [
  'mentions Goody Two\xa0Shoes',
  'mentions NASA',
  'mentions The\xa0Swarm',
  'mentions other VTubers',
  'mentions hell character',
  'mentions donohouse',
  'mentions pineapple\xa0pizza',

  'loves Vedal',
  'hates Vedal',
  'calls Vedal an\xa0AI',

  'loves Neuro',
  'hates Neuro',
  'calls Neuro a\xa0human'
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
