<template>
  <q-list
    class="q-mt-sm text-center text-h6 no-scroll"
    separator
  >
    <div
      class="text-h5 q-my-md"
      :class="`text-${character}`"
    >
      {{ indexMenu[character].name }} streams
    </div>

    <template v-for="{ name, entries } in indexMenu[character].streams">
      <q-expansion-item
        v-if="name !== null"
        :key="name"
        expand-icon-class="collab-toggle"
        group="collab"
        header-class="text-gymbag"
        :label="name"
        toggle
      >
        <div class="collabs row">
          <StreamTypeItem
            v-for="stream in entries"
            v-bind="stream"
            :key="stream.to"
            class="col-6 col-grow"
          />
        </div>
      </q-expansion-item>

      <StreamTypeItem
        v-for="stream in entries"
        v-else
        v-bind="stream"
        :key="stream.to"
      />
    </template>
  </q-list>
</template>

<script setup>
// @ts-check

// project-related
import StreamTypeItem from 'components/StreamTypeItem.vue'

defineProps({
  indexMenu: {
    type: Object,
    required: true
  },
  character: {
    type: String,
    required: true
  }
})
</script>
