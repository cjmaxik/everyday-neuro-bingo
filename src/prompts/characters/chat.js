import * as neuro from 'characters/neuro'

export const base = {
  ...neuro.base,

  id: 'chat',
  name: 'Chat',
  color: '#9146FF',
  image: 'chat.png'
}

/**
 * HOW TO USE:
 * 2. Go to https://7tv.app/emotes and search for an emote
 * 3. Copy the emote ID (random text at the end of URL) and the exact emote name
 * 4. Paste them in `emotesList.json`
 * 5. Run `npm run emotePrep` to obtain new emotes
 * 6. Use `/emoteTest` board to evaluate the result
 * Please keep the list in alphabetical order.
 *
 * STATIC EMOTE OVERRIDE:
 * - Add `_` followed by the number of the frame at the end of the emote ID.
 * - You will have to play with the numbers to choose a perfect frame number.
 */

export const chatPrompts = [
  '5neuros',
  'Aware',
  'AYAYA',
  'BASED',
  'Bedge',
  'cabbage',
  'Classic',
  'Clueless',
  'COPIUM',
  'DIESOFCRINGE',
  'Erm',
  'Evilge',
  'Flushed',
  'forsen',
  'FRICK',
  'GIGACHAD GIGANEURO',
  'hiyori',
  'HUH',
  'KEKW',
  'meow',
  'monkaTOS',
  'monkaW',
  'neuroplushsittingverycomfortablewhilesheroastsaporowithherfriends',
  'NOOOO',
  'NOTED neuroNoted',
  'notNOTED',
  'NOWAYING',
  'nuero nwero eliv',
  'ok',
  'PauseSama',
  'POG poggers',
  'reallyGunPull vedalPls',
  'RIGGED',
  'RIPBOZO',
  'SCHIZO',
  'SNIFFA',
  'SoCute',
  'Susge',
  'Tutel',
  'WAYTOODANK'
].map(x => `chat spams :${x.replaceAll(' ', ': :')}:`)

export default {
  ...base,

  prompts: [
    ...chatPrompts
  ]
}
