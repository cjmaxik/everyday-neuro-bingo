<template>
  <div class="bg-white shadow-5 shadow-transition">
    <q-list
      class="q-mt-sm text-center text-h6"
      separator
    >
      <StreamTypeItem
        v-for="stream in mainBlock"
        :key="stream.to"
        :color="stream.color"
        :featured="featured && stream.to === featured"
        :text="stream.text"
        :to="stream.to"
      />

      <q-expansion-item
        expand-icon-class="collab-toggle"
        group="collab"
        header-class="text-gymbag"
        label="Collabs"
        toggle
      >
        <div class="collabs row">
          <StreamTypeItem
            v-for="stream in collabBlock"
            :key="stream.to"
            class="col-6 col-grow"
            :color="stream.color"
            :text="stream.text"
            :to="stream.to"
          />
        </div>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup>
// project-related
import StreamTypeItem from 'components/StreamTypeItem.vue'
import { featured, mainBlock, collabBlock } from 'prompts/indexMenu'
</script>
