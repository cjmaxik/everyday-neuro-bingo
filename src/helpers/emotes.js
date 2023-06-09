/**
 * HOW TO USE:
 * 1. Wrap the emote name in `:`, like `:KEKW:`
 * 2. Go to https://7tv.app/emotes and search for an emote
 * 3. Copy the emote ID (random text at the end of URL)
 * 4. Paste the info in `emotesList.js`
 *
 * Notes:
 * - You can only add emotes at the end of the prompt
 * - If the emote is static, use `_static` at the end of ID to indicate that.
 * - If the emote is not on 7tv, consider adding it there.
 */

import emotes from './emotesList'
const apiUrl = 'https://cdn.7tv.app/emote'

/**
 * Generate an emote from the list
 * @param {String} name
 * @param {Boolean} isStatic
 */
export const generateEmote = (name) => {
  let emote = emotes[name]
  if (!emote) return null

  const staticEmote = emote.includes('_static')
  emote = emote.replace('_static', '')

  const animated = `${apiUrl}/${emote}/1x.webp`
  const Static = staticEmote ? animated : `${apiUrl}/${emote}/1x_static.webp`

  return {
    animated,
    Static
  }
}
