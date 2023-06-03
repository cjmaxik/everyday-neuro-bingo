<template>
  <div
    class="bingo-block free"
    :class="{ win }"
  />
</template>

<script setup>
const props = defineProps({
  freeBlockImage: {
    type: String,
    required: true
  },
  win: {
    type: Boolean
  }
})

// CSS binds
const freeBlockImageSrc = `url(${props.freeBlockImage})`
</script>

<style lang="scss" scoped>
// Variables here only.
// See ../css/app.css for the whole CSS

.free {
  background-image: v-bind('freeBlockImageSrc');
}
</style>
