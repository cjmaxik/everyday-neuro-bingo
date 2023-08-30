// @ts-check

/**
 * 1. The object key is the route path
 * 2. Add the route to ./indexMenu.js
 */

export default {
  /**
   * Neuro-sama
   */
  neuro: {
    // Solo
    solo: () => import('streams/neuro/solo'),
    minecraft: () => import('streams/neuro/minecraftNeuro'),
    pirate: () => import('streams/neuro/pirateNeuro'),
    news: () => import('streams/neuro/newsNeuro'),

    // Collabs
    evil: () => import('streams/neuro/xEvil'),
    anny: () => import('streams/neuro/xAnny'),
    miyu: () => import('streams/neuro/xMiyune/xMiyune'),
    filian: () => import('streams/neuro/xFilian'),
    lily: () => import('streams/neuro/xShylily/xShylily'),
    numi: () => import('streams/neuro/xNumi'),
    family: () => import('streams/neuro/family/family'),
    collab: () => import('streams/neuro/collab')
  },

  /**
   * Vedal
   */
  vedal: {
    solo: () => import('streams/vedal/solo'),
    neuro: () => import('streams/vedal/xNeuro'),
    evil: () => import('streams/vedal/xEvil'),
    ksp: () => import('streams/vedal/ksp'),
    sub: () => import('streams/vedal/sub')
  },

  /**
   * Evil Neuro
   */
  evil: {
    // Solo
    solo: () => import('streams/evil/solo'),
    minecraft: () => import('streams/evil/minecraftEvil'),
    pirate: () => import('streams/evil/pirateEvil'),

    // Collabs
    numi: () => import('streams/evil/xNumi'),
    zen: () => import('streams/evil/xZen'),
    filian: () => import('streams/evil/xFilian'),
    collab: () => import('streams/evil/collab')
  },

  /**
   * Test boards
   */
  dev: {
    emoteTest: () => import('streams/tests/emote')
  }
}
