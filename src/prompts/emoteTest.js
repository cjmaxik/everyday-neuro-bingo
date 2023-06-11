/**
 * Use this board to test emotes and settings
 * Available ONLY via direct link (see `prompts.js`)
 */

import neuro from './evilNeuro'

export default {
  ...neuro,

  prompts: Array.from({
    ...neuro.prompts.filter(x => x.includes(':')),
    length: 48
  })
}
