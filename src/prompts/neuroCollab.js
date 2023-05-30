// reusable prompts file
import neuro from './neuro'
import { allPrompts, partnerPrompts } from './neuro/allPrompts'

/**
 * HEADS UP!
 * This prompt file auto-generated collab-related prompts.
 * This file is intented to be used instead of `neuro.js` on collabs.
 * You should mark prompts as collab-worthy in `./neuro/allPrompts.js` file.
 */

const collabPrompts = allPrompts.filter(x => Array.isArray(x)).map(x => x[0])

export default function (partnerName) {
  return {
    id: neuro.id,
    name: neuro.name,
    color: neuro.color,
    image: neuro.image,
    sounds: neuro.sounds,

    prompts: partnerPrompts.map(x => x.replace('{x}', partnerName))
      .concat(collabPrompts)
  }
}
