/**
 * Solo streams
 */
import neuro from './neuro'
import evilNeuro from './evilNeuro'

/**
 * Collabs
 *
 * NOTE: If you use a separate prompt file for Neuro, create a folder
 * in this for the collab and have all participants there,
 * create an '{x}Collab.js' there for stream data and import it here.
 * See 'family/familyCollab.js' for the example
 */
import vedal from './vedal'
import filian from './filian'
import anny from './anny'
import family from './family/familyCollab'
import xEvil from './evil/evilCollab'
import xShylily from './shylily/shylilyCollab'
import xMiyune from './miyune/miyuneCollab'

// tests
import emoteTest from './emoteTest'

/**
 * 1. The object key is the route path
 * 2. Add the route to ../components/StreamTypeLinks.vue
 */
export default {
  neuro: {
    name: 'Neuro-sama solo',
    image: 'neuro/neuro.png',
    participants: [
      neuro
    ]
  },

  neuRandom: {
    name: 'Neuro-sama solo (random board)',
    image: 'neuro/neuro.png',
    participants: [
      neuro
    ],
    random: true
  },

  xVedal: {
    name: 'Neuro and Vedal',
    image: 'vedal/vedalCorpa.png',
    participants: [
      neuro, vedal
    ]
  },

  evil: {
    name: 'Evil Neuro solo',
    image: 'evilNeuro/evilNeuro.png',
    participants: [
      evilNeuro
    ]
  },

  family,

  xEvil,

  xFilian: {
    name: 'Neuro x filian collab',
    image: 'filian/cupsama.png',
    participants: [
      neuro, filian
    ]
  },

  xAnny: {
    name: 'Neuro x anny collab',
    image: 'anny/tehepero.png',
    participants: [
      neuro, anny
    ]
  },

  xShylily,

  xMiyune,

  // TEST BOARDS
  emoteTest: {
    name: 'Emote test',
    image: 'vedal/vedal.png',
    participants: [
      emoteTest
    ]
  }
}
