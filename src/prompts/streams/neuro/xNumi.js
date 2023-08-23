import { mergeUnique } from 'helpers/helpers'

import * as neuro from 'characters/neuro'
import * as numi from 'characters/numi'
import * as genericCollab from 'characters/genericCollab'

const neuroCollab = {
  ...neuro.base,

  prompts: neuro.collabPrompts('Numi')
}

const numiPrompts = {
  ...numi.base,

  prompts: mergeUnique(
    numi.regularPrompts,
    genericCollab.collabPrompts('Neuro')
  )
}

export default {
  name: 'Date night with Numi',
  image: 'numi/numi.png',
  small: true,
  participants: [
    neuroCollab, numiPrompts
  ]
}
