<template>
  <div class="bg-white shadow-5 shadow-transition">
    <q-list
      class="q-mt-sm text-center text-h6"
      separator
    >
      <StreamTypeItem
        v-for="stream in mainBlock"
        :key="stream.to"
        :featured="stream.to === featured"
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
import StreamTypeItem from './StreamTypeItem.vue'

const featured = 'evil'

const mainBlock = [
  { to: 'evil', text: 'Evil Neuro solo' },
  { to: 'neuro', text: 'Neuro-sama solo' },
  { to: 'xVedal', text: 'Streams with Vedal' }
]

const collabBlock = [
  { to: 'xEvil', text: 'Evil Neuro' },
  { to: 'xAnny', text: 'anny' },
  { to: 'xMiyune', text: 'Miyune' },
  { to: 'xFilian', text: 'filian' },
  { to: 'xShylily', text: 'Shylily' },
  { to: 'family', text: 'Family' }
]
</script>
