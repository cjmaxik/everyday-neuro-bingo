// import { mergeUnique } from 'helpers/helpers'

import * as neuro from 'characters/neuro'
import * as vedal from 'characters/vedal'
import generic from 'characters/generic'
// import * as chat from 'characters/chat'

const neuroSub = {
  ...neuro.base,

  prompts: neuro.regularPrompts
}

const vedalSub = {
  ...vedal.base,

  prompts: vedal.regularPrompts
}

const specificSub = {
  ...generic,

  id: 'subnautica',
  name: 'Subnautica',
  color: '#008B8B',

  image: '../vedal/tutel.png',

  prompts: [
    'gets killed by a\xa0fish',
    'game crashed',
    'jumpscared',
    'runs out of\xa0oxygen',
    'dies of starvation',
    'dies of dehydration',
    'finds a\xa0leviathan',
    'forgets where he\xa0is',
    'stuck inside a\xa0cave',
    'misspells in-game\xa0name',
    'stream lasts more than 3\xa0hours'
  ]
}

// const chatSub = {
//   ...chat.base,

//   prompts: mergeUnique(
//     neuro.chatPrompts,
//     vedal.chatPrompts,
//     chat.chatPrompts
//   ).filter(x => !chatPrompts.includes(x)) // removes duplicated chat prompts
// }

export default {
  name: 'Vedal plays Subnautica',
  image: 'vedal/jaws.png',
  participants: [
    neuroSub, specificSub,
    vedalSub
  ]
}
