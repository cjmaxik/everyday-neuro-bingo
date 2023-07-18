export const base = {
  id: 'numi',
  name: 'Numi',
  color: '#504778',

  image: 'noomba.png',

  sounds: [
    'bitch',
    'do_it_again',
    'IUWAHEGIUSGI',
    'meow_1',
    'meow_2',
    'meow_3',
    'meow_4',
    'meow_5',
    'meow_6',
    'meow_7',
    'meow_meow',
    'nice',
    'oh_my',
    'oh',
    'pyon_pyon_1',
    'shit',
    'woah',
    'yeah'
  ].map(x => `${x}.mp3`)
}

export const regularPrompts = [
  'screams',
  'sussy noise',
  'ask Vedal for help',
  'dies from laughter',
  'W RIZZ',
  'stutters',
  '"HUH?"',
  '"I hate it here!"',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '='
]

export const chatPrompts = [
  // chat related
  'ehh↑ heh↑ ehh↑ *SNRK*',
  '',
  '',
  '',

  // twitch meta
  ''
]

export default {
  ...base,

  prompts: [
    ...regularPrompts,

    ...chatPrompts
  ]
}
