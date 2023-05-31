<template>
  <q-item
    clickable
    :to="to"
    exact
  >
    <q-item-section class="text-gymbag">
      <q-item-label>
        {{ text }}

        <q-badge
          v-show="isNew"
          color="gymbag"
        >
          NEW!
        </q-badge>
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
  isNew: {
    type: Boolean,
    default: false
  }
})
</script>
