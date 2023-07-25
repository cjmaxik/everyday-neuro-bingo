<template>
  <div class="bg-white shadow-5 shadow-transition">
    <q-list
      class="q-mt-sm text-center text-h6"
      separator
    >
      <template v-for="{ name, entries } in indexMenu">
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
  </div>
</template>

<script setup>
// @ts-check

// project-related
import StreamTypeItem from 'components/StreamTypeItem.vue'
import { indexMenu } from 'conf/indexMenu'
</script>
