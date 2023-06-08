<template>
  <q-item
    clickable
    :to="to"
    exact
    :class="{ 'bg-kekwa-half': featured }"
  >
    <q-item-section class="text-gymbag">
      <q-item-label
        v-show="featured"
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
