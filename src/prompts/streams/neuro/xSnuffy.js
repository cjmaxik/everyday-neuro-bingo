import { mergeUnique } from 'helpers/helpers'

import * as neuro from 'characters/neuro'
import * as snuffy from 'characters/snuffy'
import * as genericCollab from 'characters/genericCollab'

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
      'spends all\xa0the\xa0money',
      'nat\xa01',
      'tries to spare low\xa0hp\xa0enemy',
      'casts useless\xa0spell',
      'falls into a\xa0trap',
      'summons a\xa0demon',
      'equips useless weapon',
      'breaks character (RP fail)',
      'tries to change class mid-game',
      'tries to discard quest item'
    ],

    neuro.collabPrompts('Snuffy')
  )
}

const snuffyCollab = {
  ...snuffy.base,

  prompts: mergeUnique(
    [
      'ignores Neuro\'s\xa0choice',
      'gets backseated by\xa0Neuro',
      'forces Neuro to\xa0loot',
      'brakes character (RP fail)',
      'ignores dice\xa0outcome',
      'annoyed by Neuro\'s\xa0choice',
      'chat as the\xa0story\xa0character'
    ],

    genericCollab.collabPrompts('Neuro')
  )
}

export default {
  name: 'Adventures with Snuffy',
  image: 'snuffy/adventure.png',
  participants: [
    snuffyCollab, neuroCollab
  ]
}
