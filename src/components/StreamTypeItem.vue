<template>
  <q-item
    :class="{ 'bg-kekwa-half': featured }"
    clickable
    exact
    :to="to"
  >
    <q-item-section>
      <q-item-label
        v-if="featured"
        caption
      >
        Featured
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
  featured: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: null
  }
})
</script>
