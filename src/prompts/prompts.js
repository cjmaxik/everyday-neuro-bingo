/**
 * Solo streams
 */
import neuro from 'prompts/neuro'
import evilNeuro from 'prompts/evilNeuro'
import minecraftNeuro from 'prompts/minecraftNeuro'
import nuero from 'prompts/nuero'

/**
 * Collabs
 *
 * NOTE: If you use a separate prompt file for Neuro, create a folder
 * in this for the collab and have all participants there,
 * create an '{x}Collab.js' there for stream data and import it here.
 * See 'family/familyCollab.js' for the example
 */
import vedal from 'prompts/vedal'
import filian from 'prompts/filian'
import anny from 'prompts/anny'
import family from 'prompts/family/familyCollab'
import xEvil from 'prompts/evil/evilCollab'
import xShylily from 'prompts/shylily/shylilyCollab'
import xMiyune from 'prompts/miyune/miyuneCollab'

// tests
import emoteTest from 'prompts/emoteTest'

/**
 * 1. The object key is the route path
 * 2. Add the route to ../components/StreamTypeLinks.vue
 */
export default {
  neuro: {
    name: 'Neuro-sama solo',
    image: 'neuro/random/neuro{x}.png',
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

  miNeuro: {
    name: 'Neuro-sama plays Minecraft',
    image: 'neuro/minecraft/neuroLava.png',
    participants: [
      minecraftNeuro
    ],
    random: true
  },

  // TEST BOARDS
  emoteTest: {
    name: 'Emote test',
    image: 'vedal/vedal.png',
    participants: [
      emoteTest
    ]
  },

  // Split board testing
  nuero
}
