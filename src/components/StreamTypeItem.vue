<template>
  <q-item
    :class="{ 'bg-kekwa-half': featured }"
    clickable
    exact
    :to="to"
  >
    <q-item-section class="text-gymbag">
      <q-item-label
        v-if="featured"
        caption
      >
        Featured
      </q-item-label>

      <q-item-label>
        {{ text }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
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
  }
})
</script>
