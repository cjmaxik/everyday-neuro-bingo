<template>
  <q-chip
    :ripple="false"
    text-color="gymbag"
  >
    {{ state.streamName }}
  </q-chip>

  <q-btn-dropdown
    stretch
    flat
    label="Change stream"
    no-caps
  >
    <q-item-label header>
      Solo
    </q-item-label>

    <q-item
      clickable
      dense
      tag="a"
      href="/"
    >
      <q-item-section>
        <q-item-label>Just Chatting</q-item-label>
      </q-item-section>
    </q-item>

    <q-separator />

    <q-item-label header>
      Collabs
    </q-item-label>

    <q-item
      clickable
      dense
      tag="a"
      href="/filianCollab"
    >
      <q-item-section>
        <q-item-label>filian</q-item-label>
      </q-item-section>
    </q-item>
    <q-list />
  </q-btn-dropdown>
</template>

<script setup>
// state
import { gameState } from '../stores/gameState'
const state = gameState()
</script>
