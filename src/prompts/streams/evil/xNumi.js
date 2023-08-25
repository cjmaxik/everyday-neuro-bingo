import { mergeUnique } from 'helpers/helpers'

import * as evil from 'characters/evilNeuro'
import * as numi from 'characters/numi'
import * as genericCollab from 'characters/genericCollab'

const evilRegular = {
  ...evil.base,

  prompts: evil.regularPrompts
}

const evilCollab = {
  ...evil.base,

  prompts: evil.collabPrompts('Numi')
}

const numiRegular = {
  ...numi.base,

  prompts: numi.regularPrompts
}

const numiCollab = {
  ...numi.base,

  prompts: mergeUnique(
    [
      'calls Evil a\xa0bitch'
    ],
    genericCollab.collabPrompts('Evil')
  )
}

export default {
  name: 'Date Night with Numi',
  image: 'numi/numi.png',
  participants: [
    evilRegular, numiCollab,
    evilCollab, numiRegular
  ]
}
