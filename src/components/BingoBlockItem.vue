<template>
  <div
    v-ripple.center
    class="bingo-block row justify-center items-center"
    :class="{ active: block.tally, win: block.win }"
    @click.ctrl="$emit('decrement')"
    @click.exact="$emit('increment')"
  >
    <div class="text-center q-pa-xs">
      <span
        v-if="emotes !== 'text' && withEmote !== null"
        class="bingo-block-text"
      >
        {{ withEmote.text }}

        <div class="bingo-emotes">
          <span
            v-for="( emote, index ) in withEmote.emotes "
            :key="index"
          >
            <img
              :src="emotes === 'animated' ? emote.src.animated : emote.src.Static"
              :alt="emote.name"
            >
          </span>
        </div>
      </span>

      <span
        v-else
        class="bingo-block-text"
      >
        {{ baseText }}
      </span>

      <DefaultTransition>
        <q-badge
          v-show="block.tally !== 0 && !hideTally"
          class="bingo-tally"
        >
          {{ block.tally }}
        </q-badge>
      </DefaultTransition>
    </div>
  </div>
</template>

<script setup>
// vue related
import { computed } from 'vue'

// project related
import { generateEmote } from 'src/helpers/emotes'

const props = defineProps({
  block: {
    type: Object,
    required: true
  },
  participant: {
    type: Object,
    required: false,
    default: null
  },
  hideTally: {
    type: Boolean
  },
  emotes: {
    type: String,
    default: 'animated'
  }
})

defineEmits(['increment', 'decrement'])

const baseText = computed(() => {
  return props.block.text
    .replaceAll(':', '')
    // very long text cases
    .replace('neuroplushsittingverycomfortablewhilesheroastsaporowithherfriends', 'neuroPlush with Poro')
    .replace('reallyGunPull vedalPls', '')
    .replace('AnnyLebronJam', 'Anny LebronJam')
})

const withEmote = computed(() => {
  if (!props.block.text.includes(':')) return null
  const regex = /:(\w+)+:/gmi

  let emoteData
  let text = props.block.text

  const emotes = []
  while ((emoteData = regex.exec(props.block.text)) !== null) {
    const emoteName = emoteData[1]
    const emoteSrc = generateEmote(emoteName)
    if (!emoteSrc) return null

    text = text.replace(emoteData[0], '').trim()

    emotes.push({
      src: emoteSrc,
      name: emoteName
    })
  }

  return {
    text,
    emotes
  }
})
</script>
