import neuro from './neuro'
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
