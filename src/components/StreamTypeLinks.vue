<template>
  <q-btn
    class="absolute-left"
    color="white"
    icon="keyboard_arrow_left"
    padding="xs"
    style="height: 100%; z-index:999;"
    text-color="gymbag"
    @click="$emit('returnToSelection')"
  />

  <div
    class="q-ml-sm text-h5 q-my-sm text-center"
    :class="`text-${id}`"
  >
    {{ characterName }} streams
  </div>

  <q-list
    class="q-ml-sm q-mt-sm text-center no-scroll"
    separator
  >
    <template v-for="{ name, entries } in streams">
      <q-expansion-item
        v-if="name !== null"
        :key="name"
        expand-icon-class="collab-toggle"
        group="collab"
        header-class="text-gymbag text-h6"
        :label="name"
        toggle
      >
        <div class="collabs row">
          <StreamTypeItem
            v-for="stream in entries"
            v-bind="stream"
            :key="stream.to"
            class="col-6 col-grow"
            :to="toLink(id, stream.to)"
          />
        </div>
      </q-expansion-item>

      <StreamTypeItem
        v-for="stream in entries"
        v-else
        v-bind="stream"
        :key="stream.to"
        :to="toLink(id, stream.to)"
      />
    </template>
  </q-list>
</template>

<script setup>
// @ts-check

// project-related
import StreamTypeItem from 'components/StreamTypeItem.vue'

defineProps({
  id: {
    type: String,
    required: true
  },
  characterName: {
    type: String,
    required: true
  },
  streams: {
    type: Object,
    required: true
  }
})

const toLink = (id, to) => {
  return `${id}/${to}`
}

defineEmits(['returnToSelection'])
</script>
