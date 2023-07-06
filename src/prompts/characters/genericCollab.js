import generic from 'characters/generic'

export const base = {
  ...generic
}

export const collabPrompts = (name = 'Neuro') => [
  'argues with {x}',
  'gaslights {x}',
  'hates {x}',
  'loves {x}',
  'misgenders {x}',
  'roasts {x}',
  'shames {x}',
  'W RIZZ',
  '',
  '',
  '',
  ''
].map(x => x.replaceAll('{x}', name))
