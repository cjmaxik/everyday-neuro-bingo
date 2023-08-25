// import { mergeUnique } from 'helpers/helpers'

import * as neuro from 'characters/neuro'
import * as numi from 'characters/numi'
import * as genericCollab from 'characters/genericCollab'

const neuroRegular = {
  ...neuro.base,

  prompts: neuro.regularPrompts
}

const neuroCollab = {
  ...neuro.base,

  prompts: neuro.collabPrompts('Numi')
}

const numiRegular = {
  ...numi.base,

  prompts: numi.regularPrompts
}

const numiCollab = {
  ...numi.base,

  prompts: genericCollab.collabPrompts('Neuro')
}

export default {
  name: 'Date Night with Numi',
  image: 'numi/neuroNumi.png',
  participants: [
    neuroRegular, numiCollab,
    neuroCollab, numiRegular
  ]
}
