import generic from 'characters/generic'

export const base = {
  ...generic
}

export const collabPrompts = (name = 'Neuro') => [
  'argues with {x}',
  'gaslights {x}',
  'loves {x}',
  'hates {x}',
  'roasts {x}',
  'shames {x}',
  'W RIZZ',
  '',
  '',
  '',
  '',
  ''
].map(x => x.replaceAll('{x}', name))
