// @ts-check

// Main block, always visible
const rootBlock = [
  { to: 'piNeuro', text: 'Neuro Pirate', color: '#006994' },
  { to: 'neuro', text: 'Neuro-sama solo' },
  { to: 'evil', text: 'Evil Neuro solo', color: '#700b1b' },
  { to: 'xVedal', text: 'Streams with Vedal', color: '#266941' }
]

const gamesBlock = [
  { to: 'miNeuro', text: 'Neuro Minecraft' },
  { to: 'miEvil', text: 'Evil Minecraft', color: '#700b1b' },
  { to: 'ksp', text: 'Vedal KSP', color: '#0504c2' }
]

const collabBlock = [
  { to: 'xEvil', text: 'Evil Neuro', color: '#700b1b' },
  { to: 'xAnny', text: 'anny', color: '#f37b97' },
  { to: 'xMiyune', text: 'Miyune', color: '#007caa' },
  { to: 'xFilian', text: 'filian', color: '#be01fe' },
  { to: 'xShylily', text: 'Shylily', color: '#5a69ca' },
  { to: 'xNumi', text: 'Numi', color: '#504778' },
  { to: 'family', text: 'Family' },
  { to: 'xAnyone', text: 'Others', color: '#000' }
]

const othersBlock = [
  { to: 'vedal', text: 'Vedal solo', color: '#266941' }
]

/**
 * Menu structure
 */

// Highlighted option
export const featured = 'piNeuro'

// Menu
export const indexMenu = [
  {
    name: null,
    entries: rootBlock
  },
  {
    name: 'Games',
    entries: gamesBlock
  },
  {
    name: 'Collabs',
    entries: collabBlock
  },
  {
    name: 'Other streams',
    entries: othersBlock
  }
]
