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
import familyCollab from './family/familyCollab'
import evilCollab from './evil/evilCollab'
import shylilyCollab from './shylily/shylilyCollab'

// tests
import emoteTest from './emoteTest'

/**
 * 1. The object key is the route path
 * 2. Add the route to ../components/StreamTypeLinks.vue
 */
export default {
  justChatting: {
    name: 'Chill stream',
    image: 'neuro/neuro.png',
    participants: [
      neuro
    ]
  },

  devStream: {
    name: 'Neuro and Vedal',
    image: 'vedal/vedalCorpa.png',
    participants: [
      neuro, vedal
    ]
  },

  evilNeuro: {
    name: 'Evil Neuro solo',
    image: 'evilNeuro/evilNeuro.png',
    participants: [
      evilNeuro
    ]
  },

  familyCollab,

  evilCollab,

  filianCollab: {
    name: 'Neuro x filian collab',
    image: 'filian/cupsama.png',
    participants: [
      neuro, filian
    ]
  },

  annyCollab: {
    name: 'Neuro x anny collab',
    image: 'anny/tehepero.png',
    participants: [
      neuro, anny
    ]
  },

  shylilyCollab,

  // TEST BOARDS
  emoteTest: {
    name: 'Emote test',
    image: 'vedal/vedal.png',
    participants: [
      emoteTest
    ]
  }
}
