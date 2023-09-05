export const base = {
  id: 'snuffy',
  name: 'Snuffy',
  color: '#161b4c',

  image: 'snuffle.png',

  sounds: [
    ''
  ].map(x => `${x}.mp3`)
}

export const regularPrompts = [
  '',
  '',
  '',
  '',
  '',
  ''
]

export default {
  ...base,

  prompts: [
    ...regularPrompts
  ]
}
