/**
 * HOW TO USE:
 * 1. Wrap the emote name in `:`, like `:KEKW:`
 * 2. Go to https://7tv.app/emotes and search for an emote
 * 3. Right-click on the smallest one and copy image URL
 *
 * Notes:
 * - Remove `_static` from the URL if found.
 * - If the emote is static, use `static: true` to indicate that.
 * - If the emote is not on 7tv, consider adding it there.
 */

const apiUrl = 'https://cdn.7tv.app/emote'

const emotes = {
  neurofumosittingverycomfortablewhilesheroastsaporowithherfriends: {
    src: '646746a7739d3ac2510924ca'
  },
  RIGGED: {
    src: '644f1ea78729e1f4d784bba8'
  },
  SCHIZO: {
    src: '61b670a76906591ea6f2005b'
  },
  monkaW: {
    src: '60aef3e4b74ea8ff797ae5ac',
    static: true
  },
  PauseSama: {
    src: '642f5401339a2c2d2e641cdf',
    static: true
  },
  aware: {
    src: '6145e8b10969108b671957ec'
  },
  Susge: {
    src: '60b0c36388e8246a4b120d7e',
    static: true
  }
}

export const generateEmote = (name, isStatic = false) => {
  const emote = emotes[name]
  if (!emote) return null

  let src = `${apiUrl}/${emote.src}/1x.webp`
  if (isStatic && !emote.static) {
    src = `${apiUrl}/${emote.src}/1x_static.png`
  }

  return src
}
