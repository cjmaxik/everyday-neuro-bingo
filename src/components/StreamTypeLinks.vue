<template>
  <q-btn-dropdown
    stretch
    flat
    no-caps
  >
    <template #label>
      <q-chip
        :ripple="false"
        text-color="gymbag"
        color="white"
      >
        {{ state.streamName }}
      </q-chip>

      <q-tooltip class="text-body2 bg-gymbag">
        Change the stream type
      </q-tooltip>
    </template>

    <q-item-label header>
      Regular streams
    </q-item-label>

    <StreamTypeItem
      stream-type="/"
      text="Just Chatting"
    />

    <StreamTypeItem
      stream-type="vedalCollab"
      text="with Vedal"
    />

    <q-separator />

    <q-item-label header>
      Collabs
    </q-item-label>

    <StreamTypeItem
      stream-type="filianCollab"
      text="filian"
    />

    <StreamTypeItem
      stream-type="annyCollab"
      text="anny"
    />

    <StreamTypeItem
      stream-type="shylilyCollab"
      text="Shylily"
    />

    <q-list />
  </q-btn-dropdown>
</template>

<script setup>
// project-related
import StreamTypeItem from './StreamTypeItem.vue'

// state
import { gameState } from '../stores/gameState'
const state = gameState()
</script>
