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
  newsNeuro: () => import('streams/neuro/newsNeuro'),

  // Collabs
  xEvil: () => import('streams/neuro/xEvil'),
  xAnny: () => import('streams/neuro/xAnny/xAnny'),
  xMiyune: () => import('streams/neuro/xMiyune/xMiyune'),
  xFilian: () => import('streams/neuro/xFilian/xFilian'),
  xShylily: () => import('streams/neuro/xShylily/xShylily'),
  family: () => import('streams/neuro/family/family'),
  collab: () => import('streams/neuro/collab'),

  /**
   * Vedal
   */
  dev: () => import('streams/vedal/xNeuro'),
  devEvil: () => import('streams/vedal/xEvil'),
  ksp: () => import('streams/vedal/ksp'),
  sub: () => import('streams/vedal/sub'),
  vedal: () => import('streams/vedal/solo'),

  /**
   * Evil Neuro
   */
  evil: () => import('streams/evil/solo'),
  miEvil: () => import('streams/evil/minecraftEvil'),
  xNumi: () => import('streams/evil/xNumi/xNumi'),
  evilXfilian: () => import('streams/evil/xFilian/xFilian'),
  piEvil: () => import('streams/evil/pirateEvil'),

  // Tests
  emoteTest: () => import('streams/tests/emote')
}
