<template>
  <q-item
    clickable
    :to="to"
    exact
  >
    <q-item-section class="text-gymbag">
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
  }
})
</script>
