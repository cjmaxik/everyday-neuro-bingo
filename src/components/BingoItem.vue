<template>
  <div
    v-if="block.free"
    class="bingo-block free"
    :class="{ win: block.win }"
  />

  <div
    v-if="!block.free"
    v-ripple.center
    class="bingo-block row justify-center items-center"
    :class="{ active: block.tally, win: block.win }"
    @click.ctrl="$emit('decrement')"
    @click.exact="$emit('increment')"
  >
    <div class="text-center q-pa-xs">
      <span class="bingo-block-text">
        {{ block.text }}
      </span>

      <q-badge class="bingo-tally">
        {{ block.tally }}
      </q-badge>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  block: {
    type: Object,
    required: true
  },
  win: {
    type: Boolean,
    default: false
  },
  participant: {
    type: Object,
    required: false,
    default: null
  },
  freeBlockImage: {
    type: String,
    required: false,
    default: '/assets/images/neuro/gymbag.png'
  }
})

defineEmits(['increment', 'decrement'])

// css binds
const tallyImage = props.participant ? `url(/assets/images/${props.participant.id}/${props.participant.image})` : ''
const participantColor = props.participant?.color ?? '#000'
const freeBlockImageSrc = `url(${props.freeBlockImage})`
</script>

<style lang="scss" scoped>
.bingo-block {
  position: relative;

  height: 100px;
  min-width: 100px;

  font-size: 20px;
  line-height: 1.5rem;

  transition: all 0.25s ease;

  span.bingo-block-text {
    color: v-bind('participantColor')
  }

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;

    opacity: 0;
    transition: all 0.25s ease;

    background-image: v-bind('tallyImage');
    @extend .center-image;
  }
}

.active.bingo-block {
  &:before {
    opacity: 0.2;
  }
}

.win.bingo-block {
  background-color: lighten($gymbag, 30%);
  color: white;

  span.bingo-block-text {
    color: white;
  }

  &:before:not(.free) {
    opacity: 0.1;
  }
}

.bingo-tally {
  position: absolute;

  bottom: 0;
  right: 0;

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;

  background-color: $gymbag;
  font-size: 15px;
  padding: 4px 2px 0px 4px;
}

.center-image {
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
}

.free {
  background-image: v-bind('freeBlockImageSrc');
  @extend .center-image
}
</style>
