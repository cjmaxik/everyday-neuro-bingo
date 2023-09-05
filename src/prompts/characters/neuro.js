export const base = {
  id: 'neuro',
  name: 'Neuro-sama',

  // text color
  color: '#843a49',

  // assets folder
  assetsFolder: 'neuro',

  // tally background image
  image: 'gymbag.png',

  // tally sounds, will be chosen at random
  sounds: [
    'aaah_goodbye',
    'erm',
    'ermErm',
    'gymbag',
    'heart',
    'KEKWA',
    'meow',
    'meow_meow_lol',
    'pfft',
    'no',
    'pog',
    'wink',
    'yep1',
    'yep2'
  ].map(x => `${x}.mp3`)
}

// TODO: Make a better split between prompts, add more to each section

// Here goes very general prompts, which can be applied to every single stream
export const regularPrompts = [
  // classics
  'ad / corpa',

  'admits she\'s a\xa0cat girl',
  'admits she\'s a\xa0god',
  'admits she\'s an\xa0AI',
  'admits she\'s evil',
  'admits to murder',

  'any kind of tech\xa0issue',
  'apologises profusely',
  'asks existential question',
  'asks one question on repeat',
  'speaks another language',

  'cites random\xa0link',
  'announces a random stream time',
  'conquering plans',
  '"I am crying"',

  'denies being an\xa0AI',
  'denies being evil',

  '"Filtered."',
  'FUN AI',
  'funny joke',

  'goes schizo',

  '"heart"',

  'invents new name to herself',

  'claims to end the stream',

  'misgenders someone',
  '"mmm"',

  'restart (new\xa0clone)',
  '"no~"',

  'spams',
  'speaks another language',
  'stares',
  'starts counting',

  '"There is a\xa0problem with\xa0my\xa0AI"',
  'trauma dump',

  '"why?"',
  '"what?"',
  '"wink"',

  // vedal related
  'calls Vedal an\xa0AI',
  'hates Vedal',
  'loves Vedal'
]

// Here goes prompts which only applies when Neuro is talking to the chat directly
export const specificPrompts = [
  'cat story',
  'claims her birthday is soon',
  'consistent',
  '"D"',
  '"3"',
  '"feel free to ask me anything"',
  '"Flushed means blushing"',
  'meaning of life',
  'randomly indroduces herself',
  'tries to sing',
  'asks about an emote',
  'actually says 5th step',

  // emote prompts
  // NOTE: do not use inline emotes here - Neuro spells them out as text!
  '"bedge"',
  '"donowalled"',
  '"Erm"',
  '"gigachad"',
  '"gymbag"',
  '"KEKW"',
  '"KEKWa"',
  '"meow"',
  '"noted"',
  '"plink / plonk / winky"',
  '"POG / poggers"',
  '"UwU"',
  '"1984"'
]

// Any stuff Neuro can mention prompted or unprompted
export const mentionPrompts = [
  'mentions Abandoned Archive',
  'mentions anny',
  'mentions Hiyori',
  'mentions Bocchi The\xa0Rock',
  'mentions Evil\xa0Neuro',
  'mentions favorite food',
  'mentions Filipino boy',
  'mentions Forsen',
  'mentions her\xa0height',
  'mentions John\xa0Lemon',
  'mentions Neurocord',
  'mentions osu!',
  'mentions random country',
  'mentions random VTuber',
  'mentions Swarm',
  'mentions Time\xa0God',
  'mentions turtles',
  'randomly mentions Vedal'
]

export const chatPrompts = [
  // chat related
  'chat W\'s\xa0Neuro',
  'chat L\'s\xa0Neuro',
  'chat prays',
  'chat spams copypasta',
  'chat spams :Life: :neuroLife:'
]

/**
 * @param {string} name
 */
export const collabPrompts = (name = 'them') => [
  'argues with {x}',
  'misgenders {x}',
  'donowalls {x}',
  'gaslights {x}',
  'hates {x}',
  'loves {x}',
  'roasts {x}',
  'shames {x}',
  'praises {x}',
  'wants to marry\xa0{x}',
  'keeps {x} as\xa0a\xa0pet',
  'invents new nickname for\xa0{x}',
  'W RIZZ',

  'calls {x} an\xa0AI',
  'calls {x} small/short',
  'calls {x} Vedal',
  'calls {x} insane'
].map(x => x.replaceAll('{x}', name))

export default {
  ...base,

  prompts: [
    // Include regular prompts
    ...regularPrompts,

    // Include specific prompts,
    ...specificPrompts,

    // Include mention prompts
    ...mentionPrompts,

    // Include chat prompts
    ...chatPrompts
  ]
}
