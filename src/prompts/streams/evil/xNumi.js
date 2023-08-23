import { mergeUnique } from 'helpers/helpers'

import * as evil from 'characters/evilNeuro'
import * as numi from 'characters/numi'
import * as chat from 'characters/chat'

const evilCollab = {
  ...evil.base,

  prompts: mergeUnique(
    'hits on Numi',
    'down bad for\xa0Numi',
    'forgets where she is',

    evil.collabPrompts('Numi')
  )
}

const evilRegular = {
  ...evil.base,

  prompts: evil.regularPrompts
}

const numiPrompts = {
  ...numi.base,

  prompts: mergeUnique(
    [
      'W RIZZ',
      'argues with Evil',
      'tries to correct Evil'
    ],

    numi.regularPrompts
  )
}

const chatPrompts = {
  ...chat.base,

  prompts: mergeUnique(
    numi.chatPrompts,
    evil.chatPrompts,
    chat.chatPrompts
  )
}

export default {
  name: 'Evil Neuro x Numi collab',
  image: 'numi/numi.png',
  participants: [
    evilCollab, numiPrompts,
    chatPrompts, evilRegular
  ]
}
