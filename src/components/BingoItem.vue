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
      <span>
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
  }
})

defineEmits(['increment', 'decrement'])

// css binds
const tallyImage = props.participant ? `url(/assets/images/${props.participant.id}/${props.participant.image})` : ''
const participantColor = props.participant?.color ?? '#000'
</script>

<style lang="scss" scoped>
.bingo-block {
  position: relative;

  background-color: white;
  border-color: $gymbag;
  border-width: 2px;
  border-style: solid;

  height: 100px;
  min-width: 100px;

  font-size: 20px;
  line-height: 1.5rem;

  transition: all 0.25s ease;

  >div>span {
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

    background-image: v-bind('tallyImage');
    @extend .center-image;
  }
}

.active.bingo-block {
  &:before {
    opacity: 0.3;
  }
}

.win.bingo-block {
  background-color: lighten($gymbag, 30%);
  color: white;

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
  background-image: url('../assets/vedal.png');
  @extend .center-image
}

/* see MainLayout.vue */
/* TODO: tidy it up */
.row {
  >.col {
    &:last-child {
      >.bingo-block {
        border-right-width: 3px;
      }
    }

    &:first-child {
      >.bingo-block {
        border-left-width: 3px;
      }
    }
  }

  &:first-child {
    >.col {
      &:first-child {
        .bingo-block {
          border-top-left-radius: 10px;
        }
      }

      &:last-child {
        .bingo-block {
          border-top-right-radius: 10px;
        }
      }
    }
  }

  &:last-child {
    >.col {
      &:first-child {
        .bingo-block {
          border-bottom-left-radius: 10px;
        }
      }

      &:last-child {
        .bingo-block {
          border-bottom-right-radius: 10px;
        }
      }
    }
  }
}

.bingo-card {
  >.row {
    &:first-child {
      .bingo-block {
        border-top-width: 3px;
      }
    }

    &:last-child {
      .bingo-block {
        border-bottom-width: 3px;
      }
    }
  }
}
</style>
