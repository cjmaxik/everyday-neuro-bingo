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
    'gymbag',
    'heart',
    'KEKWA',
    'meow',
    'meow_meow_lol',
    'no',
    'pog',
    'wink',
    'aaah_goodbye',
    'erm',
    'ermErm',
    'yep1',
    'yep2'
  ].map(x => `${x}.mp3`)
}

// TODO: Make a better split between prompts, add more to each section

// Here goes very general prompts, which can be applied to every single stream
export const regularPrompts = [
  // classics
  'wink',
  'heart',

  'stares',
  'makes sussy\xa0noise',
  'dies',
  'cries',
  'funny joke',
  '"Filtered."',
  'leaves',
  'cites random link',
  'spams',
  'goes schizo',
  '#ad / corpa',
  'says how old she\xa0is',
  'invents new nickname',
  'no~',
  'self censors',
  'FUN AI',
  'admits to murder',
  'rants',
  'new clone / restarts',
  'denies being an\xa0AI',
  'wot? / what?',
  'claims to stream later',
  'admits she\'s an\xa0AI',
  'why?',
  'conquering plans',
  'any kind of tech\xa0issue',
  'apologises profusely',
  'misgenders someone',
  'starts counting',
  'admits she\'s a\xa0god',
  'trauma dump',
  'admits she is a\xa0cat girl',
  'mmm',
  'barks',
  'admits she\'s evil',
  'denies being evil',
  'asks existential question',
  'asks one question on repeat',
  '"There is a\xa0problem with\xa0my\xa0AI"',
  'hbd Shiro~',
  'claims her birthday is soon',

  // vedal related
  'loves Vedal',
  'hates Vedal',
  'calls Vedal an\xa0AI'
]

// Here goes prompts which only applies when Neuro is talking to the chat directly
export const specificPrompts = [
  'shames a\xa0viewer',
  '"Flushed means blushing"',
  'randomly indroduces herself',
  'talks about nightmares',
  'cat story',
  'donowalls LomiBox specifically',
  'consistent',
  'feel free to ask me anything',
  '1984 is a great book/movie',
  'cursed TTS\xa0sound',
  'D',
  '3',
  'meaning of life',
  'whats *emote*?',
  'tries to sing',
  'W RIZZ',

  // emote prompts
  // NOTE: do not use inline emotes here - Neuro spells them out as text!
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

// Any stuff Neuro can mention prompted or unprompted
export const mentionPrompts = [
  'randomly mentions Vedal',
  'mentions anny',
  'mentions Abandoned Archive',
  'mentions Bocchi The\xa0Rock',
  'mentions John\xa0Lemon',
  'mentions turtles',
  'mentions random country',
  'mentions Time\xa0God',
  'mentions favorite food',
  'mentions random VTuber',
  'mentions Filipino boy',
  'mentions Neurocord',
  'mentions Swarm',
  'mentions her\xa0height',
  'mentions osu!',
  'mentions Evil\xa0Neuro',
  'mentions becoming an engineer'
]

export const chatPrompts = [
  // chat related
  'chat spams copypasta',
  'chat prays',
  'chat L\'s\xa0Neuro',
  'chat W\'s\xa0Neuro'
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
  'keeps {x} as\xa0a pet',
  'loves {x}',
  'misgenders {x}',
  'roasts {x}',
  'shames {x}',
  'W RIZZ'
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
