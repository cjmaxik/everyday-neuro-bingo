<template>
  <q-item
    clickable
    dense
    tag="a"
    :href="href"
  >
    <q-item-section>
      <q-item-label>{{ text }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  streamType: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})

const href = computed(() => props.streamType === '/' ? '/' : `/${props.streamType ?? ''}`)
</script>
