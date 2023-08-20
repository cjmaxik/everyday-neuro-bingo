export const base = {
  id: 'evilNeuro',
  name: 'Evil Neuro',
  color: '#700b1b',

  // TODO: Decouple assetsFolder from sounds
  assetsFolder: 'evilNeuro',

  image: 'madevil.png',

  // TODO: sounds need naming fix and alphabetical order
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
  'calls {x} a\xa0bitch',
  'calls {x} an\xa0AI',
  'calls {x} small/short',
  'calls {x} Vedal',
  'calls {x} a\xa0loser',
  'calls {x} a\xa0good boy',
  'donowalls {x}',
  'gaslights {x}',
  'hates {x}',
  'invents new nickname for\xa0{x}',
  'loves {x}',
  'misgenders {x}',
  'roasts {x}',
  'shames {x}',
  'tells {x} to fuck off',
  'wants to hurt\xa0{x}',
  'Vedal catches strays',
  'W RIZZ'
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
