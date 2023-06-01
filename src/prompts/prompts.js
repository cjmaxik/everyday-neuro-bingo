import neuro from './neuro'
import vedal from './vedal'
import filian from './filian'
import anny from './anny'

import neuroShylily from './neuroShylily'
import shylily from './shylily'

import neuroEvil from './neuroEvil'
import evilsama from './evilsama'

const assetsRoute = '/assets/images'

/**
 * 1. The array name is the route path
 * 2. Add the route to ../components/StreamTypeLinks.vue
 */
export default {
  justChatting: {
    name: 'Just Chatting',
    image: `${assetsRoute}/neuro/neuro.png`,
    participants: [
      neuro
    ]
  },

  vedalCollab: {
    name: 'Neuro and Vedal',
    image: `${assetsRoute}/vedal/neuro-vedal.png`,
    participants: [
      neuro, vedal
    ]
  },

  evilNeuro: {
    name: 'Neuro x Evil Neuro',
    image: `${assetsRoute}/evilsama/evilship.png`,
    participants: [
      neuroEvil, evilsama
    ]
  },

  filianCollab: {
    name: 'Neuro x filian collab',
    image: `${assetsRoute}/filian/cupsama.png`,
    participants: [
      neuro, filian
    ]
  },

  annyCollab: {
    name: 'Neuro x anny collab',
    image: `${assetsRoute}/anny/tehepero.png`,
    participants: [
      neuro, anny
    ]
  },

  shylilyCollab: {
    name: 'Neuro x Shylily collab',
    image: `${assetsRoute}/shylily/lily.png`,
    participants: [
      neuroShylily, shylily
    ]
  }
}
