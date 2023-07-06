// @ts-check

/**
 * 1. The object key is the route path
 * 2. Add the route to ./indexMenu.js
 */

export default {
  // Solo streams
  neuro: () => import('prompts/solo/neuro'),
  evil: () => import('prompts/solo/evil'),
  miNeuro: () => import('prompts/solo/minecraftNeuro'),
  ksp: () => import('prompts/ksp/ksp'),

  // Collabs
  xVedal: () => import('prompts/xVedal/xVedal'),
  xEvil: () => import('prompts/xEvil/xEvil'),
  xAnny: () => import('prompts/xAnny/xAnny'),
  xMiyune: () => import('prompts/xMiyune/xMiyune'),
  xFilian: () => import('prompts/xFilian/xFilian'),
  xShylily: () => import('prompts/xShylily/xShylily'),
  family: () => import('prompts/family/family'),
  xAnyone: () => import('prompts/xAnyone/xAnyone'),

  // Tests
  emoteTest: () => import('prompts/tests/emote')
}
