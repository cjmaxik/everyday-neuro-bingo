import { mergeUnique } from 'helpers/helpers'

import * as evil from 'characters/evilNeuro'
import * as filian from 'characters/filian'
import * as chat from 'characters/chat'

const evilCollab = {
  ...evil.base,

  prompts: mergeUnique(
    'hits on filian',
    'down bad for\xa0filian',
    'forgets where she is',

    evil.collabPrompts('filian')
  )
}

const evilRegular = {
  ...evil.base,

  prompts: evil.regularPrompts
}

const filianPrompts = {
  ...filian.base,

  prompts: filian.regularPrompts
    .map(x => x.replaceAll('Neuro', 'Evil'))
}

const chatPrompts = {
  ...chat.base,

  prompts: mergeUnique(
    filian.chatPrompts,
    evil.chatPrompts,
    chat.chatPrompts
  )
}

export default {
  name: 'Evil Neuro x Filian collab',
  image: 'filian/fillypointatevilfumo.png',
  participants: [
    evilCollab, filianPrompts,
    chatPrompts, evilRegular
  ]
}
