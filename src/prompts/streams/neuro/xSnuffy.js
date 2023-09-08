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
      'nearly dies in\xa0a\xa0story',
      '"milk"',
      'spends all the money',
      'nat\xa01',
      'tries to spare low\xa0hp\xa0enemy',
      'casts useless\xa0spell',
      'falls into a\xa0trap',
      'summons a\xa0demon',
      'equips useless weapon',
      'breaks character (RP fail)',
      'tries to change class mid-game',
      'tries to discard quest item',
      'tries to take nonexisting\xa0thing'
    ]
  )
}

const snuffyCollab = {
  ...snuffy.base,

  prompts: mergeUnique(
    [
      'ignores Neuro\'s\xa0choice',
      'get\'s backseated by Neuro',
      'makes Neuro loot defeated enemies',
      'brakes character (RP fail)',
      'ignores dice outcome',
      'gets annoyed by Neuro\'s\xa0choice'
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
