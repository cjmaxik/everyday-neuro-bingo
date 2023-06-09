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
        v-if="withEmote !== null"
        class="bingo-block-text"
      >
        {{ withEmote.text }} <img
          :src="withEmote.emoteSrc"
          :alt="withEmote.emoteName"
        ></span>

      <span
        v-else
        class="bingo-block-text"
      >
        {{ block.text }}
      </span>

      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <q-badge
          v-show="block.tally !== 0 && !hideTally"
          class="bingo-tally"
        >
          {{ block.tally }}
        </q-badge>
      </transition>
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
  staticEmotes: {
    type: Boolean
  }
})

defineEmits(['increment', 'decrement'])

// CSS binds
const tallyImage = props.participant ? `url(${props.participant.image})` : ''
const participantColor = props.participant?.color ?? '#000'

const withEmote = computed(() => {
  const regex = /:(\w+):/g

  if (props.block.text.includes(':')) {
    const emoteData = regex.exec(props.block.text)
    if (!emoteData) return null

    const emoteName = emoteData[1]
    const emoteSrc = generateEmote(emoteName, props.staticEmotes)
    if (!emoteSrc) return null

    return {
      text: props.block.text.replace(emoteData[0], ''),
      emoteSrc,
      emoteName
    }
  }

  return null
})
</script>

<style lang="scss" scoped>
// Variables here only.
// See ../css/app.css for the whole CSS

.bingo-block {
  &:not(.win) {
    span.bingo-block-text {
      color: v-bind('participantColor')
    }
  }

  &:before {
    background-image: v-bind('tallyImage');
  }
}
</style>
