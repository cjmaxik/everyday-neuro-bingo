// import { mergeUnique } from 'helpers/helpers'

import * as neuro from 'characters/neuro'
import * as snuffy from 'characters/snuffy'
import * as genericCollab from 'characters/genericCollab'

const neuroRegular = {
  ...neuro.base,

  prompts: neuro.regularPrompts
}

const neuroCollab = {
  ...neuro.base,

  prompts: neuro.collabPrompts('Snuffy')
}

const snuffyRegular = {
  ...snuffy.base,

  prompts: snuffy.regularPrompts
}

const snuffyCollab = {
  ...snuffy.base,

  prompts: genericCollab.collabPrompts('Neuro')
}

export default {
  name: 'Adventures with Snuffy',
  image: 'snuffy/adventure.png',
  participants: [
    neuroRegular, snuffyCollab,
    neuroCollab, snuffyRegular
  ]
}
