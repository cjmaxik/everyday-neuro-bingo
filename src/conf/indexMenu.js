// @ts-check

/**
 * Menu structure
 */
export default {
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
          { to: 'xAnyone', text: 'Others', color: '#000' }
        ]
      },

      {
        name: 'Other streams',
        entries: [
          { to: 'piNeuro', text: 'Pirate Neuro', color: '#006994' },
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
          { to: 'ksp', text: 'Vedal Space Program', color: '#0504c2' }
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
          { to: 'miEvil', text: 'Minecraft', color: '#700b1b' },
          { to: 'xNumi', text: 'Collab with Numi', color: '#504778' }
        ]
      }
    ]
  }
}
