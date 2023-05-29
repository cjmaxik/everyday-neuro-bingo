import neuro from './neuro'
import vedal from './vedal'
import filian from './filian'
import anny from './anny'

/**
 * 1. The array name is the route path
 * 2. Add the route to ../components/StreamTypeLinks.vue
 */
export default {
  justChatting: {
    name: 'Just Chatting',
    participants: [
      neuro
    ]
  },

  vedalCollab: {
    name: 'Neuro and Vedal',
    participants: [
      neuro, vedal
    ]
  },

  filianCollab: {
    name: 'Neuro x filian collab',
    participants: [
      neuro, filian
    ]
  },

  annyCollab: {
    name: 'Neuro x anny collab',
    participants: [
      neuro, anny
    ]
  }
}
