import { mergeUnique } from 'src/helpers/helpers'

import * as evilNeuro from 'characters/evilNeuro'
import * as chat from 'characters/chat'

const minecraftPrompts = {
  ...evilNeuro.base,

  id: 'minecraft',
  name: 'Minecraft',

  color: '#477A1E',

  prompts: [
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
    'hand-mines furnace'
  ]
}

const regularEvil = {
  ...evilNeuro.base,

  id: 'regularEvil',
  name: 'Regular prompts',

  prompts: mergeUnique(
    evilNeuro.regularPrompts,
    evilNeuro.mentionPrompts
  )
}

const specificEvil = {
  ...evilNeuro.base,

  id: 'specificNeuro',
  name: 'Specific prompts',

  prompts: evilNeuro.specificPrompts
}

const chatPrompts = {
  ...chat.base,

  prompts: mergeUnique(
    evilNeuro.chatPrompts,
    chat.chatPrompts
  )
}

export default {
  name: 'Evil plays Minecraft',
  image: 'evilNeuro/evilMinecraftChad.png',
  small: true,
  participants: [
    regularEvil, specificEvil, chatPrompts, minecraftPrompts
  ]
}
