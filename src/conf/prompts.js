/**
 * 1. The object key is the route path
 * 2. Add the route to ./indexMenu.js
 */
export default {
  // Solo streams
  neuro: () => import('prompts/solo/neuro'),
  evil: () => import('prompts/solo/evil'),
  miNeuro: () => import('prompts/solo/minecraftNeuro'),

  // Collabs
  xVedal: () => import('prompts/xVedal/xVedal'),
  xEvil: () => import('prompts/xEvil/xEvil'),
  xAnny: () => import('prompts/xAnny/xAnny'),
  xMiyune: () => import('prompts/xMiyune/xMiyune'),
  xFilian: () => import('prompts/xFilian/xFilian'),
  xShylily: () => import('prompts/xShylily/xShylily'),
  xNumi: () => import('prompts/xNumi/xNumi'),
  family: () => import('prompts/family/family'),

  // Tests
  emoteTest: () => import('prompts/solo/emoteTest')
}
