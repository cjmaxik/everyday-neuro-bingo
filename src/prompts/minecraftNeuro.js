import neuro from './neuro'

export default {
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
    'no~',
    'rants',
    'what?',
    'D',
    'any kind of tech\xa0issue',
    'apologises profusely',
    'randomly indroduces herself',
    'asks existential question',
    '"flushed means blushing"',
    'asks one question on repeat',
    '3',
    'donowalls someone',
    'KEKW',
    'the other day story',
    'trauma dump',
    'consistent',
    'new clone / restarts',
    'talks about nightmares',
    'shames a viewer',

    // minecraft prompts
    'dies in lava',
    'dies from a fall\xa0damage',
    'digs straight down',
    'drowns',
    'gets killed by Vedal',
    'mines bedrock',
    'dies from hostile\xa0mob',
    'accidental Nether trip',
    'attempts to dig\xa0the\xa0sky',
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
    'mentions Swarm',

    // chat related
    'chat spams :Classic:',
    'chat spams :neuroLava:',
    'chat spams :NOOOO:',
    'chat spams :SCHIZO:',
    'chat spams SAVED'
  ]
}
