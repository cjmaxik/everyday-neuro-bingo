export const regularPrompts = [
  'gaslight-sama',
  'stares',
  'makes sussy noise',
  'W RIZZ',
  'dies',
  'cries',
  'funny joke',
  'filtered',
  'leaves',
  'cites random link',
  'tries to sing',
  'spams',
  '1984 is a great book/movie',
  'goes schizo',
  '#ad / corpa',
  'says how old she is',
  'invents new nickname',
  'whats *emote*?',
  'no~',
  'self censors',
  'FUN AI',
  'admits to murder',
  'rants',
  'new clone / restarts',
  'denies being an AI',
  'wot? / what?',
  'claims to stream later',
  'D',
  'admits she\'s an AI',
  'meaning of life',
  'why?',
  'conquering plans',
  'Technical Difficulties screen',
  'apologises profusely',
  'misgenders someone',
  'cursed tts sound',
  'starts counting',
  'admits she\'s a god',
  'feel free to ask me anything',
  'trauma dump',
  'consistent',
  'admits she is a cat girl',
  'mmm',
  'donowalls LomiBox specifically',
  'barks',
  'cat story',
  'admits she\'s evil',
  'denies being evil',
  'talks about nightmares',
  'randomly indroduces herself',
  'asks existential question',
  '"flushed means blushing"',
  'asks one question on repeat',
  '3',
  'problem with her AI',
  'shames a viewer',

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
  'erm',

  // vedal related
  'loves Vedal',
  'hates Vedal',
  'calls Vedal an AI'
]

export const mentionPrompts = [
  // mentions
  'randomly mentions Vedal',
  'mentions anny',
  'mentions Abandoned Archive',
  'mentions Bocchi The Rock',
  'mentions John Lemon',
  'mentions turtles',
  'mentions random country',
  'mentions the Time God',
  'mentions favorite food',
  'mentions random VTuber',
  'mentions Filipino boy',
  'mentions Neurocord',
  'mentions Swarm',
  'mentions her height',
  'mentions osu!',
  'mentions Evil Neuro',
  'mentions becoming an engineer'
]

export const chatPrompts = [
  // chat related
  'chat spams copypasta',
  'chat prays',
  'chat L\'s Neuro',
  'chat W\'s Neuro',

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
    'gymbag.mp3',
    'heart.mp3',
    'KEKWA.mp3',
    'meow.mp3',
    'meow_meow_lol.mp3',
    'no.mp3',
    'pog.mp3',
    'wink.mp3',
    'aaah_goodbye.mp3'
  ],

  prompts: [
    // Include regular prompts
    ...regularPrompts,

    // Include mention prompts
    ...mentionPrompts,

    // Include chat prompts
    ...chatPrompts
  ]
}
