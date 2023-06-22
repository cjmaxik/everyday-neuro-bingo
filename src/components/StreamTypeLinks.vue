<template>
  <div class="bg-white shadow-5 shadow-transition">
    <q-list
      separator
      class="q-mt-sm text-center text-h6"
    >
      <StreamTypeItem
        v-for="stream in mainBlock"
        :key="stream.to"
        :to="stream.to"
        :text="stream.text"
        :featured="stream.to === featured"
      />

      <q-expansion-item
        group="collab"
        label="Collabs"
        header-class="text-gymbag"
        toggle
        expand-icon-class="collab-toggle"
      >
        <div class="collabs row">
          <StreamTypeItem
            v-for="stream in collabBlock"
            :key="stream.to"
            :to="stream.to"
            :text="stream.text"
            class="col-6 col-grow"
          />
        </div>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup>
// project-related
import StreamTypeItem from './StreamTypeItem.vue'

const featured = 'xMiyune'

const mainBlock = [
  { to: 'xMiyune', text: 'Interstellar\xa0Sleepover! feat\xa0Miyune' },
  { to: 'neuro', text: 'Neuro-sama solo' },
  { to: 'xVedal', text: 'Streams with Vedal' },
  { to: 'evil', text: 'Evil Neuro solo' }
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
