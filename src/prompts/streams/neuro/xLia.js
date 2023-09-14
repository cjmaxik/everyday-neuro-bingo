// import { mergeUnique } from 'helpers/helpers'

import * as neuro from 'characters/neuro'
import * as lia from 'characters/lia'
import * as genericCollab from 'characters/genericCollab'

const neuroRegular = {
  ...neuro.base,

  prompts: neuro.regularPrompts
}

const neuroCollab = {
  ...neuro.base,

  prompts: neuro.collabPrompts('Lia')
}

const liaRegular = {
  ...lia.base,

  prompts: lia.regularPrompts
}

const liaCollab = {
  ...lia.base,

  prompts: genericCollab.collabPrompts('Neuro')
}

export default {
  name: 'Collab with Lia',
  image: 'lia/xLia.png',
  participants: [
    neuroRegular, liaCollab,
    neuroCollab, liaRegular
  ]
}
