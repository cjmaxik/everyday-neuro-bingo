// see `./emotesList.js` for details

import emotes from './emotesList'
const apiUrl = 'https://wsrv.nl/?url=cdn.7tv.app/emote'

/**
 * Generate an emote from the list
 * @param {String} name Emote name
 * @return {Object|null} Emote object or null
 */
export const generateEmote = (name) => {
  let emoteId = emotes[name]
  if (!emoteId) return null

  let page = -1
  if (emoteId.includes('_')) {
    const emoteWithPage = emoteId.split('_')

    emoteId = emoteWithPage[0]
    page = emoteWithPage[1]
  }

  const url = `${apiUrl}/${emoteId}/1x.webp`

  return {
    animated: `${url}&n=-1`,
    static: `${url}&page=${page}`
  }
}

/**
 * Prepare base text
 * @param {String} text Initial prompt text
 * @returns {String} Base text
 */
export const prepareBaseText = (text) => {
  return text
    // remove emote wrappers
    .replaceAll(':', '')

    // replace long emote names
    .replace('neuroplushsittingverycomfortablewhilesheroastsaporowithherfriends', 'neuroPlush with Poro')
    .replace('spams reallyGunPull vedalPls', 'shoots Vedal')
    .replace('AnnyLebronJam', 'Anny LebronJam')
}
