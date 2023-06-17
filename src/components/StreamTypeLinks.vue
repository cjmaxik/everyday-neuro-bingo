<template>
  <div class="bg-white shadow-5 shadow-transition">
    <q-list
      separator
      class="q-mt-sm text-center text-h6"
    >
      <StreamTypeItem
        v-for="(stream, index) in regularStreams"
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
        expand-icon-class="collab-toggle text-gymbag"
      >
        <div class="row">
          <div
            v-for="(stream, index) in collabStreams"
            :key="index"
            class="col-6 collabs"
          >
            <StreamTypeItem
              :to="stream.to"
              :text="stream.text"
              :featured="stream.isFeatured"
            />
          </div>
        </div>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script setup>
// project-related
import StreamTypeItem from './StreamTypeItem.vue'

const regularStreams = [
  { to: 'justChatting', text: 'Chill stream' },
  { to: 'devStream', text: 'Dev stream' },
  { to: 'evilNeuro', text: 'Evil Neuro solo' },
  { to: 'familyCollab', text: 'Family stream' }
]

const collabStreams = [
  { to: 'evilCollab', text: 'Evil Neuro' },
  { to: 'filianCollab', text: 'filian' },
  { to: 'annyCollab', text: 'anny' },
  { to: 'shylilyCollab', text: 'Shylily' }
]
</script>

<style lang="scss">
.collabs {
  border-top: 1px solid rgba(0, 0, 0, 0.12);

  &:nth-child(odd) {
    border-right: 1px solid rgba(0, 0, 0, 0.12);
  }
}
</style>
