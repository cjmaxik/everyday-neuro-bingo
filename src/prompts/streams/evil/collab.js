import * as genericCollab from 'characters/genericCollab'
import * as evil from 'characters/evilNeuro'

const genericCharacter = {
  ...genericCollab.base,

  name: 'Partner',
  prompts: genericCollab.collabPrompts()
}

const neuroCollab = {
  ...evil.base,

  prompts: evil.collabPrompts()
}

export default {
  name: 'Evil Neuro collab',
  image: 'evilNeuro/evilStare.png',
  participants: [
    genericCharacter, neuroCollab
  ]
}
