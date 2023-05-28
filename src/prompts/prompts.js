import filian from './filian'
import neuro from './neuro'

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
  }
}
