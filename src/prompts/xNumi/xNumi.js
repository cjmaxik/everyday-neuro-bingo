import { mergeUnique } from 'helpers/helpers'

import * as evil from 'characters/evilNeuro'
import * as numi from 'characters/numi'
import * as chat from 'characters/chat'

const evilPrompts = {
  ...evil.base,

  prompts: mergeUnique(
    evil.regularPrompts,
    evil.specificPrompts,
    evil.mentionPrompts
  )
}

const numiPrompts = {
  ...numi.base,

  prompts: mergeUnique(
    numi.regularPrompts,
    numi.chatPrompts
  )
}

const chatPrompts = {
  ...chat.base,

  prompts: [
    ...evil.chatPrompts,
    ...numi.chatPrompts,
    ...chat.chatPrompts
  ]
}

export default {
  name: 'Evil Neuro x Numi collab',
  image: 'numi/numi.png',
  participants: [
    evilPrompts, numiPrompts, chatPrompts
  ]
}
