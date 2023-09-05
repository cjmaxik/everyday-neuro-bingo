import { mergeUnique } from 'helpers/helpers'

import * as neuro from 'characters/neuro'
import * as snuffy from 'characters/snuffy'
import * as genericCollab from 'characters/genericCollab'

const neuroRegular = {
  ...neuro.base,

  prompts: neuro.regularPrompts
}

const neuroCollab = {
  ...neuro.base,

  prompts: mergeUnique(
    [
      'kills civilian',
      'nat\xa020',
      'gaslights enemy',
      'gaslights civilian',
      'nearly dies in\xa0story',
      '"milk"',
      'spends all the money',
      'nat\xa01',
      '',
      '',
      '',
      '',
      ''
    ]

    // TODO: make a smaller list of generic prompts or discard them completely
    // neuro.collabPrompts('Snuffy')
  )
}

const snuffyCollab = {
  ...snuffy.base,

  prompts: mergeUnique(
    [
      'ignores Neuro\'s\xa0choice'
    ],

    // TODO: make a smaller list of generic prompts or discard them completely
    genericCollab.collabPrompts('Neuro')
  )
}

export default {
  name: 'Adventures with Snuffy',
  image: 'snuffy/adventure.png',
  participants: [
    neuroRegular, snuffyCollab,
    neuroCollab
  ]
}
