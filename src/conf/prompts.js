// @ts-check

/**
 * 1. The object key is the route path
 * 2. Add the route to ./indexMenu.js
 */

export default {
  /**
   * Neuro-sama
   */
  // Solo
  neuro: () => import('streams/neuro/solo'),
  miNeuro: () => import('streams/neuro/minecraftNeuro'),
  piNeuro: () => import('streams/neuro/pirateNeuro'),
  eloNeuro: () => import('streams/neuro/eloNeuro'),

  // Collabs
  xEvil: () => import('streams/neuro/xEvil'),
  xAnny: () => import('streams/neuro/xAnny/xAnny'),
  xMiyune: () => import('streams/neuro/xMiyune/xMiyune'),
  xFilian: () => import('streams/neuro/xFilian/xFilian'),
  xShylily: () => import('streams/neuro/xShylily/xShylily'),
  family: () => import('streams/neuro/family/family'),
  xAnyone: () => import('streams/neuro/xAnyone/xAnyone'),

  /**
   * Vedal
   */
  dev: () => import('streams/vedal/xNeuro'),
  devEvil: () => import('streams/vedal/xEvil'),
  ksp: () => import('streams/vedal/ksp'),
  vedal: () => import('streams/vedal/solo'),

  /**
   * Evil Neuro
   */
  evil: () => import('streams/evil/solo'),
  miEvil: () => import('streams/evil/minecraftEvil'),
  xNumi: () => import('streams/evil/xNumi/xNumi'),
  evilXfilian: () => import('streams/evil/xFilian/xFilian'),

  // Tests
  emoteTest: () => import('streams/tests/emote')
}
