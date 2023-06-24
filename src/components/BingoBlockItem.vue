<template>
  <div
    v-ripple.center
    class="bingo-block row justify-center items-center"
    :class="{ active: block.tally, win: block.win }"
    @click.ctrl="$emit('decrement')"
    @click.exact="$emit('increment')"
  >
    <div class="text-center q-pa-xs">
      <div class="bingo-block-text">
        <template v-if="emotes !== 'text' && withEmotes !== null">
          {{ withEmotes.text }}

          <div class="bingo-emotes">
            <template
              v-for="emote in withEmotes.emotes"
              :key="emote.name"
            >
              <img
                :alt="emote.name"
                :src="(emotes === 'animated' && focusedPage) ? emote.src.animated : emote.src.static"
              >
            </template>
          </div>
        </template>

        <template v-else>
          {{ baseText }}
        </template>
      </div>

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
import { useWindowFocus } from '@vueuse/core'

// project related
import { generateEmote, prepareBaseText } from 'src/helpers/emotes'

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

const focusedPage = useWindowFocus()

const baseText = computed(() => prepareBaseText(props.block.text))

const withEmotes = computed(() => {
  if (!props.block.text.includes(':')) return null
  const regex = /:(\w+)+:/gmi

  let emoteData
  let text = props.block.text

  const emotes = []
  while ((emoteData = regex.exec(props.block.text)) !== null) {
    const emote = generateEmote(emoteData[1])
    if (!emote) return null

    text = text.replace(emoteData[0], '').trim()
    emotes.push(emote)
  }

  return {
    text,
    emotes
  }
})
</script>
