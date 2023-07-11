import { mergeUnique } from 'helpers/helpers'

import * as evil from 'characters/evilNeuro'

import generic from 'characters/generic'
import * as chat from 'characters/chat'

const miEvil = {
  ...evil.base,

  prompts: neuro.regularPrompts
}

const specificEvil = {
  ...generic,

  id: 'miEvil',
  name: 'miEvil',
  color: '#0504c2',

  image: '../evilNeuro/minecraft/MineEvil.png',

  prompts: [
  ]
}

const chatEvil = {
  ...chat.base,

  prompts: mergeUnique(
    evil.chatPrompts,
    chat.chatPrompts
  )
}

export default {
  name: 'Evil Plays Minecraft',
  image: 'evilNeuro/MinecraftEvil.png',
  participants: [
    miEvil, chatEvil,
    specificEvil, 
  ]
}
