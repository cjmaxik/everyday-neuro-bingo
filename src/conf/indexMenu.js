// @ts-check
// eslint-disable-next-line no-unused-vars
import * as Types from 'helpers/types.d'

/**
 * Upcoming stream
 * @type {Types.StreamMenuData}
 */
export const upcoming = null
// export const upcoming = {
//   to: '',
//   text: '',
//   color: '',
//   date: ', 7PM BST / 8PM UTC'
// }

/**
 * Menu structure
 * @type {Types.IndexMenu}
 */
export const indexMenu = {
  neuro: {
    id: 'neuro',
    characterName: 'Neuro-sama',
    streams: [
      {
        name: null,
        entries: [
          { to: 'neuro', text: 'Solo streams' }
        ]
      },

      {
        name: 'Collabs',
        entries: [
          { to: 'xEvil', text: 'Evil Neuro', color: '#700b1b' },
          { to: 'xAnny', text: 'anny', color: '#f37b97' },
          { to: 'xMiyune', text: 'Miyune', color: '#007caa' },
          { to: 'xFilian', text: 'filian', color: '#be01fe' },
          { to: 'xShylily', text: 'Shylily', color: '#5a69ca' },
          { to: 'family', text: 'Family' },
          { to: 'collab', text: 'Others', color: '#000' }
        ]
      },

      {
        name: 'Other streams',
        entries: [
          { to: 'piNeuro', text: 'Pirate Neuro', color: '#006994' },
          { to: 'newsNeuro', text: 'Weather Report', color: '#0000ff' },
          { to: 'miNeuro', text: 'Minecraft' }
        ]
      }
    ]
  },

  vedal: {
    id: 'vedal',
    characterName: 'Vedal',
    streams: [
      {
        name: null,
        entries: [
          { to: 'dev', text: 'Dev streams with Neuro', color: '#266941' },
          { to: 'devEvil', text: 'Dev streams with Evil Neuro', color: '#266941' },
          { to: 'ksp', text: 'Vedal Space Program', color: '#0504c2' },
          { to: 'sub', text: 'Subnautica', color: '#008B8B' }
        ]
      }
    ]
  },

  evil: {
    id: 'evil',
    characterName: 'Evil Neuro',
    streams: [
      {
        name: null,
        entries: [
          { to: 'evil', text: 'Solo streams', color: '#700b1b' },
          { to: 'piEvil', text: 'Pirate Evil', color: '#006994' },
          { to: 'miEvil', text: 'Minecraft', color: '#700b1b' },
          { to: 'evilXfilian', text: 'Collab with filian', color: '#be01fe' },
          { to: 'xNumi', text: 'Collab with Numi', color: '#504778' }
        ]
      }
    ]
  }
}
