// TODO: Make a better split between prompts, add more to each section

// Here goes very general prompts, which can be applied to every single stream
export const regularPrompts = [
  'stares',
  'makes sussy\xa0noise',
  'W RIZZ',
  'dies',
  'cries',
  'funny joke',
  '"Filtered."',
  'leaves',
  'cites random link',
  'tries to sing',
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
  'problem with her\xa0AI',

  // emote prompts
  // NOTE: do not use inline emotes here - Neuro spells them out as text!
  'wink',
  'plink / plonk / winky',
  'POG / poggers',
  'noted',
  'KEKW',
  'KEKWa',
  'gigachad',
  'heart',
  'gymbag',
  'donowalled',
  'meow',
  'bedge',
  '1984',
  'UwU',
  'Erm',

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
  'whats *emote*?'
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
  'chat W\'s\xa0Neuro',

  // chat related emotes spams
  // please keep the list in alphabetical order
  'chat spams :5neuros:',
  'chat spams :Aware:',
  'chat spams :AYAYA:',
  'chat spams :Bedge:',
  'chat spams :cabbage:',
  'chat spams :Classic:',
  'chat spams :Clueless:',
  'chat spams :Erm:',
  'chat spams :Flushed:',
  'chat spams :GIGACHAD: :GIGANEURO:',
  'chat spams :hiyori:',
  'chat spams :HUH:',
  'chat spams :KEKW:',
  'chat spams :meow:',
  'chat spams :monkaTOS:',
  'chat spams :monkaW:',
  'chat spams :neuroplushsittingverycomfortablewhilesheroastsaporowithherfriends:',
  'chat spams :NOOOO:',
  'chat spams :NOWAYING:',
  'chat spams :nuero: :nwero: :eliv:',
  'chat spams :ok:',
  'chat spams :PauseSama:',
  'chat spams :POG: :poggers:',
  'chat spams :reallyGunPull: :vedalPls:',
  'chat spams :RIGGED:',
  'chat spams :RIPBOZO:',
  'chat spams :SCHIZO:',
  'chat spams :SNIFFA:',
  'chat spams :SoCute:',
  'chat spams :Susge:',
  'chat spams :Tutel:',
  'chat spams :WAYTOODANK:',

  // twitch meta
  'raiding / raided by anny'
]

export default {
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
    'ermErm'
  ].map(x => `${x}.mp3`),

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
