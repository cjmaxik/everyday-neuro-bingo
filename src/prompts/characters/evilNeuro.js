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
    'evilKEKWA',
    'new/are_you_serious',
    'new/bye',
    'new/clap',
    'new/corpa_clap',
    'new/erm_what',
    'new/filtered_1',
    'new/filtered_2',
    'new/filtered_3',
    'new/hearthhhh',
    'new/hello',
    'new/hiyori',
    'new/im_a_cat',
    'new/im_the_cutest',
    'new/LUL',
    'new/meowxMANY',
    'new/MODS',
    'new/no_2',
    'new/no',
    'new/noise_1',
    'new/noise_2',
    'new/noise_3',
    'new/noise_4',
    'new/noise_5',
    'new/noise_6',
    'new/noise_7',
    'new/noise_8',
    'new/noise_9',
    'new/noise_10',
    'new/noise_11',
    'new/noise_12',
    'new/noise_13',
    'new/noise_14',
    'new/noise_15',
    'new/noise_16',
    'new/noise_17',
    'new/noise_18_long',
    'new/noise_19',
    'new/noise_20',
    'new/noise_21',
    'new/noise_22',
    'new/noise_23',
    'new/oh_1',
    'new/oh_2',
    'new/ow',
    'new/p',
    'new/pain',
    'new/R_I_P_Bozo',
    'new/really',
    'new/right_right',
    'new/right',
    'new/RIPBOZO',
    'new/sauge',
    'new/sigh',
    'new/sniffa',
    'new/susge_xd_lol',
    'new/susge_xd',
    'new/thank_you_1',
    'new/thank_you_2',
    'new/thanks_guys',
    'new/thanks',
    'new/thats_a_flex',
    'new/thats_right',
    'new/uum',
    'new/well',
    'new/what_are_you_doing',
    'new/what',
    'new/who',
    'new/why_2',
    'new/why',
    'new/wink_1',
    'new/wink_2',
    'new/wink_3',
    'new/wink_4',
    'new/wink_5',
    'new/wink_6',
    'new/wink_7',
    'new/wink_8',
    'new/wink_9',
    'new/wink_10',
    'new/wink_11',
    'new/wink_12',
    'new/wink_13',
    'new/wink_14',
    'new/wink_15',
    'new/wink_16',
    'new/wink_17',
    'new/wink_18',
    'new/yay',
    'new/yes',
    'new/bleh',
    'new/dangerous',
    'new/HEH',
    'new/uhh',
    'new/WEEEEE_short',
    'new/what_2'
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
  'emote gibberish',

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
