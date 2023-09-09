import generic from 'characters/generic'

export const base = {
  ...generic
}

/**
 * @param {string} name
 */
export const collabPrompts = (name = 'Neuro') => [
  'dies from laughter',
  'funny joke',
  'cringe joke',
  'sussy noise',
  'meow~',

  'praises {x}',
  'argues with {x}',
  'gaslights {x}',
  'loves {x}',
  'hates {x}',
  'roasts {x}',
  'W RIZZ'
].map(x => x.replaceAll('{x}', name))
