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

// should NOT contain any generic collab prompts
export const regularPrompts = [
  'screams',
  'stutters',
  '"HUH?"',
  '"I hate it here!"',
  '"so cute"',
  'lewd joke',
  'speechless',

  'mentions the Baseball\xa0Bat Incident',
  'mentions random VTuber'
]

export const chatPrompts = [
  'chat spams :BOOBA:',
  'chat spams ehh↑ heh↑ ehh↑ *SNRK*'
]
