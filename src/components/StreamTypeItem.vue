<template>
  <q-item
    class="text-center text-h6 bg-white"
    clickable
    exact
    :to="to"
  >
    <q-item-section>
      <q-item-label
        v-if="upcoming"
        caption
      >
        Upcoming
      </q-item-label>

      <q-item-label
        :class="{ 'text-gymbag': !color }"
        :style="{ color }"
      >
        {{ text }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
// @ts-check

defineProps({
  to: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  upcoming: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: null
  }
})
</script>
