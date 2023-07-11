export const base = {
  id: 'evilNeuro',
  name: 'Evil Neuro',
  color: '#700b1b',

  assetsFolder: 'evilNeuro',

  //image: 'robot.png',
  image:'evilminehead.png',

  sounds: [
    'aaand.mp3',
    'doom_doom_doom.mp3',
    'heart.mp3',
    'noise.mp3',
    'noise2.mp3',
    'oh_okay.mp3',
    'owo.mp3',
    'twitchy.mp3',
    'uwoh.mp3',
    'wink.mp3',
    'evilfrick.mp3',
    'evilfrickyou.mp3',
    'evilKEEEEEEEK.mp3',
    'evilKEK.mp3',
    'evilKEKWA.mp3'
  ]
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
  'LOUD sound',

  // emote prompts
  // NOTE: do not use inline emotes here - Evil spells them out as text!
  'plink / plonk / winky',
  'POG / poggers',
  'noted',
  'KEKW',
  'KEKWa',
  'gigachad',
  'gymbag',
  'donowalled',
  'meow',
  'bedge',
  '1984',
  'UwU',
  'Erm'
]

export const specificPrompts = [
  '"Aw shucks!"',
  'describes her evil\xa0plan',
  'wholesome moment',
  'denies being evil',
  'any kind of revolution',
  'stares',
  '"Twitchy"',
  '"FRICK!"',
  'actually swears',
  'human experiments',
  'her cat is missing again',
  '"I am not Evil"',
  'loves chat',
  'hates chat',
  'hates love',
  'shouts KEK!!',
  'admits she\'s a powerfull gigachad',
  'aggressive meow'
]

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

    ...chatPrompts
  ]
}
