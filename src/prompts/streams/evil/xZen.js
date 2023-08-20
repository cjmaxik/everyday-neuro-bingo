import { mergeUnique } from 'helpers/helpers'

import * as evil from 'characters/evilNeuro'
import * as zentreya from 'characters/zentreya'
import * as chat from 'characters/chat'

const evilCollab = {
  ...evil.base,

  prompts: mergeUnique(
    'hits on Zen',
    'down bad for\xa0Zen',
    'forgets where she is',
    'makes Zen her kitchen utencil',
    'makes Zen cookies',
    'calls Zen fat',

    evil.collabPrompts('Zen')
  )
}

const evilRegular = {
  ...evil.base,

  prompts: evil.regularPrompts
}

const zenPrompts = {
  ...zentreya.base,

  prompts: zentreya.regularPrompts
    .map(x => x.replaceAll('Neuro', 'Evil'))
}

const chatPrompts = {
  ...chat.base,

  prompts: mergeUnique(
    zentreya.chatPrompts,
    evil.chatPrompts,
    chat.chatPrompts
  )
}

export default {
  name: 'Evil Neuro x Zentreya collab',
  image: 'zentreya/xZen.png',
  participants: [
    evilCollab, zenPrompts,
    chatPrompts, evilRegular
  ]
}
