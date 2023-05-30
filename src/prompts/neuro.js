// reusable prompts file
import { allPrompts } from './neuro/allPrompts'

export default {
  id: 'neuro',
  name: 'Neuro-sama',

  // text color
  color: '#8b3f5e',

  // tally background image
  image: 'gymbag.png',

  // tally sounds, will be chosen at random
  sounds: [
    'KEKWA.mp3',
    'gymbag.mp3',
    'no.mp3',
    'meow_meow_lol.mp3',
    'heart.mp3'
  ],

  // prompts are moved to ./neuro/allPrompts.js
  prompts: allPrompts.map(x => Array.isArray(x) ? x[0] : x)
}
