import neuro from './neuro'
import vedal from './vedal'
import filian from './filian'
import anny from './anny'

import neuroShylily from './neuroShylily'
import shylily from './shylily'

import neuroEvil from './neuroEvil'
import evilsama from './evilsama'

import annyFamily from './family/anny'
import neuroFamily from './family/neuro'
import vedalFamily from './family/vedal'

import evilsamaSolo from './evilsamaSolo'

const assetsRoute = '/assets/images'

/**
 * 1. The array name is the route path
 * 2. Add the route to ../components/StreamTypeLinks.vue
 */
export default {
  justChatting: {
    name: 'Chill stream',
    image: `${assetsRoute}/neuro/neuro.png`,
    participants: [
      neuro
    ]
  },

  vedalCollab: {
    name: 'Neuro and Vedal',
    image: `${assetsRoute}/vedal/neuroVedal2.png`,
    participants: [
      neuro, vedal
    ]
  },

  evilNeuro: {
    name: 'Neuro x Evil Neuro collab',
    image: `${assetsRoute}/evilsama/evilNeuro2.png`,
    participants: [
      neuroEvil, evilsama
    ]
  },

  evilNeuroSolo: {
    name: 'Evil Neuro solo',
    image: `${assetsRoute}/evilsama/evilNeuro2.png`,
    participants: [
      evilsamaSolo
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
  },

  familyStream: {
    name: 'Family stream',
    image: `${assetsRoute}/family/family.png`,
    participants: [
      neuroFamily, vedalFamily, annyFamily
    ]
  }
}
