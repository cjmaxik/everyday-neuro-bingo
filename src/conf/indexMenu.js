// @ts-check
// eslint-disable-next-line no-unused-vars
import * as Types from 'helpers/types.d'

/**
 * Upcoming stream
 * @type {Types.StreamMenuData}
 */
// export const upcoming = null
export const upcoming = {
  to: 'neuro/snuffy',
  text: 'Neuro-sama adventures with Snuffy',
  color: '#161b4c',
  date: '???'
}

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
          { to: 'solo', text: 'Solo streams' }
        ]
      },

      {
        name: 'Collabs',
        entries: [
          { to: 'evil', text: 'Evil Neuro', color: '#700b1b' },
          { to: 'anny', text: 'anny', color: '#f37b97' },
          { to: 'miyu', text: 'Miyune', color: '#007caa' },
          { to: 'filian', text: 'filian', color: '#be01fe' },
          { to: 'lily', text: 'Shylily', color: '#5a69ca' },
          { to: 'numi', text: 'Numi', color: '#504778' },
          { to: 'snuffy', text: 'Snuffy', color: '#161b4c' },
          { to: 'family', text: 'Family' },
          { to: 'collab', text: 'Others', color: '#000' }
        ]
      },

      {
        name: 'Other streams',
        entries: [
          { to: 'pirate', text: 'Pirate Neuro', color: '#006994' },
          { to: 'news', text: 'Weather Report', color: '#0000ff' },
          { to: 'minecraft', text: 'Minecraft' }
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
          { to: 'neuro', text: 'Dev streams with Neuro', color: '#266941' },
          { to: 'evil', text: 'Dev streams with Evil', color: '#266941' },
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
          { to: 'solo', text: 'Solo streams', color: '#700b1b' },
          { to: 'pirate', text: 'Pirate Evil', color: '#006994' },
          { to: 'minecraft', text: 'Minecraft', color: '#700b1b' }
        ]
      },

      {
        name: 'Collabs',
        entries: [
          { to: 'filian', text: 'filian', color: '#be01fe' },
          { to: 'numi', text: 'Numi', color: '#504778' },
          { to: 'zen', text: 'Zentreya', color: '#d4233f' },
          { to: 'collab', text: 'Others', color: '#000' }
        ]
      }
    ]
  }
}
