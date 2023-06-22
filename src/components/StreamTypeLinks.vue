<template>
  <div class="bg-white shadow-5 shadow-transition">
    <q-list
      separator
      class="q-mt-sm text-center text-h6"
    >
      <StreamTypeItem
        v-for="(stream, index) in mainBlock"
        :key="index"
        :to="stream.to"
        :text="stream.text"
        :featured="stream.isFeatured"
      />

      <q-expansion-item
        group="collab"
        label="Collabs"
        header-class="text-gymbag text-subtitle1"
        toggle
        expand-icon-class="collab-toggle"
      >
        <div class="collabs row">
          <template
            v-for="(stream, index) in collabBlock"
            :key="index"
          >
            <StreamTypeItem
              :to="stream.to"
              :text="stream.text"
              :featured="stream.isFeatured"
              class="col-6 col-grow"
            />
          </template>
        </div>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup>
// project-related
import StreamTypeItem from './StreamTypeItem.vue'

const mainBlock = [
  { to: 'xMiyune', text: 'Miyune on the Moon', isFeatured: true },
  { to: 'justChatting', text: 'Regular Neuro streams' },
  { to: 'devStream', text: 'Streams with Vedal' },
  { to: 'evilNeuro', text: 'Evil Neuro solo' }
]

const collabBlock = [
  { to: 'evilCollab', text: 'Evil Neuro' },
  { to: 'annyCollab', text: 'anny' },
  { to: 'filianCollab', text: 'filian' },
  { to: 'shylilyCollab', text: 'Shylily' },
  { to: 'familyCollab', text: 'Family stream' }
]
</script>
