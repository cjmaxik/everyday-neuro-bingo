<template>
  <div class="col text-center">
    <q-btn
      class="full-width"
      no-caps
      :text-color="id"
      @click="$emit('selectCharacter', id)"
    >
      <q-img
        :spinner-color="id"
        :src="`/assets/images/menu/${id}.png`"
      />

      <span class="no-margin no-padding">
        {{ name }}
      </span>
    </q-btn>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

defineEmits(['selectCharacter'])
</script>
