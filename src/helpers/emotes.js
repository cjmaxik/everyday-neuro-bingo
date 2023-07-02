// see `./emotes.md` for details

import emotes from './emotesList.json'
const assetsURL = '/assets/images/emotes/'

/**
 * @typedef Emote Emote object with URLs
 * @type {Object}
 * @property {string} name Emote name
 * @property {Object} src URLs
 * @property {string} src.animated Animated emote URL
 * @property {string} src.static Static emote URL
 */

/**
 * Generate an emote object with URLs from the list
 * @param {string} name Emote name
 * @returns {(Emote|null)} Emote object or null
 */
export const generateEmote = (name) => {
  const emoteId = emotes[name]
  if (!emoteId) return null

  return {
    name,
    src: {
      animated: `${assetsURL}/${name}_a.webp`,
      static: `${assetsURL}/${name}_s.webp`
    }
  }
}

/**
 * Prepare base text
 * @param {string} text Initial prompt text
 * @returns {string} Base text
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
