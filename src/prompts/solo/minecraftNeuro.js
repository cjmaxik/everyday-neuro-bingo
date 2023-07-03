import neuro from 'prompts/characters/neuro'

const minecraftNeuro = {
  ...neuro,

  assetsFolder: 'neuro/minecraft',

  image: 'minehead.png',

  sounds: [
    'bedrockismineable.mp3',
    'diggingisfun.mp3',
    'fallingintolava.mp3',
    'minecraftisfun.mp3'
  ],

  prompts: [
    // general prompts from Neuro
    'funny joke',
    'Filtered.',
    'spams',
    'goes schizo',
    '#ad / corpa',
    'what is *emote*?',
    'No~',
    'rants',
    'What?',
    'D',
    'any kind of tech\xa0issue',
    'apologises profusely',
    'randomly indroduces herself',
    'asks existential question',
    '"Flushed means blushing"',
    'asks one question on\xa0repeat',
    '3',
    'donowalls someone',
    'KEKW',
    'the other day story',
    'trauma dump',
    'consistent',
    'new clone / restarts',
    'talks about nightmares',
    'shames a\xa0viewer',

    // minecraft prompts
    'dies in lava',
    'dies from fall\xa0damage',
    'digs straight down',
    'drowns',
    'gets killed by\xa0Vedal',
    'mines bedrock',
    'dies from hostile\xa0mob',
    'accidental Nether trip',
    'punches air',
    'throws away rare item',
    'Minecraft lags',

    // hand-minable stuff
    'hand-mines obsidian',
    'hand-mines diamond ore',
    'hand-mines gold ore',
    'hand-mines furnace',

    // mentions
    'randomly mentions Vedal',
    'mentions random VTuber',
    'mentions The\xa0Swarm',

    // chat related
    'chat spams :Classic:',
    'chat spams :neuroLava:',
    'chat spams :NOOOO:',
    'chat spams :SCHIZO:',
    'chat spams SAVED'
  ]
}

export default {
  name: 'Neuro-sama plays Minecraft',
  image: 'neuro/minecraft/neuroLava.png',
  participants: [
    minecraftNeuro
  ]
}
