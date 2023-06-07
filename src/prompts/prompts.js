/**
 * Solo streams
 */
import neuro from './neuro'
import evilNeuro from './evilNeuro'

/**
 * Collabs
 *
 * NOTE: If you use a separate prompt file for Neuro, create a folder
 * in 'neuroCollabs' for the collab and have all participants there,
 * create an '{x}Collab.js' there for stream data and import it here.
 * See 'neuroCollabs/family/familyCollab.js' for the example
 */
import vedal from './vedal'
import filian from './filian'
import anny from './anny'
import familyCollab from './neuroCollabs/family/familyCollab'
import evilCollab from './neuroCollabs/evil/evilCollab'
import shylilyCollab from './neuroCollabs/shylily/shylilyCollab'

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
    image: 'vedal/neuroVedal2.png',
    participants: [
      neuro, vedal
    ]
  },

  evilNeuro: {
    name: 'Evil Neuro solo',
    image: 'evilNeuro/evilNeuro2.png',
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

  shylilyCollab
}
